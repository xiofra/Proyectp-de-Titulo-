import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NuevousuarioComponent } from '../nuevousuario/nuevousuario.component';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {


  constructor(private dialog : MatDialog
              ) { }


  ngOnInit() {

  }


  abrirFormulario(){
    this.dialog.open(NuevousuarioComponent,{
      width:'50%'
    });
  }




}
