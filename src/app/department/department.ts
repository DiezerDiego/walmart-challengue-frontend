import { Component, OnInit } from '@angular/core';
import { DepartmentInterface } from './interfaces/DepartmentInterface';
import { DataService } from '../services/dataService';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-department',
  templateUrl: './department.html',
  styleUrls: ['./department.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterOutlet],
})
export class Department implements OnInit {
  departments: DepartmentInterface[] = [];

  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.dataService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }

  viewItems(departmentNumber: number) {
    this.router.navigate([`/department/${departmentNumber}/items`]);
  }

  editDepartment(department: DepartmentInterface) {
    console.log('Edit', department);
  }

  deleteDepartment(departmentNumber: number) {
    console.log('Delete department:', departmentNumber);
  }

  createDepartment() {
    console.log('Create new department');
  }
}
