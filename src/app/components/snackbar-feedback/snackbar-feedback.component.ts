import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ApplicationFeatures } from 'src/app/services/ApplicationFeatures.service';

@Component({
  selector: 'app-snackbar-feedback',
  templateUrl: './snackbar-feedback.component.html',
  styleUrls: ['./snackbar-feedback.component.scss']
})
export class SnackbarFeedbackComponent {

  constructor(
    public sbRef: MatSnackBarRef<SnackbarFeedbackComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any, private feedbackService: ApplicationFeatures
  ) {}


  close() {
    this.feedbackService.closeSnackbar();
  }
}