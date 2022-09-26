import { Component, OnInit } from '@angular/core';
import {
  IRoutesMenu,
  ISsocialNetworks,
  IUser,
} from 'src/app/models/interfaces/views/components/header.interfaces';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  socialNetworks: Partial<Array<ISsocialNetworks>> = [];
  routesMenu: Array<IRoutesMenu> = [];
  openMenu: boolean = false;
  user: Partial<IUser> = {};

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.getSocialNetworks();
    this.getRoutesMenu();
    this.getUser();
  }

  getSocialNetworks() {
    this.headerService
      .getSocialNetworks()
      .subscribe((res) => (this.socialNetworks = res.data));
  }

  isFirstItem(name?: string): boolean {
    if (this.socialNetworks.length > 0) {
      if (this.socialNetworks[0]?.name === name) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getIcon(name?: string): string {
    if (name === 'Facebook') {
      return 'facebook fa fa-facebook';
    } else if (name === 'Twitter') {
      return 'twitter fa fa-twitter';
    } else if (name === 'Google') {
      return 'google fa fa-google-plus';
    } else if (name === 'Instagram') {
      return 'instagram fa fa-instagram';
    } else {
      return 'youtube fa fa-youtube';
    }
  }

  getRoutesMenu(): void {
    this.routesMenu = this.headerService.headerMenuItems();
  }

  /**
   * This function is used from identify if selected menu is active.
   * @param {string} path - path of menu.
   * @return {string} - with class active if path selected is equal to pathname of the window else return empty string.
   */
  isActive(path: string): string {
    const { pathname } = window.location;
    if (pathname === path) {
      return 'active';
    } else {
      return '';
    }
  }

  /**
   * This function open and close the mobile menu.
   * @return {void} - with the action set.
   */
  executeMenu(): void {
    let selector = document.getElementById('dropdown-mobile');
    if (this.openMenu) {
      if (selector) {
        selector.setAttribute('style', 'display: none;');
      }

      this.openMenu = !this.openMenu;
    } else {
      if (selector) {
        selector.setAttribute('style', 'display: block');
      }

      this.openMenu = !this.openMenu;
    }
  }

  /**
   * This function is used from get the user was storage in the local storage.
   * @return {void} - with the user storage.
   */
  getUser(): void {
    let session = localStorage.getItem('session');
    let user = JSON.parse(session ? session : '');

    this.user = user;
  }
}
