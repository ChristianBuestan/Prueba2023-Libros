import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/domain/libro';
import { Persona } from 'src/app/domain/persona';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent {

  title= "Crear libros"

  //variable persona
   libro:Libro=new Libro();

  constructor(private router: Router,
    private libroService:ClientesService){
    }


  //para animaciones
  ngOnInit(): void{

  }
  guardar(){
    console.log(this.libro)
    this.libroService.save(this.libro).subscribe(data=>{
      console.log(data);
    })
    this.libro=new Persona();
  }
  golistarlibros(){
    this.router.navigate(['clientes/listar'])
  }
  golistarFactura(){
    this.router.navigate(['facturas/listar'])
  }

  

}
