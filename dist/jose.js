var Jose =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/jose-core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/jose-core.js":
/*!**************************!*\
  !*** ./lib/jose-core.js ***!
  \**************************/
/*! exports provided: crypto, Utils, setCrypto, default, Jose, JoseJWE, JoseJWS, WebCryptographer, caniuse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crypto", function() { return crypto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCrypto", function() { return setCrypto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jose", function() { return Jose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoseJWE", function() { return JoseJWE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoseJWS", function() { return JoseJWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caniuse", function() { return caniuse; });
/* harmony import */ var _jose_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jose-utils */ "./lib/jose-utils.js");
/* harmony import */ var _jose_jwe_encrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jose-jwe-encrypt */ "./lib/jose-jwe-encrypt.js");
/* harmony import */ var _jose_jwe_decrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jose-jwe-decrypt */ "./lib/jose-jwe-decrypt.js");
/* harmony import */ var _jose_jws_sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jose-jws-sign */ "./lib/jose-jws-sign.js");
/* harmony import */ var _jose_jws_verify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jose-jws-verify */ "./lib/jose-jws-verify.js");
/* harmony import */ var _jose_jwe_webcryptographer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jose-jwe-webcryptographer */ "./lib/jose-jwe-webcryptographer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebCryptographer", function() { return _jose_jwe_webcryptographer__WEBPACK_IMPORTED_MODULE_5__["WebCryptographer"]; });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* -
 * Copyright 2014 Square Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var crypto;
/**
 * Javascript Object Signing and Encryption library.
 *
 * @author Alok Menghrajani <alok@squareup.com>
 */

var Utils = _jose_utils__WEBPACK_IMPORTED_MODULE_0__;
/**
 * Initializes a JoseJWE object.
 */

var JoseJWE = {
  Encrypter: _jose_jwe_encrypt__WEBPACK_IMPORTED_MODULE_1__["Encrypter"],
  Decrypter: _jose_jwe_decrypt__WEBPACK_IMPORTED_MODULE_2__["Decrypter"]
};
/**
 * Initializes a JoseJWS object.
 */

var JoseJWS = {
  Signer: _jose_jws_sign__WEBPACK_IMPORTED_MODULE_3__["Signer"],
  Verifier: _jose_jws_verify__WEBPACK_IMPORTED_MODULE_4__["Verifier"]
};
/**
 * Set crypto provider to use (window.crypto, node-webcrypto-ossl, node-webcrypto-pkcs11 etc.).
 */

var setCrypto = function setCrypto(cp) {
  crypto = cp;
};
/**
 * Default to the global "crypto" variable
 */

if (typeof window !== 'undefined') {
  if (typeof window.crypto !== 'undefined') {
    setCrypto(window.crypto);

    if (!crypto.subtle) {
      crypto.subtle = crypto.webkitSubtle;
    }
  }
}

var Jose = {
  JoseJWS: JoseJWS,
  JoseJWE: JoseJWE,
  WebCryptographer: _jose_jwe_webcryptographer__WEBPACK_IMPORTED_MODULE_5__["WebCryptographer"],
  crypto: crypto,
  Utils: Utils
};
/* harmony default export */ __webpack_exports__["default"] = ({
  Jose: Jose,
  WebCryptographer: _jose_jwe_webcryptographer__WEBPACK_IMPORTED_MODULE_5__["WebCryptographer"]
});

/**
 * Checks if we have all the required APIs.
 *
 * It might make sense to take a Cryptographer and delegate some of the checks
 * to the cryptographer. I however wanted to keep things simple, so I put all
 * the checks here for now.
 *
 * This list is generated manually and needs to be kept up-to-date.
 *
 * Casual testing shows that:
 * - things work in Chrome 40.0.2214.115
 * - things work in Firefox 35.0.1
 * - Safari 7.1.3 doesn't support JWK keys.
 * - Internet Explorer doesn't support Promises.
 *
 * Note: We don't check if the browser supports specific crypto operations.
 *       I.e. it's possible for this function to return true, but encryption or
 *       decryption to subsequently fail because the browser does not support a
 *       given encryption, decryption, key wrapping, key unwrapping or hmac
 *       operation.
 *
 * @return bool
 */

var caniuse = function caniuse() {
  var r = true; // Promises/A+ (https://promisesaplus.com/)

  r = r && typeof Promise === 'function';
  r = r && typeof Promise.reject === 'function';
  r = r && typeof Promise.prototype.then === 'function';
  r = r && typeof Promise.all === 'function';
  var globalObject = window || global; // Crypto (http://www.w3.org/TR/WebCryptoAPI/)

  r = r && _typeof(globalObject.crypto) === 'object';
  r = r && _typeof(globalObject.crypto.subtle) === 'object';
  r = r && typeof globalObject.crypto.getRandomValues === 'function';
  r = r && typeof globalObject.crypto.subtle.importKey === 'function';
  r = r && typeof globalObject.crypto.subtle.generateKey === 'function';
  r = r && typeof globalObject.crypto.subtle.exportKey === 'function';
  r = r && typeof globalObject.crypto.subtle.wrapKey === 'function';
  r = r && typeof globalObject.crypto.subtle.unwrapKey === 'function';
  r = r && typeof globalObject.crypto.subtle.encrypt === 'function';
  r = r && typeof globalObject.crypto.subtle.decrypt === 'function';
  r = r && typeof globalObject.crypto.subtle.sign === 'function'; // ArrayBuffer (http://people.mozilla.org/~jorendorff/es6-draft.html#sec-arraybuffer-constructor)

  r = r && typeof ArrayBuffer === 'function';
  r = r && (typeof Uint8Array === 'function' || (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) === 'object'); // Safari uses "object"

  r = r && (typeof Uint32Array === 'function' || (typeof Uint32Array === "undefined" ? "undefined" : _typeof(Uint32Array)) === 'object'); // Safari uses "object"
  // skipping Uint32Array.prototype.buffer because https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-%typedarrayprototype%-object
  // JSON (http://www.ecma-international.org/ecma-262/5.1/#sec-15.12.3)

  r = r && (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) === 'object';
  r = r && typeof JSON.parse === 'function';
  r = r && typeof JSON.stringify === 'function'; // Base64 (http://www.w3.org/TR/html5/webappapis.html#dom-windowbase64-atob)

  r = r && typeof atob === 'function';
  r = r && typeof btoa === 'function'; // skipping Array functions (map, join, push, length, etc.)
  // skipping String functions (split, charCodeAt, fromCharCode, replace, etc.)
  // skipping regexp.test and parseInt

  return r;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib/jose-jwe-decrypt.js":
/*!*********************************!*\
  !*** ./lib/jose-jwe-decrypt.js ***!
  \*********************************/
/*! exports provided: Decrypter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decrypter", function() { return Decrypter; });
/* harmony import */ var _jose_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jose-utils */ "./lib/jose-utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* -
 * Copyright 2014 Square Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Handles decryption.
 *
 * @param cryptographer  an instance of WebCryptographer (or equivalent). Keep
 *                       in mind that decryption mutates the cryptographer.
 * @param keyPromise    Promise<CryptoKey>, either RSA or shared key
 */

var Decrypter =
/*#__PURE__*/
function () {
  function Decrypter(cryptographer, keyPromise) {
    _classCallCheck(this, Decrypter);

    this.cryptographer = cryptographer;
    this.keyPromise = keyPromise;
    this.headers = {};
    this.base64UrlEncoder = new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]();
  }

  _createClass(Decrypter, [{
    key: "getHeaders",
    value: function getHeaders() {
      return this.headers;
    }
    /**
     * Performs decryption.
     *
     * @param cipherText  String
     * @return Promise<String>
     */

  }, {
    key: "decrypt",
    value: function decrypt(cipherText) {
      // Split cipherText in 5 parts
      var parts = cipherText.split('.');

      if (parts.length !== 5) {
        return Promise.reject(Error('decrypt: invalid input'));
      } // part 1: header


      this.headers = JSON.parse(this.base64UrlEncoder.decode(parts[0]));

      if (!this.headers.alg) {
        return Promise.reject(Error('decrypt: missing alg'));
      }

      if (!this.headers.enc) {
        return Promise.reject(Error('decrypt: missing enc'));
      }

      this.cryptographer.setKeyEncryptionAlgorithm(this.headers.alg);
      this.cryptographer.setContentEncryptionAlgorithm(this.headers.enc);

      if (this.headers.crit) {
        // We don't support the crit header
        return Promise.reject(Error('decrypt: crit is not supported'));
      }

      var cekPromise;

      if (this.headers.alg === 'dir') {
        // with direct mode, we already have the cek
        cekPromise = Promise.resolve(this.keyPromise);
      } else {
        // part 2: decrypt the CEK
        // In some modes (e.g. RSA-PKCS1v1.5), you must take precautions to prevent
        // chosen-ciphertext attacks as described in RFC 3218, "Preventing
        // the Million Message Attack on Cryptographic Message Syntax". We currently
        // only support RSA-OAEP, so we don't generate a key if unwrapping fails.
        var encryptedCek = this.base64UrlEncoder.decodeArray(parts[1]);
        cekPromise = this.keyPromise.then(function (key) {
          return this.cryptographer.unwrapCek(encryptedCek, key);
        }.bind(this));
      } // part 3: decrypt the cipher text


      var plainTextPromise = this.cryptographer.decrypt(cekPromise, _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromString"](parts[0]), this.base64UrlEncoder.decodeArray(parts[2]), this.base64UrlEncoder.decodeArray(parts[3]), this.base64UrlEncoder.decodeArray(parts[4]));
      return plainTextPromise.then(_jose_utils__WEBPACK_IMPORTED_MODULE_0__["utf8StringFromArray"]);
    }
  }]);

  return Decrypter;
}();

/***/ }),

