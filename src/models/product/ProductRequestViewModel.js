export class ProductRequestViewModel {
    constructor(name, price, description, category, color, size) {
      this.name = name; 
      this.price = price;
      this.description = description;
      this.categoryId = category; 
      this.colorId = color; 
      this.sizeId = size;
    }
}