import { Component, OnInit } from '@angular/core';
import { MenuItem} from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


   items: MenuItem[] | undefined;

   constructor(){
    
   }

   ngOnInit(): void {
      this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ];
   }

}