/***/ "./lib/jose-jwe-encrypt.js":
/*!*********************************!*\
  !*** ./lib/jose-jwe-encrypt.js ***!
  \*********************************/
/*! exports provided: Encrypter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encrypter", function() { return Encrypter; });
/* harmony import */ var _jose_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jose-utils */ "./lib/jose-utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* -
 * Copyright 2014 Square Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Handles encryption.
 *
 * @param cryptographer  an instance of WebCryptographer (or equivalent).
 * @param keyPromise    Promise<CryptoKey>, either RSA or shared key
 */

var Encrypter =
/*#__PURE__*/
function () {
  function Encrypter(cryptographer, keyPromise) {
    _classCallCheck(this, Encrypter);

    this.cryptographer = cryptographer;
    this.keyPromise = keyPromise;
    this.userHeaders = {};
  }
  /**
   * Adds a key/value pair which will be included in the header.
   *
   * The data lives in plaintext (an attacker can read the header) but is tamper
   * proof (an attacker cannot modify the header).
   *
   * Note: some headers have semantic implications. E.g. if you set the "zip"
   * header, you are responsible for properly compressing plainText before
   * calling encrypt().
   *
   * @param k  String
   * @param v  String
   */


  _createClass(Encrypter, [{
    key: "addHeader",
    value: function addHeader(k, v) {
      this.userHeaders[k] = v;
    }
    /**
     * Performs encryption.
     *
     * @param plainText  utf-8 string
     * @return Promise<String>
     */

  }, {
    key: "encrypt",
    value: function encrypt(plainText) {
      /**
       * Encrypts plainText with CEK.
       *
       * @param cekPromise  Promise<CryptoKey>
       * @param plainText   string
       * @return Promise<json>
       */
      var encryptPlainText = function encryptPlainText(cekPromise, plainText) {
        // Create header
        var headers = {};

        for (var i in this.userHeaders) {
          headers[i] = this.userHeaders[i];
        }

        headers.alg = this.cryptographer.getKeyEncryptionAlgorithm();
        headers.enc = this.cryptographer.getContentEncryptionAlgorithm();
        var jweProtectedHeader = new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]().encode(JSON.stringify(headers)); // Create the IV

        var iv = this.cryptographer.createIV(); // Create the AAD

        var aad = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromString"](jweProtectedHeader);

        if (typeof plainText === 'string') {
          plainText = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromUtf8String"](plainText);
        }

        return this.cryptographer.encrypt(iv, aad, cekPromise, plainText).then(function (r) {
          r.header = jweProtectedHeader;
          r.iv = iv;
          return r;
        });
      };

      var cekPromise, encryptedCek;

      if (this.cryptographer.getKeyEncryptionAlgorithm() === 'dir') {
        // with direct encryption, this.keyPromise provides the cek
        // and encryptedCek is empty
        cekPromise = Promise.resolve(this.keyPromise);
        encryptedCek = [];
      } else {
        // Create a CEK key
        cekPromise = this.cryptographer.createCek(); // Key & Cek allows us to create the encryptedCek

        encryptedCek = Promise.all([this.keyPromise, cekPromise]).then(function (all) {
          var key = all[0];
          var cek = all[1];
          return this.cryptographer.wrapCek(cek, key);
        }.bind(this));
      } // Cek allows us to encrypy the plain text


      var encPromise = encryptPlainText.bind(this, cekPromise, plainText)(); // Once we have all the promises, we can base64 encode all the pieces.

      return Promise.all([encryptedCek, encPromise]).then(function (all) {
        var encryptedCek = all[0];
        var data = all[1];
        var base64UrlEncoder = new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]();
        return data.header + '.' + base64UrlEncoder.encodeArray(encryptedCek) + '.' + base64UrlEncoder.encodeArray(data.iv) + '.' + base64UrlEncoder.encodeArray(data.cipher) + '.' + base64UrlEncoder.encodeArray(data.tag);
      });
    }
  }]);

  return Encrypter;
}();

/***/ }),

/***/ "./lib/jose-jwe-webcryptographer.js":
/*!******************************************!*\
  !*** ./lib/jose-jwe-webcryptographer.js ***!
  \******************************************/
/*! exports provided: WebCryptographer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebCryptographer", function() { return WebCryptographer; });
/* harmony import */ var _jose_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jose-utils */ "./lib/jose-utils.js");
/* harmony import */ var _jose_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jose-core */ "./lib/jose-core.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* -
 * Copyright 2014 Square Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(eslint): figure out how to properly include Jose or expose crypto object


/**
 * The WebCryptographer uses http://www.w3.org/TR/WebCryptoAPI/ to perform
 * various crypto operations. In theory, this should help build the library with
 * different underlying crypto APIs. I'm however unclear if we'll run into code
 * duplication or callback vs Promise based API issues.
 */

