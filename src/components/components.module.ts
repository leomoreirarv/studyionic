import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout/logout';
import { CameraStudyComponent } from './camera-study/camera-study';
@NgModule({
	declarations: [LogoutComponent,
    CameraStudyComponent],
	imports: [],
	exports: [LogoutComponent,
    CameraStudyComponent]
})
export class ComponentsModule {}
