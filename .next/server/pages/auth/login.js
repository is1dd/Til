"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/login";
exports.ids = ["pages/auth/login"];
exports.modules = {

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fc */ \"react-icons/fc\");\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _utils_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _utils_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction Login() {\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    //Sign in with google\n    const googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n    const GoogleLogin = async ()=>{\n        try {\n            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_utils_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, googleProvider);\n            route.push(\"/\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (user) {\n            route.push(\"/\");\n        } else {\n            console.log(\"login\");\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shadow-xl mt-32 p-10 text-gray-700 rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-medium\",\n                children: \"Join Today\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\auth\\\\login.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"py-4\",\n                        children: \"Sign in with one of the providers\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\auth\\\\login.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: GoogleLogin,\n                        className: \"text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_1__.FcGoogle, {\n                                className: \"text-2xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\auth\\\\login.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            \"Sign in with Google\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\auth\\\\login.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\auth\\\\login.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\auth\\\\login.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUMwQjtBQUN4QjtBQUNKO0FBQ2lCO0FBQ3ZCO0FBRW5CLFNBQVNPLEtBQUssR0FBRztJQUM5QixNQUFNQyxLQUFLLEdBQUdKLHNEQUFTLEVBQUU7SUFDekIsTUFBTSxDQUFDSyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHTCx1RUFBWSxDQUFDRixpREFBSSxDQUFDO0lBQzFDLHFCQUFxQjtJQUNyQixNQUFNUSxjQUFjLEdBQUcsSUFBSVQsNkRBQWtCLEVBQUU7SUFDL0MsTUFBTVUsV0FBVyxHQUFHLFVBQVk7UUFDOUIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNWiw4REFBZSxDQUFDRSxpREFBSSxFQUFFUSxjQUFjLENBQUM7WUFDMURILEtBQUssQ0FBQ00sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEVBQUUsT0FBT0MsS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVEVCxnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJRyxJQUFJLEVBQUU7WUFDUkQsS0FBSyxDQUFDTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsT0FBTztZQUNMRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQyxFQUFFO1FBQUNSLElBQUk7S0FBQyxDQUFDLENBQUM7SUFFWCxxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUMsK0NBQStDOzswQkFDNUQsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxzQkFBc0I7MEJBQUMsWUFBVTs7Ozs7b0JBQUs7MEJBQ3BELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsTUFBTTs7a0NBQ25CLDhEQUFDRSxJQUFFO3dCQUFDRixTQUFTLEVBQUMsTUFBTTtrQ0FBQyxtQ0FBaUM7Ozs7OzRCQUFLO2tDQUMzRCw4REFBQ0csUUFBTTt3QkFDTEMsT0FBTyxFQUFFWCxXQUFXO3dCQUNwQk8sU0FBUyxFQUFDLGtGQUFrRjs7MENBRTVGLDhEQUFDbkIsb0RBQVE7Z0NBQUNtQixTQUFTLEVBQUMsVUFBVTs7Ozs7b0NBQUc7NEJBQUEscUJBRW5DOzs7Ozs7NEJBQVM7Ozs7OztvQkFDTDs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGl2ZS13cml0ZXMvLi9wYWdlcy9hdXRoL2xvZ2luLmpzPzI3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmNHb29nbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIjtcclxuaW1wb3J0IHsgc2lnbkluV2l0aFBvcHVwLCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG4gIC8vU2lnbiBpbiB3aXRoIGdvb2dsZVxyXG4gIGNvbnN0IGdvb2dsZVByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gIGNvbnN0IEdvb2dsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIGdvb2dsZVByb3ZpZGVyKTtcclxuICAgICAgcm91dGUucHVzaChcIi9cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHJvdXRlLnB1c2goXCIvXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgbXQtMzIgcC0xMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQtbGdcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtXCI+Sm9pbiBUb2RheTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJweS00XCI+U2lnbiBpbiB3aXRoIG9uZSBvZiB0aGUgcHJvdmlkZXJzPC9oMz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtHb29nbGVMb2dpbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZ3JheS03MDAgdy1mdWxsIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgZmxleCBhbGlnbi1taWRkbGUgcC00IGdhcC0yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmNHb29nbGUgY2xhc3NOYW1lPVwidGV4dC0yeGxcIiAvPlxyXG4gICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZjR29vZ2xlIiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiYXV0aCIsInVzZVJvdXRlciIsInVzZUF1dGhTdGF0ZSIsInVzZUVmZmVjdCIsIkxvZ2luIiwicm91dGUiLCJ1c2VyIiwibG9hZGluZyIsImdvb2dsZVByb3ZpZGVyIiwiR29vZ2xlTG9naW4iLCJyZXN1bHQiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// import * as firebase from 'firebase';\n// import 'firebase/firestore';\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDIXOczOSNGv6iQg7M_dNYC9SdG7OKHVpc\",\n    authDomain: \"learningnextjs-c6799.firebaseapp.com\",\n    projectId: \"learningnextjs-c6799\",\n    storageBucket: \"learningnextjs-c6799.appspot.com\",\n    messagingSenderId: \"116777246992\",\n    appId: \"1:116777246992:web:6db6b28172473e524c0595\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// if (!firebase.apps.length) {\n//     firebase.initializeApp({});\n// }\n// if (!firebase.apps.length) {\n//    firebase.initializeApp({});\n// }else {\n//    firebase.app(); // if already initialized, use that one\n// }\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0w7QUFDVTtBQUNsRCx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBRS9CLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLE1BQU1HLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLHNDQUFzQztJQUNsREMsU0FBUyxFQUFFLHNCQUFzQjtJQUNqQ0MsYUFBYSxFQUFFLGtDQUFrQztJQUNqREMsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztDQUNuRDtBQUVELHNCQUFzQjtBQUN0QixNQUFNQyxHQUFHLEdBQUdWLDJEQUFhLENBQUNHLGNBQWMsQ0FBQztBQUN6QywrQkFBK0I7QUFDL0Isa0NBQWtDO0FBQ2xDLElBQUk7QUFDSiwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLFVBQVU7QUFDViw2REFBNkQ7QUFDN0QsSUFBSTtBQUNHLE1BQU1RLElBQUksR0FBR1Ysc0RBQU8sRUFBRSxDQUFDO0FBQ3ZCLE1BQU1XLEVBQUUsR0FBR1YsZ0VBQVksQ0FBQ1EsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGl2ZS13cml0ZXMvLi91dGlscy9maXJlYmFzZS5qcz81MjdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuLy8gaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG4vLyBpbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeURJWE9jek9TTkd2NmlRZzdNX2ROWUM5U2RHN09LSFZwY1wiLFxyXG4gIGF1dGhEb21haW46IFwibGVhcm5pbmduZXh0anMtYzY3OTkuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImxlYXJuaW5nbmV4dGpzLWM2Nzk5XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJsZWFybmluZ25leHRqcy1jNjc5OS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjExNjc3NzI0Njk5MlwiLFxyXG4gIGFwcElkOiBcIjE6MTE2Nzc3MjQ2OTkyOndlYjo2ZGI2YjI4MTcyNDczZTUyNGMwNTk1XCJcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbi8vIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuLy8gICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe30pO1xyXG4vLyB9XHJcbi8vIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuLy8gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7fSk7XHJcbi8vIH1lbHNlIHtcclxuLy8gICAgZmlyZWJhc2UuYXBwKCk7IC8vIGlmIGFscmVhZHkgaW5pdGlhbGl6ZWQsIHVzZSB0aGF0IG9uZVxyXG4vLyB9XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/firebase.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react-icons/fc":
/*!*********************************!*\
  !*** external "react-icons/fc" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fc");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/login.js"));
module.exports = __webpack_exports__;

})();