var WebCryptographer =
/*#__PURE__*/
function () {
  function WebCryptographer() {
    _classCallCheck(this, WebCryptographer);

    this.setKeyEncryptionAlgorithm('RSA-OAEP');
    this.setContentEncryptionAlgorithm('A256GCM');
    this.setContentSignAlgorithm('RS256');
  }
  /**
   * Overrides the default key encryption algorithm
   * @param alg  string
   */


  _createClass(WebCryptographer, [{
    key: "setKeyEncryptionAlgorithm",
    value: function setKeyEncryptionAlgorithm(alg) {
      this.keyEncryption = this.getCryptoConfig(alg);
    }
  }, {
    key: "getKeyEncryptionAlgorithm",
    value: function getKeyEncryptionAlgorithm() {
      return this.keyEncryption.jweName;
    }
    /**
     * Overrides the default content encryption algorithm
     * @param alg  string
     */

  }, {
    key: "setContentEncryptionAlgorithm",
    value: function setContentEncryptionAlgorithm(alg) {
      this.content_encryption = this.getCryptoConfig(alg);
    }
  }, {
    key: "getContentEncryptionAlgorithm",
    value: function getContentEncryptionAlgorithm() {
      return this.content_encryption.jweName;
    }
    /**
     * Overrides the default content sign algorithm
     * @param alg  string
     */

  }, {
    key: "setContentSignAlgorithm",
    value: function setContentSignAlgorithm(alg) {
      this.content_sign = this.getSignConfig(alg);
    }
  }, {
    key: "getContentSignAlgorithm",
    value: function getContentSignAlgorithm() {
      return this.content_sign.jwa_name;
    }
    /**
     * Generates an IV.
     * This function mainly exists so that it can be mocked for testing purpose.
     *
     * @return Uint8Array with random bytes
     */

  }, {
    key: "createIV",
    value: function createIV() {
      var iv = new Uint8Array(new Array(this.content_encryption.iv_bytes));
      return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.getRandomValues(iv);
    }
    /**
     * Creates a random content encryption key.
     * This function mainly exists so that it can be mocked for testing purpose.
     *
     * @return Promise<CryptoKey>
     */

  }, {
    key: "createCek",
    value: function createCek() {
      var hack = this.getCekWorkaround(this.content_encryption);
      return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.generateKey(hack.id, true, hack.enc_op);
    }
  }, {
    key: "wrapCek",
    value: function wrapCek(cek, key) {
      return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.wrapKey('raw', cek, key, this.keyEncryption.id);
    }
  }, {
    key: "unwrapCek",
    value: function unwrapCek(cek, key) {
      var hack = this.getCekWorkaround(this.content_encryption);
      var extractable = this.content_encryption.specific_cekBytes > 0;
      var keyEncryption = this.keyEncryption.id;
      return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.unwrapKey('raw', cek, key, keyEncryption, hack.id, extractable, hack.dec_op);
    }
    /**
     * Returns algorithm and operation needed to create a CEK.
     *
     * In some cases, e.g. A128CBC-HS256, the CEK gets split into two keys. The Web
     * Crypto API does not allow us to generate an arbitrary number of bytes and
     * then create a CryptoKey without any associated algorithm. We therefore piggy
     * back on AES-CBS and HMAC which allows the creation of CEKs of size 16, 32, 64
     * and 128 bytes.
     */

  }, {
    key: "getCekWorkaround",
    value: function getCekWorkaround(alg) {
      var len = alg.specific_cekBytes;

      if (len) {
        if (len === 16) {
          return {
            id: {
              name: 'AES-CBC',
              length: 128
            },
            enc_op: ['encrypt'],
            dec_op: ['decrypt']
          };
        } else if (len === 32) {
          return {
            id: {
              name: 'AES-CBC',
              length: 256
            },
            enc_op: ['encrypt'],
            dec_op: ['decrypt']
          };
        } else if (len === 64) {
          return {
            id: {
              name: 'HMAC',
              hash: {
                name: 'SHA-256'
              }
            },
            enc_op: ['sign'],
            dec_op: ['verify']
          };
        } else if (len === 128) {
          return {
            id: {
              name: 'HMAC',
              hash: {
                name: 'SHA-384'
              }
            },
            enc_op: ['sign'],
            dec_op: ['verify']
          };
        } else {
          this.assert(false, 'getCekWorkaround: invalid len');
        }
      }

      return {
        id: alg.id,
        enc_op: ['encrypt'],
        dec_op: ['decrypt']
      };
    }
    /**
     * Encrypts plainText with cek.
     *
     * @param iv          Uint8Array
     * @param aad         Uint8Array
     * @param cekPromise Promise<CryptoKey>
     * @param plainText  Uint8Array
     * @return Promise<json>
     */

  }, {
    key: "encrypt",
    value: function encrypt(iv, aad, cekPromise, plainText) {
      var _this = this;

      var config = this.content_encryption;

      if (iv.length !== config.iv_bytes) {
        return Promise.reject(Error('invalid IV length'));
      }

      if (config.auth.aead) {
        var tagBytes = config.auth.tagBytes;
        var enc = {
          name: config.id.name,
          iv: iv,
          additionalData: aad,
          tagLength: tagBytes * 8
        };
        return cekPromise.then(function (cek) {
          return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.encrypt(enc, cek, plainText).then(function (cipherText) {
            var offset = cipherText.byteLength - tagBytes;
            return {
              cipher: cipherText.slice(0, offset),
              tag: cipherText.slice(offset)
            };
          });
        });
      } else {
        var keys = this.splitKey(config, cekPromise, ['encrypt']);
        var macKeyPromise = keys[0];
        var encKeyPromise = keys[1]; // Encrypt the plain text

        var cipherTextPromise = encKeyPromise.then(function (encKey) {
          var enc = {
            name: config.id.name,
            iv: iv
          };
          return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.encrypt(enc, encKey, plainText);
        }); // compute MAC

        var macPromise = cipherTextPromise.then(function (cipherText) {
          return _this.truncatedMac(config, macKeyPromise, aad, iv, cipherText);
        });
        return Promise.all([cipherTextPromise, macPromise]).then(function (all) {
          var cipherText = all[0];
          var mac = all[1];
          return {
            cipher: cipherText,
            tag: mac
          };
        });
      }
    }
    /**
     * Compares two Uint8Arrays in constant time.
     *
     * @return Promise<void>
     */

  }, {
    key: "compare",
    value: function compare(config, macKeyPromise, arr1, arr2) {
      this.assert(arr1 instanceof Uint8Array, 'compare: invalid input');
      this.assert(arr2 instanceof Uint8Array, 'compare: invalid input');
      return macKeyPromise.then(function (macKey) {
        var hash1 = _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.sign(config.auth.id, macKey, arr1);
        var hash2 = _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.sign(config.auth.id, macKey, arr2);
        return Promise.all([hash1, hash2]).then(function (all) {
          var hash1 = new Uint8Array(all[0]);
          var hash2 = new Uint8Array(all[1]);

          if (hash1.length !== hash2.length) {
            throw new Error('compare failed');
          }

          for (var i = 0; i < hash1.length; i++) {
            if (hash1[i] !== hash2[i]) {
              throw new Error('compare failed');
            }
          }

          return Promise.resolve(null);
        });
      });
    }
    /**
     * Decrypts cipherText with cek. Validates the tag.
     *
     * @param cekPromise    Promise<CryptoKey>
     * @param aad protected header
     * @param iv IV
     * @param cipherText text to be decrypted
     * @param tag to be verified
     * @return Promise<string>
     */

  }, {
    key: "decrypt",
    value: function decrypt(cekPromise, aad, iv, cipherText, tag) {
      var _this2 = this;

      if (iv.length !== this.content_encryption.iv_bytes) {
        return Promise.reject(Error('decryptCiphertext: invalid IV'));
      }

      var config = this.content_encryption;

      if (config.auth.aead) {
        var dec = {
          name: config.id.name,
          iv: iv,
          additionalData: aad,
          tagLength: config.auth.tagBytes * 8
        };
        return cekPromise.then(function (cek) {
          var buf = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayBufferConcat"](cipherText, tag);
          return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.decrypt(dec, cek, buf);
        });
      } else {
        var keys = this.splitKey(config, cekPromise, ['decrypt']);
        var macKeyPromise = keys[0];
        var encKeyPromise = keys[1]; // Validate the MAC

        var macPromise = this.truncatedMac(config, macKeyPromise, aad, iv, cipherText);
        return Promise.all([encKeyPromise, macPromise]).then(function (all) {
          var encKey = all[0];
          var mac = all[1];
          return _this2.compare(config, macKeyPromise, new Uint8Array(mac), tag).then(function () {
            var dec = {
              name: config.id.name,
              iv: iv
            };
            return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.decrypt(dec, encKey, cipherText);
          })["catch"](function () {
            return Promise.reject(Error('decryptCiphertext: MAC failed.'));
          });
        });
      }
    }
    /**
     * Signs plainText.
     *
     * @param aad         json
     * @param payload     String or json
     * @param keyPromise Promise<CryptoKey>
     * @return Promise<ArrayBuffer>
     */

  }, {
    key: "sign",
    value: function sign(aad, payload, keyPromise) {
      var config = this.content_sign;

      if (aad.alg) {
        config = this.getSignConfig(aad.alg);
      } // Encrypt the plain text


      return keyPromise.then(function (key) {
        var base64UrlEncoder = new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]();
        return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.sign(config.id, key, _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromString"](base64UrlEncoder.encode(JSON.stringify(aad)) + '.' + base64UrlEncoder.encodeArray(payload)));
      });
    }
    /**
     * Verify JWS.
     *
     * @param payload     Base64Url encoded payload
     * @param aad         String Base64Url encoded JSON representation of the protected JWS header
     * @param signature   Uint8Array containing the signature
     * @param keyPromise Promise<CryptoKey>
     * @param keyId      value of the kid JoseHeader, it'll be passed as part of the result to the returned promise
     * @return Promise<json>
     */

  }, {
    key: "verify",
    value: function verify(aad, payload, signature, keyPromise, keyId) {
      var config = this.content_sign;
      return keyPromise.then(function (key) {
        return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.verify(config.id, key, signature, _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromString"](aad + '.' + payload)).then(function (res) {
          return {
            kid: keyId,
            verified: res
          };
        });
      });
    }
  }, {
    key: "keyId",
    value: function keyId(rsaKey) {
      return _jose_utils__WEBPACK_IMPORTED_MODULE_0__["sha256"](rsaKey.n + '+' + rsaKey.d);
    }
    /**
     * Splits a CEK into two pieces: a MAC key and an ENC key.
     *
     * This code is structured around the fact that the crypto API does not provide
     * a way to validate truncated MACs. The MAC key is therefore always imported to
     * sign data.
     *
     * @param config (used for key lengths & algorithms)
     * @param cekPromise Promise<CryptoKey>  CEK key to split
     * @param purpose Array<String> usages of the imported key
     * @return [Promise<mac key>, Promise<enc key>]
     */

  }, {
    key: "splitKey",
    value: function splitKey(config, cekPromise, purpose) {
      // We need to split the CEK key into a MAC and ENC keys
      var cekBytesPromise = cekPromise.then(function (cek) {
        return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.exportKey('raw', cek);
      });
      var macKeyPromise = cekBytesPromise.then(function (cekBytes) {
        if (cekBytes.byteLength * 8 !== config.id.length + config.auth.key_bytes * 8) {
          return Promise.reject(Error('encryptPlainText: incorrect cek length'));
        }

        var bytes = cekBytes.slice(0, config.auth.key_bytes);
        return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.importKey('raw', bytes, config.auth.id, false, ['sign']);
      });
      var encKeyPromise = cekBytesPromise.then(function (cekBytes) {
        if (cekBytes.byteLength * 8 !== config.id.length + config.auth.key_bytes * 8) {
          return Promise.reject(Error('encryptPlainText: incorrect cek length'));
        }

        var bytes = cekBytes.slice(config.auth.key_bytes);
        return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.importKey('raw', bytes, config.id, false, purpose);
      });
      return [macKeyPromise, encKeyPromise];
    }
    /**
     * Converts the Jose web algorithms into data which is
     * useful for the Web Crypto API.
     *
     * length = in bits
     * bytes = in bytes
     */

  }, {
    key: "getCryptoConfig",
    value: function getCryptoConfig(alg) {
      switch (alg) {
        // Key encryption
        case 'RSA-OAEP':
          return {
            jweName: 'RSA-OAEP',
            id: {
              name: 'RSA-OAEP',
              hash: {
                name: 'SHA-1'
              }
            }
          };

        case 'RSA-OAEP-256':
          return {
            jweName: 'RSA-OAEP-256',
            id: {
              name: 'RSA-OAEP',
              hash: {
                name: 'SHA-256'
              }
            }
          };

        case 'A128KW':
          return {
            jweName: 'A128KW',
            id: {
              name: 'AES-KW',
              length: 128
            }
          };

        case 'A256KW':
          return {
            jweName: 'A256KW',
            id: {
              name: 'AES-KW',
              length: 256
            }
          };

        case 'dir':
          return {
            jweName: 'dir'
          };
        // Content encryption

        case 'A128CBC-HS256':
          return {
            jweName: 'A128CBC-HS256',
            id: {
              name: 'AES-CBC',
              length: 128
            },
            iv_bytes: 16,
            specific_cekBytes: 32,
            auth: {
              key_bytes: 16,
              id: {
                name: 'HMAC',
                hash: {
                  name: 'SHA-256'
                }
              },
              truncated_bytes: 16
            }
          };

        case 'A256CBC-HS512':
          return {
            jweName: 'A256CBC-HS512',
            id: {
              name: 'AES-CBC',
              length: 256
            },
            iv_bytes: 16,
            specific_cekBytes: 64,
            auth: {
              key_bytes: 32,
              id: {
                name: 'HMAC',
                hash: {
                  name: 'SHA-512'
                }
              },
              truncated_bytes: 32
            }
          };

        case 'A128GCM':
          return {
            jweName: 'A128GCM',
            id: {
              name: 'AES-GCM',
              length: 128
            },
            iv_bytes: 12,
            auth: {
              aead: true,
              tagBytes: 16
            }
          };

        case 'A256GCM':
          return {
            jweName: 'A256GCM',
            id: {
              name: 'AES-GCM',
              length: 256
            },
            iv_bytes: 12,
            auth: {
              aead: true,
              tagBytes: 16
            }
          };

        default:
          throw Error('unsupported algorithm: ' + alg);
      }
    }
    /**
     * Computes a truncated MAC.
     *
     * @param config              configuration
     * @param macKeyPromise     Promise<CryptoKey>  mac key
     * @param aad                 Uint8Array
     * @param iv                  Uint8Array
     * @param cipherText         Uint8Array
     * @return Promise<buffer>    truncated MAC
     */

  }, {
    key: "truncatedMac",
    value: function truncatedMac(config, macKeyPromise, aad, iv, cipherText) {
      return macKeyPromise.then(function (macKey) {
        var al = new Uint8Array(_jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromInt32"](aad.length * 8));
        var alFull = new Uint8Array(8);
        alFull.set(al, 4);
        var buf = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayBufferConcat"](aad, iv, cipherText, alFull);
        return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.sign(config.auth.id, macKey, buf).then(function (bytes) {
          return bytes.slice(0, config.auth.truncated_bytes);
        });
      });
    }
    /**
     * Converts the Jose web algorithms into data which is
     * useful for the Web Crypto API.
     */

  }, {
    key: "getSignConfig",
    value: function getSignConfig(alg) {
      switch (alg) {
        case 'RS256':
          return {
            jwa_name: 'RS256',
            id: {
              name: 'RSASSA-PKCS1-v1_5',
              hash: {
                name: 'SHA-256'
              }
            }
          };

        case 'RS384':
          return {
            jwa_name: 'RS384',
            id: {
              name: 'RSASSA-PKCS1-v1_5',
              hash: {
                name: 'SHA-384'
              }
            }
          };

        case 'RS512':
          return {
            jwa_name: 'RS512',
            id: {
              name: 'RSASSA-PKCS1-v1_5',
              hash: {
                name: 'SHA-512'
              }
            }
          };

        case 'PS256':
          return {
            jwa_name: 'PS256',
            id: {
              name: 'RSA-PSS',
              hash: {
                name: 'SHA-256'
              },
              saltLength: 20
            }
          };

        case 'PS384':
          return {
            jwa_name: 'PS384',
            id: {
              name: 'RSA-PSS',
              hash: {
                name: 'SHA-384'
              },
              saltLength: 20
            }
          };

        case 'PS512':
          return {
            jwa_name: 'PS512',
            id: {
              name: 'RSA-PSS',
              hash: {
                name: 'SHA-512'
              },
              saltLength: 20
            }
          };

        case 'HS256':
          return {
            jwa_name: 'HS256',
            id: {
              name: 'HMAC',
              hash: {
                name: 'SHA-256'
              }
            }
          };

        case 'HS384':
          return {
            jwa_name: 'HS384',
            id: {
              name: 'HMAC',
              hash: {
                name: 'SHA-384'
              }
            }
          };

        case 'HS512':
          return {
            jwa_name: 'HS512',
            id: {
              name: 'HMAC',
              hash: {
                name: 'SHA-512'
              }
            }
          };

        case 'ES256':
          return {
            jwa_name: 'ES256',
            id: {
              name: 'ECDSA',
              namedCurve: 'P-256',
              hash: {
                name: 'SHA-256'
              }
            }
          };

        case 'ES384':
          return {
            jwa_name: 'ES384',
            id: {
              name: 'ECDSA',
              namedCurve: 'P-384',
              hash: {
                name: 'SHA-384'
              }
            }
          };

        case 'ES512':
          return {
            jwa_name: 'ES512',
            id: {
              name: 'ECDSA',
              namedCurve: 'P-521',
              hash: {
                name: 'SHA-512'
              }
            }
          };

        default:
          throw Error('unsupported algorithm: ' + alg);
      }
    }
    /**
     * Derives key usage from algorithm's name
     *
     * @param alg String algorithm name
     * @returns {*}
     */

  }, {
    key: "getKeyUsageByAlg",
    value: function getKeyUsageByAlg(alg) {
      switch (alg) {
        // signature
        case 'RS256':
        case 'RS384':
        case 'RS512':
        case 'PS256':
        case 'PS384':
        case 'PS512':
        case 'HS256':
        case 'HS384':
        case 'HS512':
        case 'ES256':
        case 'ES384':
        case 'ES512':
        case 'ES256K':
          return {
            publicKey: 'verify',
            privateKey: 'sign'
          };
        // key encryption

        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'A128KW':
        case 'A256KW':
          return {
            publicKey: 'wrapKey',
            privateKey: 'unwrapKey'
          };

        default:
          throw Error('unsupported algorithm: ' + alg);
      }
    }
    /**
    * Feel free to override this function.
    */

  }, {
    key: "assert",
    value: function assert(expr, msg) {
      if (!expr) {
        throw new Error(msg);
      }
    }
  }]);

  return WebCryptographer;
}();

