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
