import { NgModule } from "@angular/core";
import { AuFaInputComponent } from "./au-fa-input/au-fa-input.component";
import { InputRefDirective } from "./common/input-ref.directive";
import { CommonModule } from "@angular/common";
import { AuMdInputComponent } from './au-md-input/au-md-input.component';


@NgModule({
    declarations: [AuFaInputComponent, InputRefDirective, AuMdInputComponent],
    imports: [CommonModule],
    exports: [AuFaInputComponent, InputRefDirective, AuMdInputComponent]
})
export class AuInputModule {}