/***/ }),

/***/ "./lib/jose-jws-sign.js":
/*!******************************!*\
  !*** ./lib/jose-jws-sign.js ***!
  \******************************/
/*! exports provided: Signer, JWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signer", function() { return Signer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWS", function() { return JWS; });
/* harmony import */ var _jose_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jose-utils */ "./lib/jose-utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* -
 * Copyright 2015 Peculiar Ventures
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Handles decryption.
 *
 * @param cryptographer  an instance of WebCryptographer (or equivalent). Keep
 *                       in mind that decryption mutates the cryptographer.
 *
 * @author Patrizio Bruno <patrizio@desertconsulting.net>
 */

var Signer =
/*#__PURE__*/
function () {
  function Signer(cryptographer) {
    _classCallCheck(this, Signer);

    this.cryptographer = cryptographer;
    this.keyPromises = {};
    this.waiting_kid = 0;
    this.headers = {};
    this.signer_aads = {};
    this.signer_headers = {};
  }
  /**
   * Adds a signer to JoseJWS instance.
   *
   * @param key            private key in json format. Parameters can be base64
   *                       encoded, strings or number (for e.g. 'e'), or CryptoKey.
   * @param keyId         a string identifying the key. OPTIONAL
   * @param aad            Object protected header
   * @param header         Object unprotected header
   */


  _createClass(Signer, [{
    key: "addSigner",
    value: function addSigner(key, keyId, aad, header) {
      var that = this;
      var keyPromise;

      if (_jose_utils__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"](key)) {
        keyPromise = new Promise(function (resolve) {
          resolve(key);
        });
      } else {
        var alg;

        if (aad && aad.alg) {
          alg = aad.alg;
        } else {
          alg = that.cryptographer.getContentSignAlgorithm();
        }

        keyPromise = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["importPrivateKey"](key, alg, 'sign');
      }

      var kidPromise;

      if (keyId) {
        kidPromise = new Promise(function (resolve) {
          resolve(keyId);
        });
      } else if (_jose_utils__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"](key)) {
        throw new Error('keyId is a mandatory argument when the key is a CryptoKey');
      } else {
        kidPromise = this.cryptographer.keyId(key);
      }

      that.waiting_kid++;
      return kidPromise.then(function (kid) {
        that.keyPromises[kid] = keyPromise;
        that.waiting_kid--;

        if (aad) {
          that.signer_aads[kid] = aad;
        }

        if (header) {
          that.signer_headers[kid] = header;
        }

        return kid;
      });
    }
    /**
     * Adds a signature to a JWS object
     * @param jws     JWS Object to be signed or its representation
     * @param aad     Object protected header
     * @param header  Object unprotected header
     * @return Promise<String>
     */

  }, {
    key: "addSignature",
    value: function addSignature(jws, aad, header) {
      if (_jose_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](jws)) {
        jws = JSON.parse(jws);
      }

      if (jws.payload && _jose_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](jws.payload) && jws["protected"] && _jose_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](jws["protected"]) && jws.header && jws.header instanceof Object && jws.signature && _jose_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](jws.signature)) {
        return this.sign(JWS.fromObject(jws), aad, header);
      } else {
        throw new Error('JWS is not a valid JWS object');
      }
    }
    /**
     * Computes signature.
     *
     * @param payload JWS Object or utf-8 string to be signed
     * @param aad     Object protected header
     * @param header  Object unprotected header
     * @return Promise<JWS>
     */

  }, {
    key: "sign",
    value: function sign(payload, aad, header) {
      var that = this;
      var kids = [];

      if (Object.keys(that.keyPromises).length === 0) {
        throw new Error('No signers defined. At least one is required to sign the JWS.');
      }

      if (that.waiting_kid) {
        throw new Error('still generating key IDs');
      }

      function sign(message, protectedHeader, unprotectedHeader, keyPromise, kid) {
        var toBeSigned;

        if (!protectedHeader) {
          protectedHeader = {};
        }

        if (!protectedHeader.alg) {
          protectedHeader.alg = that.cryptographer.getContentSignAlgorithm();
          protectedHeader.typ = 'JWT';
        }

        if (!protectedHeader.kid) {
          protectedHeader.kid = kid;
        }

        if (_jose_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](message)) {
          toBeSigned = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromUtf8String"](message);
        } else {
          try {
            toBeSigned = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayish"](message);
          } catch (e) {
            if (message instanceof JWS) {
              toBeSigned = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromString"](new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]().decode(message.payload));
            } else if (message instanceof Object) {
              toBeSigned = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromUtf8String"](JSON.stringify(message));
            } else {
              throw new Error('cannot sign this message');
            }
          }
        }

        return that.cryptographer.sign(protectedHeader, toBeSigned, keyPromise).then(function (signature) {
          var jws = new JWS(protectedHeader, unprotectedHeader, toBeSigned, signature);

          if (message instanceof JWS) {
            delete jws.payload;

            if (!message.signatures) {
              message.signatures = [jws];
            } else {
              message.signatures.push(jws);
            }

            return message;
          }

          return jws;
        });
      }

      function doSign(pl, ph, uh, kps, kids) {
        if (kids.length) {
          var kid = kids.shift();
          var rv = sign(pl, that.signer_aads[kid] || ph, that.signer_headers[kid] || uh, kps[kid], kid);

          if (kids.length) {
            rv = rv.then(function (jws) {
              return doSign(jws, null, null, kps, kids);
            });
          }

          return rv;
        }
      }

      for (var kid in that.keyPromises) {
        if (that.keyPromises.hasOwnProperty(kid)) {
          kids.push(kid);
        }
      }

      return doSign(payload, aad, header, that.keyPromises, kids);
    }
  }]);

  return Signer;
}();
/**
 * Initialize a JWS object.
 *
 * @param protectedHeader protected header (JS object)
 * @param payload Uint8Array payload to be signed
 * @param signature ArrayBuffer signature of the payload
 * @param header unprotected header (JS object)
 *
 * @constructor
 */

