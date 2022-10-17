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
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__]);\n([_utils_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction Post() {\n    //Form state\n    const { 0: post , 1: setPost  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        description: \"\"\n    });\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const routeData = route.query;\n    //Submit Post\n    const submitPost = async (e)=>{\n        e.preventDefault();\n        //Run checks for description\n        if (!post.description) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Description Field empty \\uD83D\\uDE05\", {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER,\n                autoClose: 1500\n            });\n            return;\n        }\n        if (post.description.length > 300) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Description too long \\uD83D\\uDE05\", {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER,\n                autoClose: 1500\n            });\n            return;\n        }\n        if (post === null || post === void 0 ? void 0 : post.hasOwnProperty(\"id\")) {\n            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", post.id);\n            const updatedPost = {\n                ...post,\n                timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.serverTimestamp)()\n            };\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)(docRef, updatedPost);\n            return route.push(\"/\");\n        } else {\n            //Make a new post\n            const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\");\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)(collectionRef, {\n                ...post,\n                timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.serverTimestamp)(),\n                user: user.uid,\n                avatar: user.photoURL,\n                username: user.displayName\n            });\n            setPost({\n                description: \"\"\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Post has been made \\uD83D\\uDE80\", {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER,\n                autoClose: 1500\n            });\n            return route.push(\"/\");\n        }\n    };\n    //Check our user\n    const checkUser = async ()=>{\n        if (loading) return;\n        if (!user) route.push(\"/auth/login\");\n        if (routeData.id) {\n            setPost({\n                description: routeData.description,\n                id: routeData.id\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        checkUser();\n    }, [\n        user,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: submitPost,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold\",\n                    children: post.hasOwnProperty(\"id\") ? \"Edit your post\" : \"Create a new post\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\post.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lg font-medium py-2\",\n                            children: \"Description\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\post.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: post.description,\n                            onChange: (e)=>setPost({\n                                    ...post,\n                                    description: e.target.value\n                                }),\n                            className: \"bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\post.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: `text-cyan-600 font-medium text-sm ${post.description.length > 300 ? \"text-red-600\" : \"\"}`,\n                            children: [\n                                post.description.length,\n                                \"/300\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\post.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\post.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-sm\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\post.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\post.js\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MODERN\\\\Desktop\\\\Project\\\\creative-minds\\\\pages\\\\post.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxDQUFDYyxNQUFNO2dDQUFDLE1BQzNCOzs7Ozs7Z0NBQUk7Ozs7Ozt3QkFDQTs4QkFDTiw4REFBQzBCLFFBQU07b0JBQ0xDLElBQUksRUFBQyxRQUFRO29CQUNiWCxTQUFTLEVBQUMsdUVBQXVFOzhCQUNsRixRQUVEOzs7Ozt3QkFBUzs7Ozs7O2dCQUNKOzs7OztZQUNILENBQ047QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRpdmUtd3JpdGVzLy4vcGFnZXMvcG9zdC5qcz8yNTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3V0aWxzL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBhZGREb2MsXHJcbiAgY29sbGVjdGlvbixcclxuICBkb2MsXHJcbiAgc2VydmVyVGltZXN0YW1wLFxyXG4gIHVwZGF0ZURvYyxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KCkge1xyXG4gIC8vRm9ybSBzdGF0ZVxyXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHsgZGVzY3JpcHRpb246IFwiXCIgfSk7XHJcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xyXG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgcm91dGVEYXRhID0gcm91dGUucXVlcnk7XHJcblxyXG4gIC8vU3VibWl0IFBvc3RcclxuICBjb25zdCBzdWJtaXRQb3N0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vUnVuIGNoZWNrcyBmb3IgZGVzY3JpcHRpb25cclxuICAgIGlmICghcG9zdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkRlc2NyaXB0aW9uIEZpZWxkIGVtcHR5IPCfmIVcIiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMTUwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwb3N0LmRlc2NyaXB0aW9uLmxlbmd0aCA+IDMwMCkge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkRlc2NyaXB0aW9uIHRvbyBsb25nIPCfmIVcIiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMTUwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zdD8uaGFzT3duUHJvcGVydHkoXCJpZFwiKSkge1xyXG4gICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwicG9zdHNcIiwgcG9zdC5pZCk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRQb3N0ID0geyAuLi5wb3N0LCB0aW1lc3RhbXA6IHNlcnZlclRpbWVzdGFtcCgpIH07XHJcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyhkb2NSZWYsIHVwZGF0ZWRQb3N0KTtcclxuICAgICAgcmV0dXJuIHJvdXRlLnB1c2goXCIvXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9NYWtlIGEgbmV3IHBvc3RcclxuICAgICAgY29uc3QgY29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIik7XHJcbiAgICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uUmVmLCB7XHJcbiAgICAgICAgLi4ucG9zdCxcclxuICAgICAgICB0aW1lc3RhbXA6IHNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIHVzZXI6IHVzZXIudWlkLFxyXG4gICAgICAgIGF2YXRhcjogdXNlci5waG90b1VSTCxcclxuICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFBvc3QoeyBkZXNjcmlwdGlvbjogXCJcIiB9KTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlBvc3QgaGFzIGJlZW4gbWFkZSDwn5qAXCIsIHtcclxuICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0NFTlRFUixcclxuICAgICAgICBhdXRvQ2xvc2U6IDE1MDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcm91dGUucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9DaGVjayBvdXIgdXNlclxyXG4gIGNvbnN0IGNoZWNrVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm47XHJcbiAgICBpZiAoIXVzZXIpIHJvdXRlLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcclxuICAgIGlmIChyb3V0ZURhdGEuaWQpIHtcclxuICAgICAgc2V0UG9zdCh7IGRlc2NyaXB0aW9uOiByb3V0ZURhdGEuZGVzY3JpcHRpb24sIGlkOiByb3V0ZURhdGEuaWQgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrVXNlcigpO1xyXG4gIH0sIFt1c2VyLCBsb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIwIHAtMTIgc2hhZG93LWxnIHJvdW5kZWQtbGcgbWF4LXctbWQgbXgtYXV0b1wiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0UG9zdH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAge3Bvc3QuaGFzT3duUHJvcGVydHkoXCJpZFwiKSA/IFwiRWRpdCB5b3VyIHBvc3RcIiA6IFwiQ3JlYXRlIGEgbmV3IHBvc3RcIn1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gcHktMlwiPkRlc2NyaXB0aW9uPC9oMz5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICB2YWx1ZT17cG9zdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQb3N0KHsgLi4ucG9zdCwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBoLTQ4IHctZnVsbCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgcC0yIHRleHQtc21cIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWN5YW4tNjAwIGZvbnQtbWVkaXVtIHRleHQtc20gJHtcclxuICAgICAgICAgICAgICBwb3N0LmRlc2NyaXB0aW9uLmxlbmd0aCA+IDMwMCA/IFwidGV4dC1yZWQtNjAwXCIgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cG9zdC5kZXNjcmlwdGlvbi5sZW5ndGh9LzMwMFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWN5YW4tNjAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC0yIG15LTIgcm91bmRlZC1sZyB0ZXh0LXNtXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXV0aCIsImRiIiwidXNlQXV0aFN0YXRlIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2VydmVyVGltZXN0YW1wIiwidXBkYXRlRG9jIiwidG9hc3QiLCJQb3N0IiwicG9zdCIsInNldFBvc3QiLCJkZXNjcmlwdGlvbiIsInVzZXIiLCJsb2FkaW5nIiwicm91dGUiLCJyb3V0ZURhdGEiLCJxdWVyeSIsInN1Ym1pdFBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsInBvc2l0aW9uIiwiUE9TSVRJT04iLCJUT1BfQ0VOVEVSIiwiYXV0b0Nsb3NlIiwibGVuZ3RoIiwiaGFzT3duUHJvcGVydHkiLCJkb2NSZWYiLCJpZCIsInVwZGF0ZWRQb3N0IiwidGltZXN0YW1wIiwicHVzaCIsImNvbGxlY3Rpb25SZWYiLCJ1aWQiLCJhdmF0YXIiLCJwaG90b1VSTCIsInVzZXJuYW1lIiwiZGlzcGxheU5hbWUiLCJzdWNjZXNzIiwiY2hlY2tVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJoMyIsInRleHRhcmVhIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInAiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post.js\n");

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

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post.js"));
module.exports = __webpack_exports__;

})();