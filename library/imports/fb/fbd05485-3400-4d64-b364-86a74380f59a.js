"use strict";
cc._RF.push(module, 'fbd05SFNABNZLNkhqdDgPWa', 'compressedObject');
// framework/lib/jszip/compressedObject.js

'use strict';

function CompressedObject() {
    this.compressedSize = 0;
    this.uncompressedSize = 0;
    this.crc32 = 0;
    this.compressionMethod = null;
    this.compressedContent = null;
}

CompressedObject.prototype = {
    /**
     * Return the decompressed content in an unspecified format.
     * The format will depend on the decompressor.
     * @return {Object} the decompressed content.
     */
    getContent: function getContent() {
        return null; // see implementation
    },
    /**
     * Return the compressed content in an unspecified format.
     * The format will depend on the compressed conten source.
     * @return {Object} the compressed content.
     */
    getCompressedContent: function getCompressedContent() {
        return null; // see implementation
    }
};
module.exports = CompressedObject;

cc._RF.pop();