var JWS =
/*#__PURE__*/
function () {
  function JWS(protectedHeader, header, payload, signature) {
    _classCallCheck(this, JWS);

    this.header = header;
    var base64UrlEncoder = new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]();
    this.payload = base64UrlEncoder.encodeArray(payload);

    if (signature) {
      this.signature = base64UrlEncoder.encodeArray(signature);
    }

    this["protected"] = base64UrlEncoder.encode(JSON.stringify(protectedHeader));
  }

  _createClass(JWS, [{
    key: "fromObject",
    value: function fromObject(obj) {
      var rv = new JWS(obj["protected"], obj.header, obj.payload, null);
      rv.signature = obj.signature;
      rv.signatures = obj.signatures;
      return rv;
    }
    /**
     * Serialize a JWS object using the JSON serialization format
     *
     * @returns {Object} a copy of this
     */

  }, {
    key: "JsonSerialize",
    value: function JsonSerialize() {
      return JSON.stringify(this);
    }
    /**
     * Serialize a JWS object using the Compact Serialization Format
     *
     * @returns {string} BASE64URL(UTF8(PROTECTED HEADER)).BASE64URL(PAYLOAD).BASE64URL(SIGNATURE)
     */

  }, {
    key: "CompactSerialize",
    value: function CompactSerialize() {
      return this["protected"] + '.' + this.payload + '.' + this.signature;
    }
  }]);

  return JWS;
}();

