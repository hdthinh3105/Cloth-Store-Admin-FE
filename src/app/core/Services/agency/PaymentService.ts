import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environment/Environment";
import {Injectable} from "@angular/core";
import {AgencyBaseService} from "../generic/agency-base-service";

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends AgencyBaseService{

  public getAllPayment(): Observable<any> {
    return this.post("/api/v1/Payment/getAllPayment", {});
  }
  public deletePayment(id: string): Observable<any> {
    return this.delete("/api/v1/Payment",id);
  }
  public addPayment(paymentFull: any): Observable<any> {
    return this.post("/api/v1/Payment/createPayment", paymentFull);
  }
  public updatePayment(paymentFull: any): Observable<any> {
    return this.post("/api/v1/Payment/updatePayment", paymentFull);
  }
}
