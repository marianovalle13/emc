import { Injectable } from '@angular/core';
import { Settings } from '../app.settings';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public settings = Settings;

  public loadingBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loading = false;

  public userBehaviorSubject: BehaviorSubject<boolean>;
  public user: any;

  public objects = {};
  public objectsBehaviorSubject = {};

  constructor() {
    this.loadUser();
    this.userBehaviorSubject = new BehaviorSubject(false);
  }

  // (+) User

  /**
   * Save user
   */
  saveUser(user: any) {
    localStorage.setItem( this.settings.storage.user, JSON.stringify( user ) );
    this.user = user;
    this.userBehaviorSubject.next( true );
  }

  /**
   * Get user
   */
  getUser() {
    return this.user;
  }

  /**
   * Get user
   */
  isUserLogged() {
    return this.user ? true : false;
  }

  /**
   * Remove user
   */
  removeUser() {
    localStorage.removeItem( this.settings.storage.user );
    this.user = null;
    this.userBehaviorSubject.next(false);
  }

  /**
   * Get observable
   */
  getUserAsObservable(): Observable<any> {
    return this.userBehaviorSubject.asObservable();
  }

  /**
   * Check user
   */
  checkUser() {
    const u = this.loadUser();
    if( u )
      this.userBehaviorSubject.next( true );
    else
      this.userBehaviorSubject.next(false);
    return this.user;
  }

  /**
   * Load user
   */
  loadUser() {
    const u = localStorage.getItem( this.settings.storage.user );
    if( u )
      this.user = JSON.parse(u);
    else
      this.user = null;
    return this.user;
  }
  // (-) User


  // (+) Generic objects

  /**
   * Save object
   */
  save( key, object ) {
    localStorage.setItem( key, JSON.stringify( object ) );
    this.objects[key] = object;
    if(!this.objectsBehaviorSubject[key])
      this.objectsBehaviorSubject[key] = new BehaviorSubject(true);
    else
      this.objectsBehaviorSubject[key].next( true );
  }

  /**
   * Get object
   */
  get( key ) {
    return this.objects[key];
  }

  /**
   * Get object
   */
  exists( key ) {
    return this.objects[key] ? true : false;
  }

  /**
   * Remove object
   */
  remove( key ) {
    localStorage.removeItem( key );
    delete this.objects[key];
    this.objectsBehaviorSubject[key].next(false);
  }

  /**
   * Get object as observable
   */
  getAsObservable( key ): Observable<any> {
    return this.objectsBehaviorSubject[key].asObservable();
  }

  /**
   * Check object
   */
  check( key ) {
    const u = this.load( key );
    if( u )
      this.objectsBehaviorSubject[key].next( true );
    else
      this.objectsBehaviorSubject[key].next(false);
    return this.objects[key];
  }

  /**
   * Load object
   */
  load( key ) {
    const o = localStorage.getItem( key );
    if( o )
      this.objects[key] = JSON.parse( o );
    else
      delete this.objects[key];
    return this.objects[key];
  }
  // (-) Generic objects


  // (+) Loading

  /**
   * Show
   */
  showLoading() {
    // if(this.loading) return;
    this.loading = true;
    this.loadingBehaviorSubject.next( true );
  }

  /**
   * Show
   */
  hideLoading() {
    // if(!this.loading) return;
    this.loading = false;
    this.loadingBehaviorSubject.next( false );
  }

  /**
   * Is showing
   */
  isLoading() {
    return this.loading;
  }

  /**
   * Get loading observable
   */
  getLoadingAsObservable(): Observable<any> {
    return this.loadingBehaviorSubject.asObservable();
  }

  // (-) Loading
}
