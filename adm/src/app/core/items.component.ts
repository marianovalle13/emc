import { Component, OnInit, Directive } from '@angular/core';
import { PageService } from './page.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Directive({})
export class ItemsComponent implements OnInit {

  items: any = [];
  textSearch: any = '';
  loading = true;
  page = 1;
  pages = 0;
  itemsPerPage = 0;
  count = 0;
  SORT_ASC = 1;
  SORT_DESC = -1;
  sortField: any = { name: this.SORT_ASC };
  closeResult = '';
  itemSelected: any;

  constructor(
    public pageService: PageService,
    private modalService: NgbModal,
  ) {
    this.initialize();
  }

  ngOnInit() {
    this.getItems();
  }

  initialize() {
  }

  edit(item) {
    this.pageService.navigate('/' + item.id);
  }

  update(item, reloadItems = false) {
    this.pageService.httpUpdate(item)
      .then(data => {
        if (reloadItems) this.getItems();
        this.pageService.showSuccess('Se actualizó correctamente.')
      })
      .catch(err => {
        if (reloadItems) this.getItems();
        this.pageService.showError('No se pudo actualizar la entidad.')
      })
  }

  remove(item) {
    if (!confirm('¿Esta seguro que desea eliminar este elemento?')) {
      return
    }
    this.pageService.httpRemove(item)
      .then(data => {
        this.getItems();
        this.pageService.showSuccess('Se eliminó correctamente.')
      })
      .catch(err => {
        this.getItems();
        this.pageService.showError('No se pudo eliminar la entidad.')
      })
  }

  create() {
    this.pageService.navigate('/new');
  }

  getFiltersSearch(textSearch) {
    let filters: any = { name: textSearch };
    return filters;
  }

  // search() {
  //   const ts = this.textSearch.trim();
  //   let filters: any = {};
  //   if (ts !== '') {
  //     filters = this.getFiltersSearch(this.textSearch);
  //   }
  //   this.getItems();
  // }

  getAllFilters() {
    const ts = this.textSearch.trim();
    let filtersSearch: any = {};
    if (ts !== '') {
      filtersSearch = this.getFiltersSearch(this.textSearch);
    }
    let filters = this.getFilters();
    return {
      ...filtersSearch,
      ...filters,
    };
  }

  getItems() {
    this.loading = true;
    this.pageService.httpGetAll(this.getAllFilters(), this.getSort(), this.getPopulates(), this.getPage())
      .then(result => {
        this.items = result.data;
        this.pages = result.pages;
        this.count = result.count;
        this.itemsPerPage = result.itemsPerPage;

          
        
        this.getItemSuccess();
      })
      .catch(error => {
        this.pageService.showError(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  getItemSuccess() {
  }

  getSort() {
    // let sort: any = { name: 0 };
    // return sort;
    return this.sortField;
  }

  getPage() {
    return this.page;
  }

  getPopulates() {
    return [];
  }

  getFilters() {
    return {};
  }

  previousPage() {
    this.page--;
    this.getItems();
  }

  nextPage() {
    this.page++;
    this.getItems();
  }

  sort(field) {
    let order = this.SORT_ASC;
    if (this.sortField[field]) {
      if (this.sortField[field] == order)
        this.sortField[field] = this.SORT_DESC;
      else
        delete this.sortField[field];
    } else {
      this.sortField = {};
      this.sortField[field] = order;
    }
    this.getItems();
  }

  openModal(content, item) {
    this.itemSelected = item;

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