/***/ }),

/***/ "./lib/jose-jws-verify.js":
/*!********************************!*\
  !*** ./lib/jose-jws-verify.js ***!
  \********************************/
/*! exports provided: Verifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verifier", function() { return Verifier; });
/* harmony import */ var _jose_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jose-utils */ "./lib/jose-utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* -
 * Copyright 2015 Peculiar Ventures
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Handles signature verification.
 *
 * @param cryptographer  an instance of WebCryptographer (or equivalent). Keep
 *                       in mind that decryption mutates the cryptographer.
 * @param message        a JWS message
 * @param keyfinder (optional) a function returning a Promise<CryptoKey> given
 *                             a key id
 *
 * @author Patrizio Bruno <patrizio@desertconsulting.net>
 */

var Verifier =
/*#__PURE__*/
function () {
  function Verifier(cryptographer, message, keyfinder) {
    _classCallCheck(this, Verifier);

    var that = this;
    var alg;
    var jwt;
    var aad;
    var header;
    var payload;
    var signatures;
    var protectedHeader;
    var jwtRx = /^([0-9a-z_-]+)\.([0-9a-z_-]+)\.([0-9a-z_-]+)$/i;
    that.cryptographer = cryptographer;
    alg = cryptographer.getContentSignAlgorithm();

    if (_jose_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](message)) {
      if (jwt = jwtRx.exec(message)) {
        if (jwt.length !== 4) {
          throw new Error('wrong JWS compact serialization format');
        }

        message = {
          "protected": jwt[1],
          payload: jwt[2],
          signature: jwt[3]
        };
      } else {
        message = JSON.parse(message);
      }
    } else if (_typeof(message) !== 'object') {
      throw new Error('data format not supported');
    }

    aad = message["protected"];
    header = message.header;
    payload = message.payload;
    signatures = message.signatures instanceof Array ? message.signatures.slice(0) : [];
    signatures.forEach(function (sign) {
      sign.aad = sign["protected"];
      sign["protected"] = JSON.parse(new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]().decode(sign["protected"]));
    });
    that.aad = aad;
    protectedHeader = new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]().decode(aad);

    try {
      protectedHeader = JSON.parse(protectedHeader);
    } catch (e) {}

    if (!protectedHeader && !header) {
      throw new Error('at least one header is required');
    }

    if (!protectedHeader.alg) {
      throw new Error("'alg' is a mandatory header");
    }

    if (protectedHeader.alg !== alg) {
      throw new Error("the alg header '" + protectedHeader.alg + "' doesn't match the requested algorithm '" + alg + "'");
    }

    if (protectedHeader && protectedHeader.typ && protectedHeader.typ !== 'JWT') {
      throw new Error("typ '" + protectedHeader.typ + "' not supported");
    }

    if (message.signature) {
      signatures.unshift({
        aad: aad,
        "protected": protectedHeader,
        header: header,
        signature: message.signature
      });
    }

    that.signatures = [];

    for (var i = 0; i < signatures.length; i++) {
      that.signatures[i] = JSON.parse(JSON.stringify(signatures[i]));
      that.signatures[i].signature = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["arrayFromString"](new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]().decode(signatures[i].signature));
    }

    that.payload = payload;
    that.keyPromises = {};
    that.waiting_kid = 0;

    if (keyfinder) {
      that.keyfinder = keyfinder;
    }
  }
  /**
   * Add supported recipients to verify multiple signatures
   *
   * @param key            public key in json format. Parameters can be base64
   *                       encoded, strings or number (for 'e'), or CryptoKey.
   * @param keyId         a string identifying the key. OPTIONAL
   * @param alg            String signature algorithm. OPTIONAL
   * @returns Promise<string> a Promise of a key id
   */


  _createClass(Verifier, [{
    key: "addRecipient",
    value: function addRecipient(key, keyId, alg) {
      var that = this;
      var kidPromise;
      var keyPromise;

      if (_jose_utils__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"](key)) {
        keyPromise = new Promise(function (resolve) {
          resolve(key);
        });
      } else {
        keyPromise = _jose_utils__WEBPACK_IMPORTED_MODULE_0__["importPublicKey"](key, alg || that.cryptographer.getContentSignAlgorithm(), 'verify');
      }

      if (keyId) {
        kidPromise = new Promise(function (resolve) {
          resolve(keyId);
        });
      } else if (_jose_utils__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"](key)) {
        throw new Error('keyId is a mandatory argument when the key is a CryptoKey');
      } else {
        console.log("it's unsafe to omit a keyId");
        kidPromise = this.cryptographer.keyId(key);
      }

      that.waiting_kid++;
      return kidPromise.then(function (kid) {
        that.keyPromises[kid] = keyPromise;
        that.waiting_kid--;
        return kid;
      });
    }
    /**
     * Verifies a JWS signature
     *
     * @returns Promise<Array> a Promise of an array of objects { kid: string, verified: bool, payload?: string }
     *
     * payload is only populated and usable if verified is true
     */

  }, {
    key: "verify",
    value: function verify() {
      var that = this;
      var signatures = that.signatures;
      var keyPromises = that.keyPromises;
      var keyfinder = that.keyfinder;
      var promises = [];
      var check = !!keyfinder || Object.keys(that.keyPromises).length > 0;

      if (!check) {
        throw new Error('No recipients defined. At least one is required to verify the JWS.');
      }

      if (that.waiting_kid) {
        throw new Error('still generating key IDs');
      }

      signatures.forEach(function (sig) {
        var kid = sig["protected"].kid;

        if (keyfinder) {
          keyPromises[kid] = keyfinder(kid);
        }

        promises.push(that.cryptographer.verify(sig.aad, that.payload, sig.signature, keyPromises[kid], kid).then(function (vr) {
          if (vr.verified) {
            vr.payload = new _jose_utils__WEBPACK_IMPORTED_MODULE_0__["Base64Url"]().decode(that.payload);
          }

          return vr;
        }));
      });
      return Promise.all(promises);
    }
  }]);

  return Verifier;
}();

/***/ }),

/***/ "./lib/jose-utils.js":
/*!***************************!*\
  !*** ./lib/jose-utils.js ***!
  \***************************/
