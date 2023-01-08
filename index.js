"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.getImageSize = function getImageSize(imageUrl) {
  if (typeof window !== "undefined") {
    var size = [];

    if (typeof imageUrl == "object") {
      imageUrl.forEach((element) => {
        const img = new Image();
        img.src = element;
        img.onload = () => {
          const height = img.naturalHeight;
          const width = img.naturalWidth;
          size.push({ height: height, width: width });
        };
      });
    } else if (typeof imageUrl == "string") {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        const height = img.naturalHeight;
        const width = img.naturalWidth;
        size.push({ height: height, width: width });
      };
    }

    return size;
  }
};
