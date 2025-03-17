import { Component, OnInit} from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-carrito',
  standalone:true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './carrito.component.html',
  styleUrl : './carrito.component.css'})
  export class CarritoComponent implements OnInit {
    carrito: any[]=[];
    constructor(private carritoService:CarritoService){}
    ngOnInit():void{
      this.carrito = this.carritoService.obtenerCarrito();
    }
    eliminarProducto(index:number){
      this.carritoService.eliminarProducto(index);
    }
    generarDescargarXML(){
      const xml = this.carritoService.generarXML();
      this.carritoService.descargarXML(xml);
    }

    
    
}