/*! exports provided: importPublicKey, importPrivateKey, importEcPublicKey, importEcPrivateKey, importRsaPublicKey, importRsaPrivateKey, isString, arrayish, convertRsaKey, arrayFromString, arrayFromUtf8String, stringFromArray, utf8StringFromArray, stripLeadingZeros, arrayFromInt32, arrayBufferConcat, sha256, isCryptoKey, Base64Url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importPublicKey", function() { return importPublicKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importPrivateKey", function() { return importPrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importEcPublicKey", function() { return importEcPublicKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importEcPrivateKey", function() { return importEcPrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importRsaPublicKey", function() { return importRsaPublicKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importRsaPrivateKey", function() { return importRsaPrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayish", function() { return arrayish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertRsaKey", function() { return convertRsaKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromString", function() { return arrayFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromUtf8String", function() { return arrayFromUtf8String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFromArray", function() { return stringFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8StringFromArray", function() { return utf8StringFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLeadingZeros", function() { return stripLeadingZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromInt32", function() { return arrayFromInt32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferConcat", function() { return arrayBufferConcat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sha256", function() { return sha256; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCryptoKey", function() { return isCryptoKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64Url", function() { return Base64Url; });
/* harmony import */ var _jose_jwe_webcryptographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jose-jwe-webcryptographer */ "./lib/jose-jwe-webcryptographer.js");
/* harmony import */ var _jose_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jose-core */ "./lib/jose-core.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* -
 * Copyright 2014 Square Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(eslint): figure out how to properly include Jose or expose crypto object


var webCryptographer = new _jose_jwe_webcryptographer__WEBPACK_IMPORTED_MODULE_0__["WebCryptographer"]();
/**
 * Import a public key in JWK format, either RSA or ECDSA.
 *
 * @param key   JWK public key
 * @param alg   Name of the JWA signing algorithm (e.g. RS256)
 * @return Promise<CryptoKey>
 */

var importPublicKey = function importPublicKey(key, alg) {
  switch (alg) {
    case 'RS256':
    case 'RS384':
    case 'RS512':
    case 'PS256':
    case 'PS384':
    case 'PS512':
      return importRsaPublicKey(key, alg);

    case 'ES256':
    case 'ES384':
    case 'ES512':
      return importEcPublicKey(key, alg);

    default:
      throw Error('unsupported algorithm: ' + alg);
  }
};
/**
 * Import a private key in JWK format, either RSA or EC.
 *
 * @param key   JWK private key
 * @param alg   Name of the JWA signing algorithm (e.g. RS256)
 * @return Promise<CryptoKey>
 */

var importPrivateKey = function importPrivateKey(key, alg) {
  switch (alg) {
    case 'RS256':
    case 'RS384':
    case 'RS512':
    case 'PS256':
    case 'PS384':
    case 'PS512':
      return importRsaPrivateKey(key, alg);

    case 'ES256':
    case 'ES384':
    case 'ES512':
      return importEcPrivateKey(key, alg);

    default:
      throw Error('unsupported algorithm: ' + alg);
  }
};
/**
 * Import a public EC key in JWK format.
 *
 * @param ecKey   JWK public key
 * @param alg   Name of the JWA signing algorithm (e.g. ES256)
 * @return Promise<CryptoKey>
 */

var importEcPublicKey = function importEcPublicKey(ecKey, alg) {
  var config = webCryptographer.getSignConfig(alg);
  var usage = webCryptographer.getKeyUsageByAlg(alg);
  return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.importKey('jwk', ecKey, config.id, false, [usage.publicKey]);
};
/**
 * Import a private EC key in JWK format.
 *
 * @param ecKey   JWK private key
 * @param alg   Name of the JWA signing algorithm (e.g. ES256)
 * @return Promise<CryptoKey>
 */

var importEcPrivateKey = function importEcPrivateKey(ecKey, alg) {
  var config = webCryptographer.getSignConfig(alg);
  var usage = webCryptographer.getKeyUsageByAlg(alg);
  return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.importKey('jwk', ecKey, config.id, false, [usage.privateKey]);
};
/**
 * Converts the output from `openssl x509 -text` or `openssl rsa -text` into a
 * CryptoKey which can then be used with RSA-OAEP. Also accepts (and validates)
 * JWK keys.
 *
 * TODO: this code probably belongs in the webcryptographer.
 *
 * @param rsaKey  public RSA key in json format. Parameters can be base64
 *                 encoded, strings or number (for 'e').
 * @param alg      String, name of the algorithm
 * @return Promise<CryptoKey>
 */

var importRsaPublicKey = function importRsaPublicKey(rsaKey, alg) {
  var jwk;
  var config;
  var usage = webCryptographer.getKeyUsageByAlg(alg);

  if (usage.publicKey === 'wrapKey') {
    if (!rsaKey.alg) {
      rsaKey.alg = alg;
    }

    jwk = convertRsaKey(rsaKey, ['n', 'e']);
    config = webCryptographer.getCryptoConfig(alg);
  } else {
    var rk = {};

    for (var name in rsaKey) {
      if (rsaKey.hasOwnProperty(name)) {
        rk[name] = rsaKey[name];
      }
    }

    if (!rk.alg && alg) {
      rk.alg = alg;
    }

    config = webCryptographer.getSignConfig(rk.alg);
    jwk = convertRsaKey(rk, ['n', 'e']);
    jwk.ext = true;
  }

  return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.importKey('jwk', jwk, config.id, false, [usage.publicKey]);
};
/**
 * Converts the output from `openssl x509 -text` or `openssl rsa -text` into a
 * CryptoKey which can then be used with RSA-OAEP and RSA. Also accepts (and validates)
 * JWK keys.
 *
 * TODO: this code probably belongs in the webcryptographer.
 *
 * @param rsaKey  private RSA key in json format. Parameters can be base64
 *                 encoded, strings or number (for 'e').
 * @param alg      String, name of the algorithm
 * @return Promise<CryptoKey>
 */

var importRsaPrivateKey = function importRsaPrivateKey(rsaKey, alg) {
  var jwk;
  var config;
  var usage = webCryptographer.getKeyUsageByAlg(alg);

  if (usage.privateKey === 'unwrapKey') {
    if (!rsaKey.alg) {
      rsaKey.alg = alg;
    }

    jwk = convertRsaKey(rsaKey, ['n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi']);
    config = webCryptographer.getCryptoConfig(alg);
  } else {
    var rk = {};

    for (var name in rsaKey) {
      if (rsaKey.hasOwnProperty(name)) {
        rk[name] = rsaKey[name];
      }
    }

    config = webCryptographer.getSignConfig(alg);

    if (!rk.alg && alg) {
      rk.alg = alg;
    }

    jwk = convertRsaKey(rk, ['n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi']);
    jwk.ext = true;
  }

  return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.importKey('jwk', jwk, config.id, false, [usage.privateKey]);
}; // Private functions

var isString = function isString(str) {
  return typeof str === 'string' || str instanceof String;
};
/**
 * Takes an arrayish (an array, ArrayBuffer or Uint8Array)
 * and returns an array or a Uint8Array.
 *
 * @param arr  arrayish
 * @return array or Uint8Array
 */

var arrayish = function arrayish(arr) {
  if (arr instanceof Array) {
    return arr;
  }

  if (arr instanceof Uint8Array) {
    return arr;
  }

  if (arr instanceof ArrayBuffer) {
    return new Uint8Array(arr);
  }

  webCryptographer.assert(false, 'arrayish: invalid input');
};
/**
 * Checks if an RSA key contains all the expected parameters. Also checks their
 * types. Converts hex encoded strings (or numbers) to base64.
 *
 * @param rsaKey     RSA key in json format. Parameters can be base64 encoded,
 *                    strings or number (for 'e').
 * @param parameters  array<string>
 * @return json
 */

