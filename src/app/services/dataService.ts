import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentInterface } from '../department/interfaces/DepartmentInterface';
import { ItemInterface } from '../item/interfaces/ItemInterface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = `${environment.apiUrl}/department`;

  constructor(private http: HttpClient) {}

  // Department
  getDepartments(): Observable<DepartmentInterface[]> {
    return this.http.get<DepartmentInterface[]>(`${this.baseUrl}`);
  }

  getDepartmentByNumber(number: number): Observable<DepartmentInterface> {
    return this.http.get<DepartmentInterface>(`${this.baseUrl}/by-number/${number}`);
  }

  createDepartment(dept: DepartmentInterface): Observable<DepartmentInterface> {
    return this.http.post<DepartmentInterface>(`${this.baseUrl}`, dept);
  }

  updateDepartment(number: number, dept: DepartmentInterface): Observable<DepartmentInterface> {
    return this.http.put<DepartmentInterface>(`${this.baseUrl}/${number}`, dept);
  }

  deleteDepartment(number: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${number}`);
  }

  // Item
  getItems(): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(`${this.baseUrl}/items`);
  }

  getItemsByDepartmentNumber(departmentNumber: number): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(`${this.baseUrl}/items/by-department/${departmentNumber}`);
  }

  getItemByNumber(number: number): Observable<ItemInterface> {
    return this.http.get<ItemInterface>(`${this.baseUrl}/items/by-number/${number}`);
  }

  createItem(item: ItemInterface): Observable<ItemInterface> {
    return this.http.post<ItemInterface>(`${this.baseUrl}/items`, item);
  }

  updateItem(number: number, item: ItemInterface): Observable<ItemInterface> {
    return this.http.put<ItemInterface>(`${this.baseUrl}/items/${number}`, item);
  }

  deleteItem(number: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/items/${number}`);
  }
}
