class Slider {
  constructor(collection = [], currentIndex = 0) {
    this.collection = collection;
    this.currentIndex = currentIndex;
  }
  get collection() {
    return this._collection;
  }
  set collection(collection) {
    if (Array.isArray(collection)) {
      this._collection = collection;
      return;
    }
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(currentIndex) {
    if (typeof currentIndex !== "number" || Number.isNaN(currentIndex)) {
      throw new TypeError("current index must be a number");
    }
    if (currentIndex < 0 || Number.isInteger === false) {
      throw new RangeError("current index must be a positive integer");
    }
    this._currentIndex = currentIndex;
  }
  get currentSlide() {
    return this._collection[this._currentIndex];
  }
  get prev() {
    return (
      (this._currentIndex - 1 + this._collection.length) %
      this._collection.length
    );
  }
  get next() {
    return (this._currentIndex + 1) % this._collection.length;
  }
}

const imagesDB = [
  ['https://upload.wikimedia.org/wikipedia/commons/2/27/Commander_%28Biden_dog%29_in_February_2022.jpg', 'dog 1'],
  ['https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1588364974.jpg', 'dog 2'],
  ['https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-157603003-e1690769397327.jpg', 'dog 3'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzU9eNjsEXgiMUr1pFn2riqug-fle6gyJmcHtqSVOuGfXj472raQa8wD9H5a58H1ptsHs&usqp=CAU', 'dog 4'],
];
