import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ItemInterface } from '../item/interfaces/ItemInterface';
import { DataService } from '../services/dataService';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './item.html',
  styleUrls: ['./item.css']
})
export class Item implements OnInit {
  @Input() departmentNumber!: number;

  items: ItemInterface[] = [];
  displayedColumns: string[] = ['number', 'description', 'barcode', 'price', 'actions'];

  constructor(private dataService: DataService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.departmentNumber = +params['number']; 
     this.loadItemsByDepartment(this.departmentNumber);
     
    });
  }


  loadItemsByDepartment(deptNumber: number) {
    this.dataService.getItemsByDepartmentNumber(deptNumber).subscribe(items => {
      this.items = items;
    });
  }

  editItem(item: ItemInterface) {
    console.log('Edit', item);
  }

  deleteItem(item: ItemInterface) {
    console.log('Delete', item);
  }
}
