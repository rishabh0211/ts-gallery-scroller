import {
  Component,
  OnInit,
  AfterViewChecked,
  HostListener,
  ViewChild,
  ElementRef,
  AfterContentChecked,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent
  implements OnInit, AfterViewChecked, AfterViewInit {
  public productsToBeShown: any[];
  public showSpinner: boolean;
  public index: number;
  public products = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48
  ];

  @ViewChild("target") public el: ElementRef;

  @HostListener("window:resize")
  onResize() {
    this.matchHeight(this.el.nativeElement, "card-img-top");
    this.matchHeight(this.el.nativeElement, "card-body");
  }

  constructor() {
    this.showSpinner = false;
  }
  public ngOnInit(): void {
    this.productsToBeShown = this.products.slice(0, 12);
    this.index = 1;
    window.scrollTo(0, 0);
  }

  onImageLoad() {
    console.log("image loaded");
  }

  public onScroll(): void {
    this.showSpinner = true;
    const arrayToPush = this.products.slice(
      12 * this.index,
      12 * (this.index + 1)
    );
    this.productsToBeShown = [...this.productsToBeShown, ...arrayToPush];
    this.index++;
    this.showSpinner = false;
  }

  public ngAfterViewInit(): void {
    const img = <HTMLImageElement>document.getElementById("prd-image");
    img.onload = () => {
      this.matchHeight(this.el.nativeElement, "card-body");
      this.matchHeight(this.el.nativeElement, "card-img-top");
    };
  }

  public ngAfterViewChecked(): void {
    this.matchHeight(this.el.nativeElement, "card-body");
    this.matchHeight(this.el.nativeElement, "card-img-top");
  }

  public matchHeight(parent: HTMLElement, className: string) {
    if (!parent) {
      return;
    }

    const children = parent.getElementsByClassName(className);

    if (!children) {
      return;
    }

    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = "initial";
    });

    const itemHeights = Array.from(children).map(
      x => x.getClientRects()[0].height
    );

    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    Array.from(children).forEach(
      (x: HTMLElement) => (x.style.height = `${maxHeight}px`)
    );
  }
}