var convertRsaKey = function convertRsaKey(rsaKey, parameters) {
  var r = {};
  var alg; // Check that we have all the parameters

  var missing = [];
  parameters.map(function (p) {
    if (typeof rsaKey[p] === 'undefined') {
      missing.push(p);
    }
  });

  if (missing.length > 0) {
    webCryptographer.assert(false, 'convertRsaKey: Was expecting ' + missing.join());
  } // kty is either missing or is set to "RSA"


  if (typeof rsaKey.kty !== 'undefined') {
    webCryptographer.assert(rsaKey.kty === 'RSA', "convertRsaKey: expecting rsaKey['kty'] to be 'RSA'");
  }

  r.kty = 'RSA';

  try {
    webCryptographer.getSignConfig(rsaKey.alg);
    alg = rsaKey.alg;
  } catch (err) {
    try {
      webCryptographer.getCryptoConfig(rsaKey.alg);
      alg = rsaKey.alg;
    } catch (er) {
      webCryptographer.assert(alg, "convertRsaKey: expecting rsaKey['alg'] to have a valid value");
    }
  }

  r.alg = alg; // note: we punt on checking key_ops

  var intFromHex = function intFromHex(e) {
    return parseInt(e, 16);
  };

  for (var i = 0; i < parameters.length; i++) {
    var p = parameters[i];
    var v = rsaKey[p];
    var base64UrlEncoder = new Base64Url();

    if (p === 'e') {
      if (typeof v === 'number') {
        v = base64UrlEncoder.encodeArray(stripLeadingZeros(arrayFromInt32(v)));
      }
    } else if (/^([0-9a-fA-F]{2}:)+[0-9a-fA-F]{2}$/.test(v)) {
      var arr = v.split(':').map(intFromHex);
      v = base64UrlEncoder.encodeArray(stripLeadingZeros(arr));
    } else if (typeof v !== 'string') {
      webCryptographer.assert(false, "convertRsaKey: expecting rsaKey['" + p + "'] to be a string");
    }

    r[p] = v;
  }

  return r;
};
/**
 * Converts a string into an array of ascii codes.
 *
 * @param str  ascii string
 * @return Uint8Array
 */

var arrayFromString = function arrayFromString(str) {
  webCryptographer.assert(isString(str), 'arrayFromString: invalid input');
  var arr = str.split('').map(function (c) {
    return c.charCodeAt(0);
  });
  return new Uint8Array(arr);
};
/**
 * Converts a string into an array of utf-8 codes.
 *
* @param str  utf-8 string
 * @return Uint8Array
 */

var arrayFromUtf8String = function arrayFromUtf8String(str) {
  webCryptographer.assert(isString(str), 'arrayFromUtf8String: invalid input'); // javascript represents strings as utf-16. Jose imposes the use of
  // utf-8, so we need to convert from one representation to the other.

  str = unescape(encodeURIComponent(str));
  return arrayFromString(str);
};
/**
 * Converts an array of ascii bytes into a string.
 *
 * @param arr  arrayish
 * @return ascii string
 */

var stringFromArray = function stringFromArray(arr) {
  arr = arrayish(arr);
  var r = '';

  for (var i = 0; i < arr.length; i++) {
    r += String.fromCharCode(arr[i]);
  }

  return r;
};
/**
 * Converts an array of ascii bytes into a string.
 *
 * @param arr  ArrayBuffer
 * @return ascii string
 */

var utf8StringFromArray = function utf8StringFromArray(arr) {
  webCryptographer.assert(arr instanceof ArrayBuffer, 'utf8StringFromArray: invalid input'); // javascript represents strings as utf-16. Jose imposes the use of
  // utf-8, so we need to convert from one representation to the other.

  var r = stringFromArray(arr);
  return decodeURIComponent(escape(r));
};
/**
 * Strips leading zero in an array.
 *
 * @param arr  arrayish
 * @return array
 */

var stripLeadingZeros = function stripLeadingZeros(arr) {
  if (arr instanceof ArrayBuffer) {
    arr = new Uint8Array(arr);
  }

  var isLeadingZero = true;
  var r = [];

  for (var i = 0; i < arr.length; i++) {
    if (isLeadingZero && arr[i] === 0) {
      continue;
    }

    isLeadingZero = false;
    r.push(arr[i]);
  }

  return r;
};
/**
 * Converts a number into an array of 4 bytes (big endian).
 *
 * @param i  number
 * @return ArrayBuffer
 */

var arrayFromInt32 = function arrayFromInt32(i) {
  webCryptographer.assert(typeof i === 'number', 'arrayFromInt32: invalid input'); // TODO(eslint): figure out if there's a better way to validate i
  // eslint-disable-next-line eqeqeq, no-self-compare

  webCryptographer.assert(i == i | 0, 'arrayFromInt32: out of range');
  var buf = new Uint8Array(new Uint32Array([i]).buffer);
  var r = new Uint8Array(4);

  for (var j = 0; j < 4; j++) {
    r[j] = buf[3 - j];
  }

  return r.buffer;
};
/**
 * Concatenates arrayishes.
 *
 * note: cannot be a Arrow function, because Arrow functions do not expose 'arguments' object
 * and Rest parameters are not supported in Babel yet.
 *
 * @param arguments two or more arrayishes
 * @return Uint8Array
 */

function arrayBufferConcat()
/* ... */
{
  // Compute total size
  var args = [];
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    args.push(arrayish(arguments[i]));
    total += args[i].length;
  }

  var r = new Uint8Array(total);
  var offset = 0;

  for (i = 0; i < arguments.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      r[offset++] = args[i][j];
    }
  }

  webCryptographer.assert(offset === total, 'arrayBufferConcat: unexpected offset');
  return r;
}
var sha256 = function sha256(str) {
  // Browser docs indicate the first parameter to crypto.subtle.digest to be a
  // DOMString. This was initially implemented as an object and continues to be
  // supported, so we favor the older form for backwards compatibility.
  return _jose_core__WEBPACK_IMPORTED_MODULE_1__["Jose"].crypto.subtle.digest({
    name: 'SHA-256'
  }, arrayFromString(str)).then(function (hash) {
    return new Base64Url().encodeArray(hash);
  });
};
var isCryptoKey = function isCryptoKey(rsaKey) {
  // Some browsers don't expose the CryptoKey as an object, so we need to check
  // the constructor's name.
  if (rsaKey.constructor.name === 'CryptoKey') {
    return true;
  } // In the presence of minifiers, relying on class names can be problematic,
  // so let's also allow objects that have an 'algorithm' property.


  if (rsaKey.hasOwnProperty('algorithm')) {
    return true;
  }

  return false;
};
var Base64Url =
/*#__PURE__*/
function () {
  function Base64Url() {
    _classCallCheck(this, Base64Url);
  }

  _createClass(Base64Url, [{
    key: "encode",

    /**
     * Base64Url encodes a string (no trailing '=')
     *
     * @param str  string
     * @return string
     */
    value: function encode(str) {
      webCryptographer.assert(isString(str), 'Base64Url.encode: invalid input');
      return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
    /**
     * Base64Url encodes an array
     *
     * @param arr array or ArrayBuffer
     * @return string
     */

  }, {
    key: "encodeArray",
    value: function encodeArray(arr) {
      return this.encode(stringFromArray(arr));
    }
    /**
     * Base64Url decodes a string
     *
     * @param str  string
     * @return string
     */

  }, {
    key: "decode",
    value: function decode(str) {
      webCryptographer.assert(isString(str), 'Base64Url.decode: invalid input'); // atob is nice and ignores missing '='

      return atob(str.replace(/-/g, '+').replace(/_/g, '/'));
    }
  }, {
    key: "decodeArray",
    value: function decodeArray(str) {
      webCryptographer.assert(isString(str), 'Base64Url.decodeArray: invalid input');
      return arrayFromString(this.decode(str));
    }
  }]);

  return Base64Url;
}();

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=jose.js.map