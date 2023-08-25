// Estás importando las dependencias necesarias.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

// Comienza la descripción del grupo de pruebas para el componente HomePage.
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // Antes de cada prueba, configura el entorno de prueba para el componente.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage], // Declaras el componente que estás probando.
      imports: [IonicModule.forRoot()] // Importas las dependencias necesarias.
    }).compileComponents();

    // Creas una instancia del componente y detectas los cambios iniciales.
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Una prueba básica que verifica si el componente se crea correctamente.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

