(function (e) {
    var t = function (e, n, r, i, s, o, u, a, f, l, c) {
            var h = this;
            var p = t.prototype;
            h.pointer_img;
            h.left_sdo = null;
            h.middle_sdo = null;
            h.right_sdo = null;
            h.text_sdo = null;
            h.pointer_sdo = null;
            h.leftImagePath_str = s;
            h.middleImagePath_str = o;
            h.rightImagePath_str = u;
            h.fontColor_str = a;
            h.bottomPointer_str = c;
            h.topPointer_str = l;
            h.pointerPosition_str = f;
            h.toolTipLabel_str = r;
            h.toolTipLabel2_str = i;
            h.marginWidth = e.width;
            h.totalHeight = e.height;
            h.pointerWidth = n.width;
            h.pointerHeight = n.height;
            h.totalWidth;
            h.hideWithDelayId_do;
            h.isMobile_bl = FWDUtils.isMobile;
            h.isShowed_bl = true;
            h.init = function () {
                h.setOverflow("visible");
                h.setWidth(200);
                h.setupMainContainers();
                h.setLabel(h.toolTipLabel_str);
                h.hide()
            };
            h.setupMainContainers = function () {
                var e;
                h.left_sdo = new FWDSimpleDisplayObject("img");
                e = new Image;
                e.src = h.leftImagePath_str;
                h.left_sdo.setScreen(e);
                h.left_sdo.setWidth(h.marginWidth);
                h.left_sdo.setHeight(h.totalHeight);
                h.addChild(h.left_sdo);
                h.middle_sdo = new FWDSimpleDisplayObject("img");
                e = new Image;
                e.src = h.middleImagePath_str;
                h.middle_sdo.setScreen(e);
                h.middle_sdo.setX(h.marginWidth);
                h.middle_sdo.setWidth(h.marginWidth);
                h.middle_sdo.setHeight(h.totalHeight);
                h.addChild(h.middle_sdo);
                h.right_sdo = new FWDSimpleDisplayObject("img");
                e = new Image;
                e.src = h.rightImagePath_str;
                h.right_sdo.setScreen(e);
                h.right_sdo.setWidth(h.marginWidth);
                h.right_sdo.setHeight(h.totalHeight);
                h.addChild(h.right_sdo);
                h.text_sdo = new FWDSimpleDisplayObject("div");
                h.text_sdo.setBackfaceVisibility();
                h.text_sdo.setDisplay("inline-block");
                h.text_sdo.getStyle().fontFamily = "Arial";
                h.text_sdo.getStyle().fontSize = "12px";
                h.text_sdo.setHeight(20);
                h.text_sdo.getStyle().color = h.fontColor_str;
                h.text_sdo.getStyle().fontSmoothing = "antialiased";
                h.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
                h.text_sdo.getStyle().textRendering = "optimizeLegibility";
                h.text_sdo.setX(h.marginWidth);
                if (FWDUtils.isIEAndLessThen9 || FWDUtils.isSafari) {
                    h.text_sdo.setY(parseInt((h.totalHeight - 8) / 2) - 2)
                } else {
                    h.text_sdo.setY(parseInt((h.totalHeight - 8) / 2) - 1)
                }
                h.addChild(h.text_sdo);
                h.pointer_img = new Image;
                if (h.pointerPosition_str == FWDController.POSITION_BOTTOM) {
                    h.pointer_img.src = h.bottomPointer_str
                } else {
                    h.pointer_img.src = h.topPointer_str
                }
                h.pointer_sdo = new FWDSimpleDisplayObject("img");
                h.pointer_sdo.setScreen(h.pointer_img);
                h.pointer_sdo.setWidth(h.pointerWidth);
                h.pointer_sdo.setHeight(h.pointerHeight);
                h.addChild(h.pointer_sdo)
            };
            h.setLabel = function (e) {
                if (h == null) return;
                if (!h.middle_sdo) return;
                h.text_sdo.setInnerHTML(e);
                setTimeout(function () {
                    if (h == null) return;
                    h.middle_sdo.setWidth(h.text_sdo.screen.offsetWidth);
                    h.right_sdo.setX(h.text_sdo.screen.offsetWidth + h.marginWidth);
                    h.totalWidth = h.marginWidth * 2 + h.text_sdo.screen.offsetWidth;
                    h.positionPointer(0)
                }, 50)
            };
            h.positionPointer = function (e) {
                var t;
                var n;
                if (!e) e = 0;
                t = parseInt((h.totalWidth - h.pointerWidth) / 2) + e;
                if (h.pointerPosition_str == FWDController.POSITION_BOTTOM) {
                    n = h.totalHeight - 1
                } else {
                    n = -h.pointerHeight + 1
                }
                h.pointer_sdo.setX(t);
                h.pointer_sdo.setY(n)
            };
            h.show = function () {
                if (h.isShowed_bl) return;
                clearInterval(h.hideWithDelayId_do);
                h.positionPointer();
                h.setVisible(true);
                TweenMax.killTweensOf(h);
                h.setAlpha(0);
                TweenMax.to(h, .4, {
                    alpha: 1,
                    delay: .1,
                    ease: Quart.easeOut
                });
                h.isShowed_bl = true
            };
            h.hide = function () {
                if (!h.isShowed_bl) return;
                TweenMax.killTweensOf(h);
                h.setVisible(false);
                h.isShowed_bl = false
            };
            h.destroy = function () {
                TweenMax.killTweensOf(h);
                h.pointer_img = null;
                h.left_sdo.destroy();
                h.middle_sdo.destroy();
                h.right_sdo.destroy();
                h.text_sdo.destroy();
                h.pointer_sdo.destroy();
                h.leftImagePath_str = null;
                h.middleImagePath_str = null;
                h.rightImagePath_str = null;
                h.fontColor_str = null;
                h.bottomPointer_str = null;
                h.topPointer_str = null;
                h.pointerPosition_str = null;
                h.toolTipLabel_str = null;
                h.toolTipLabel2_str = null;
                h.left_sdo = null;
                h.middle_sdo = null;
                h.right_sdo = null;
                h.text_sdo = null;
                h.pointer_sdo = null;
                e = null;
                n = null;
                r = null;
                i = null;
                s = null;
                o = null;
                u = null;
                a = null;
                f = null;
                l = null;
                c = null;
                h.setInnerHTML("");
                p.destroy();
                h = null;
                p = null;
                t.prototype = null
            };
            h.init()
        };
    t.setPrototype = function () {
        t.prototype = null;
        t.prototype = new FWDDisplayObject("div")
    };
    t.CLICK = "onClick";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDButtonToolTip = t
})(window);
(function () {
    var e = function (t, n, r, i, s) {
            var o = this;
            var u = e.prototype;
            this.n1Img = t;
            this.s1Img = n;
            this.n2Img = r;
            this.s2Img = i;
            this.firstButton_do;
            this.n1_do;
            this.s1_do;
            this.secondButton_do;
            this.n2_do;
            this.s2_do;
            this.buttonWidth = o.n1Img.width;
            this.buttonHeight = o.n1Img.height;
            this.currentState = 1;
            this.isDisabled_bl = false;
            this.isMaximized_bl = false;
            this.disptachMainEvent_bl = s;
            this.isDisabled_bl = false;
            this.isMobile_bl = FWDUtils.isMobile;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            o.init = function () {
                o.hasTransform2d_bl = false;
                o.setButtonMode(true);
                o.setWidth(o.buttonWidth);
                o.setHeight(o.buttonHeight);
                o.setupMainContainers();
                o.secondButton_do.setVisible(false)
            };
            o.setupMainContainers = function () {
                o.firstButton_do = new FWDDisplayObject("div");
                o.addChild(o.firstButton_do);
                o.n1_do = new FWDSimpleDisplayObject("img");
                o.n1_do.setScreen(o.n1Img);
                o.s1_do = new FWDSimpleDisplayObject("img");
                o.s1_do.setScreen(o.s1Img);
                o.s1_do.setAlpha(0);
                o.firstButton_do.addChild(o.n1_do);
                o.firstButton_do.addChild(o.s1_do);
                o.firstButton_do.setWidth(o.n1Img.width);
                o.firstButton_do.setHeight(o.n1Img.height);
                o.secondButton_do = new FWDDisplayObject("div");
                o.addChild(o.secondButton_do);
                o.n2_do = new FWDSimpleDisplayObject("img");
                o.n2_do.setScreen(o.n2Img);
                o.s2_do = new FWDSimpleDisplayObject("img");
                o.s2_do.setScreen(o.s2Img);
                o.s2_do.setAlpha(0);
                o.secondButton_do.addChild(o.n2_do);
                o.secondButton_do.addChild(o.s2_do);
                o.secondButton_do.setWidth(o.n2Img.width);
                o.secondButton_do.setHeight(o.n2Img.height);
                o.addChild(o.secondButton_do);
                o.addChild(o.firstButton_do);
                if (o.isMobile_bl) {
                    if (o.hasPointerEvent_bl) {
                        o.screen.addEventListener("MSPointerDown", o.onMouseDown);
                        o.screen.addEventListener("MSPointerUp", o.onClick);
                        o.screen.addEventListener("MSPointerOver", o.onMouseOver);
                        o.screen.addEventListener("MSPointerOut", o.onMouseOut)
                    } else {
                        o.screen.addEventListener("touchstart", o.onMouseDown)
                    }
                } else if (o.screen.addEventListener) {
                    o.screen.addEventListener("mouseover", o.onMouseOver);
                    o.screen.addEventListener("mouseout", o.onMouseOut);
                    o.screen.addEventListener("mousedown", o.onMouseDown);
                    o.screen.addEventListener("click", o.onClick)
                } else if (o.screen.attachEvent) {
                    o.screen.attachEvent("onmouseover", o.onMouseOver);
                    o.screen.attachEvent("onmouseout", o.onMouseOut);
                    o.screen.attachEvent("onmousedown", o.onMouseDown);
                    o.screen.attachEvent("onclick", o.onClick)
                }
            };
            o.onMouseOver = function (t, n) {
                if (o.isDisabled_bl) return;
                if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                    o.dispatchEvent(e.MOUSE_OVER, {
                        e: t
                    });
                    o.setSelectedState()
                }
            };
            o.onMouseOut = function (t) {
                if (o.isDisabled_bl) return;
                if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                    o.setNormalState();
                    o.dispatchEvent(e.MOUSE_OUT)
                }
            };
            o.onClick = function (t) {
                if (o.isDisabled_bl) return;
                if (t.preventDefault) t.preventDefault();
                if (o.disptachMainEvent_bl) o.dispatchEvent(e.CLICK)
            };
            o.onMouseDown = function (t) {
                if (o.isDisabled_bl) return;
                if (t.preventDefault) t.preventDefault();
                if (!o.isMobile_bl) o.onMouseOver(t, false);
                if (o.hasPointerEvent_bl) o.setNormalState();
                if (o.disptachMainEvent_bl) o.dispatchEvent(e.MOUSE_DOWN, {
                    e: t
                })
            };
            o.toggleButton = function () {
                if (o.currentState == 1) {
                    o.firstButton_do.setVisible(false);
                    o.secondButton_do.setVisible(true);
                    o.currentState = 0;
                    o.dispatchEvent(e.FIRST_BUTTON_CLICK)
                } else {
                    o.firstButton_do.setVisible(true);
                    o.secondButton_do.setVisible(false);
                    o.currentState = 1;
                    o.dispatchEvent(e.SECOND_BUTTON_CLICK)
                }
            };
            o.setButtonState = function (e) {
                if (e == 1) {
                    o.firstButton_do.setVisible(true);
                    o.secondButton_do.setVisible(false);
                    o.currentState = 1
                } else {
                    o.firstButton_do.setVisible(false);
                    o.secondButton_do.setVisible(true);
                    o.currentState = 0
                }
            };
            this.setNormalState = function () {
                if (o.isMobile_bl && !o.hasPointerEvent_bl) return;
                TweenMax.killTweensOf(o.s1_do);
                TweenMax.killTweensOf(o.s2_do);
                TweenMax.to(o.s1_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                });
                TweenMax.to(o.s2_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            };
            this.setSelectedState = function () {
                TweenMax.killTweensOf(o.s1_do);
                TweenMax.killTweensOf(o.s2_do);
                TweenMax.to(o.s1_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                });
                TweenMax.to(o.s2_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            };
            o.destroy = function () {
                if (o.isMobile_bl) {
                    if (o.hasPointerEvent_bl) {
                        o.screen.removeEventListener("MSPointerDown", o.onMouseDown);
                        o.screen.removeEventListener("MSPointerUp", o.onClick);
                        o.screen.removeEventListener("MSPointerOver", o.onMouseOver);
                        o.screen.removeEventListener("MSPointerOut", o.onMouseOut)
                    } else {
                        o.screen.removeEventListener("touchstart", o.onMouseDown)
                    }
                } else if (o.screen.removeEventListener) {
                    o.screen.removeEventListener("mouseover", o.onMouseOver);
                    o.screen.removeEventListener("mouseout", o.onMouseOut);
                    o.screen.removeEventListener("mousedown", o.onMouseDown);
                    o.screen.removeEventListener("click", o.onClick)
                } else if (o.screen.detachEvent) {
                    o.screen.detachEvent("onmouseover", o.onMouseOver);
                    o.screen.detachEvent("onmouseout", o.onMouseOut);
                    o.screen.detachEvent("onmousedown", o.onMouseDown);
                    o.screen.detachEvent("onclick", o.onClick)
                }
                TweenMax.killTweensOf(o.s1_do);
                TweenMax.killTweensOf(o.s2_do);
                o.firstButton_do.destroy();
                o.n1_do.destroy();
                o.s1_do.destroy();
                o.secondButton_do.destroy();
                o.n2_do.destroy();
                o.s2_do.destroy();
                o.firstButton_do = null;
                o.n1_do = null;
                o.s1_do = null;
                o.secondButton_do = null;
                o.n2_do = null;
                o.s2_do = null;
                o.n1Img = null;
                o.s1Img = null;
                o.n2Img = null;
                o.s2Img = null;
                t = null;
                n = null;
                r = null;
                i = null;
                o.init = null;
                o.setupMainContainers = null;
                o.onMouseOver = null;
                o.onMouseOut = null;
                o.onClick = null;
                o.onMouseDown = null;
                o.toggleButton = null;
                o.setButtonState = null;
                o.destroy = null;
                o.setInnerHTML("");
                u.destroy();
                o = null;
                u = null;
                e.prototype = null
            };
            o.init()
        };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.FIRST_BUTTON_CLICK = "onFirstClick";
    e.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    e.MOUSE_OVER = "onMouseOver";
    e.MOUSE_OUT = "onMouseOut";
    e.MOUSE_DOWN = "onMouseDown";
    e.CLICK = "onClick";
    e.prototype = null;
    window.FWDComplexButton = e
})(window);
(function (e) {
    var t = function () {
            var n = this;
            var r = t.prototype;
            this.main_do = null;
            this.init = function () {
                this.setupScreen();
                e.onerror = this.showError;
                this.screen.style.zIndex = 100000009;
                setTimeout(this.addConsoleToDom, 100);
                setInterval(this.position, 100)
            };
            this.position = function () {
                var e = FWDUtils.getScrollOffsets();
                n.setX(e.x);
                n.setY(e.y)
            };
            this.addConsoleToDom = function () {
                if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1) {
                    document.getElementsByTagName("body")[0].appendChild(n.screen)
                } else {
                    document.documentElement.appendChild(n.screen)
                }
            };
            this.setupScreen = function () {
                this.main_do = new FWDDisplayObject("div", "absolute");
                this.main_do.setOverflow("auto");
                this.main_do.setWidth(200);
                this.main_do.setHeight(300);
                this.setWidth(200);
                this.setHeight(300);
                this.main_do.setBkColor("#FFFFFF");
                this.addChild(this.main_do)
            };
            this.showError = function (e, t, r) {
                var i = n.main_do.getInnerHTML() + "<br>" + "JavaScript error: " + e + " on line " + r + " for " + t;
                n.main_do.setInnerHTML(i);
                n.main_do.screen.scrollTop = n.main_do.screen.scrollHeight
            };
            this.log = function (e) {
                var t = n.main_do.getInnerHTML() + "<br>" + e;
                n.main_do.setInnerHTML(t);
                n.main_do.getScreen().scrollTop = 1e4
            };
            this.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div", "absolute")
    };
    t.prototype = null;
    e.FWDConsole = t
})(window);
(function () {
    var e = function (t, n) {
            var r = this;
            var i = e.prototype;
            r.parent = t;
            r.buttonsTest_ar = n.buttons_ar;
            r.itemsLabels_ar = n.contextMenuLabels_ar;
            r.items_ar = [];
            r.spacers_ar = [];
            r.moveLeftButton_do = null;
            r.moveRightButton_do = null;
            r.moveUpButton_do = null;
            r.moveDownButton_do = null;
            r.infoButton_do = null;
            r.fullScreenButton_do = null;
            r.zoomInButton_do = null;
            r.zoomOutButton_do = null;
            r.hideOrShowMarkersButton_do = null;
            r.hideOrShowController_do = null;
            r.infoButton_do = null;
            r.fullScreenButton_do = null;
            r.backgroundColor_str = n.contextMenuBackgroundColor_str;
            r.borderColor_str = n.contextMenuBorderColor_str;
            r.spacerColor_str = n.contextMenuSpacerColor_str;
            r.itemNormalColor_str = n.contextMenuItemNormalColor_str;
            r.itemSelectedColor_str = n.contextMenuItemSelectedColor_str;
            r.itemDisabledColor_str = n.contextMenuItemDisabledColor_str;
            r.draggingMode_str = n.startDraggingMode_str;
            r.link_str = n.link_str;
            r.borderRadius = 6;
            r.biggestWidth;
            r.totalWidth = 400;
            r.totalHeight = 400;
            r.sapaceBetweenButtons = 7;
            r.padding = 6;
            r.getMaxWidthResizeAndPositionId_to;
            r.inverseNextAndPrevRotation_bl = n.inverseNextAndPrevRotation_bl;
            r.showScriptDeveloper_bl = n.showScriptDeveloper_bl;
            r.show_bl = false;
            r.isActive_bl = false;
            r.areLeftAndRightButtonsDisabled_bl = true;
            r.areUpAndDownButtonsDisabled_bl = true;
            r.init = function () {
                if (r.itemsLabels_ar || r.showScriptDeveloper_bl) {
                    r.show_bl = true;
                    r.setWidth(r.totalWidth);
                    r.setHeight(r.totalHeight);
                    r.setBkColor(r.backgroundColor_str);
                    r.getStyle().borderColor = r.borderColor_str;
                    r.getStyle().borderStyle = "solid";
                    r.getStyle().borderRadius = r.borderRadius + "px";
                    r.getStyle().borderWidth = "1px";
                    r.setVisible(false);
                    r.setY(-2e3);
                    r.parent.main_do.addChild(r);
                    r.setupLabels();
                    r.setupDeveloperButton();
                    r.setupSpacers();
                    r.getMaxWidthResizeAndPositionId_to = setTimeout(r.getMaxWidthResizeAndPosition, 200)
                }
                r.addContextEvent()
            };
            r.setupLabels = function () {
                var e = r.buttonsTest_ar.length;
                var n;
                var i = "";
                var s = "";
                if (!r.itemsLabels_ar) return;
                for (var o = 0; o < e; o++) {
                    n = r.buttonsTest_ar[o];
                    if (n == "moveleft") {
                        i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                        FWDContextMenuButton.setPrototype();
                        r.moveLeftButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.moveLeftButton_do);
                        r.moveLeftButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.moveLeftHandler);
                        r.moveLeftButton_do.disable();
                        r.addChild(r.moveLeftButton_do)
                    } else if (n == "moveright") {
                        i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                        FWDContextMenuButton.setPrototype();
                        r.moveRightButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.moveRightButton_do);
                        if (r.draggingMode_str == FWDController.ROTATE) r.moveRightButton_do.disable();
                        r.moveRightButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.moveRightHandler);
                        r.moveRightButton_do.disable();
                        r.addChild(r.moveRightButton_do)
                    } else if (n == "moveup") {
                        i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                        FWDContextMenuButton.setPrototype();
                        r.moveUpButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.moveUpButton_do);
                        r.moveUpButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.moveUpHandler);
                        r.moveUpButton_do.disable();
                        r.addChild(r.moveUpButton_do)
                    } else if (n == "movedown") {
                        i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                        FWDContextMenuButton.setPrototype();
                        r.moveDownButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.moveDownButton_do);
                        r.moveDownButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.downButtonStartHandler);
                        r.moveDownButton_do.disable();
                        r.addChild(r.moveDownButton_do)
                    } else if (n == "scrollbar") {
                        var u = r.itemsLabels_ar[o];
                        if (u) {
                            if (u.indexOf("/") == -1) {
                                i = "Contextmenu item is not defined!";
                                s = "Contextmenu item is not defined!"
                            } else {
                                i = u.substr(0, u.indexOf("/"));
                                s = u.substr(u.indexOf("/") + 1)
                            }
                        } else {
                            i = "Contextmenu item is not defined!";
                            s = "Contextmenu item is not defined!"
                        }
                        FWDContextMenuButton.setPrototype();
                        r.zoomInButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.zoomInButton_do);
                        r.zoomInButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.zoomInButtonStartHandler);
                        r.addChild(r.zoomInButton_do);
                        FWDContextMenuButton.setPrototype();
                        r.zoomOutButton_do = new FWDContextMenuButton(s, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.zoomOutButton_do);
                        r.zoomOutButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.zoomOutButtonStartHandler);
                        r.addChild(r.zoomOutButton_do)
                    } else if (n == "hideorshowmarkers") {
                        var u = r.itemsLabels_ar[o];
                        if (u) {
                            if (u.indexOf("/") == -1) {
                                i = "Contextmenu item is not defined!";
                                s = "Contextmenu item is not defined!"
                            } else {
                                i = u.substr(0, u.indexOf("/"));
                                s = u.substr(u.indexOf("/") + 1)
                            }
                        } else {
                            i = "Contextmenu item is not defined!";
                            s = "Contextmenu item is not defined!"
                        }
                        FWDContextMenuButton.setPrototype();
                        r.hideOrShowMarkersButton_do = new FWDContextMenuButton(i, s, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.hideOrShowMarkersButton_do);
                        r.hideOrShowMarkersButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.startHideOrShowMarkersButton);
                        r.addChild(r.hideOrShowMarkersButton_do)
                    } else if (n == "info") {
                        i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                        FWDContextMenuButton.setPrototype();
                        r.infoButton_do = new FWDContextMenuButton(i, s, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.infoButton_do);
                        r.infoButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.infoButtonStart);
                        r.addChild(r.infoButton_do)
                    } else if (n == "hideorshowcontroller") {
                        var u = r.itemsLabels_ar[o];
                        if (u) {
                            if (u.indexOf("/") == -1) {
                                i = "Contextmenu item is not defined!";
                                s = "Contextmenu item is not defined!"
                            } else {
                                i = u.substr(0, u.indexOf("/"));
                                s = u.substr(u.indexOf("/") + 1)
                            }
                        } else {
                            i = "Contextmenu item is not defined!";
                            s = "Contextmenu item is not defined!"
                        }
                        FWDContextMenuButton.setPrototype();
                        r.hideOrShowController_do = new FWDContextMenuButton(i, s, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.hideOrShowController_do);
                        r.hideOrShowController_do.addListener(FWDContextMenuButton.CLICK, r.startHideOrShowControllerHandler);
                        r.addChild(r.hideOrShowController_do)
                    } else if (n == "fullscreen") {
                        if (!(t.displayType == FWDMegazoom.FULL_SCREEN && !FWDUtils.hasFullScreen)) {
                            u = r.itemsLabels_ar[o];
                            if (u) {
                                if (u.indexOf("/") == -1) {
                                    i = "Contextmenu item is not defined!";
                                    s = "Contextmenu item is not defined!"
                                } else {
                                    i = u.substr(0, u.indexOf("/"));
                                    s = u.substr(u.indexOf("/") + 1)
                                }
                            } else {
                                i = "Contextmenu item is not defined!";
                                s = "Contextmenu item is not defined!"
                            }
                            FWDContextMenuButton.setPrototype();
                            r.fullScreenButton_do = new FWDContextMenuButton(i, s, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                            r.items_ar.push(r.fullScreenButton_do);
                            r.fullScreenButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.fullScreenStartHandler);
                            r.addChild(r.fullScreenButton_do)
                        }
                    }
                }
            };
            r.setupDeveloperButton = function () {
                if (r.showScriptDeveloper_bl) {
                    if (!r.itemsLabels_ar) r.itemsLabels_ar = [];
                    r.itemsLabels_ar.push("&#0169; made by FWD");
                    label1_str = "&#0169; made by FWD";
                    FWDContextMenuButton.setPrototype();
                    r.developerButton_do = new FWDContextMenuButton(label1_str, undefined, r.itemSelectedColor_str, r.itemNormalColor_str, r.itemDisabledColor_str);
                    r.developerButton_do.isDeveleper_bl = true;
                    r.items_ar.push(r.developerButton_do);
                    r.addChild(r.developerButton_do)
                }
            };
            this.enableLeftAndRightButtons = function () {
                r.areLeftAndRightButtonsDisabled_bl = false;
                if (r.moveLeftButton_do) r.moveLeftButton_do.enable();
                if (r.moveRightButton_do) r.moveRightButton_do.enable()
            };
            this.disableLeftAndRightButtons = function () {
                r.areLeftAndRightButtonsDisabled_bl = true;
                if (r.moveLeftButton_do) r.moveLeftButton_do.disable();
                if (r.moveRightButton_do) r.moveRightButton_do.disable()
            };
            this.enableUpAndDownButtons = function () {
                r.areUpAndDownButtonsDisabled_bl = false;
                if (r.moveUpButton_do) r.moveUpButton_do.enable();
                if (r.moveDownButton_do) r.moveDownButton_do.enable()
            };
            this.disableUpAndDownButtons = function () {
                r.areUpAndDownButtonsDisabled_bl = true;
                if (r.moveUpButton_do) r.moveUpButton_do.disable();
                if (r.moveDownButton_do) r.moveDownButton_do.disable()
            };
            r.moveLeftHandler = function (e) {
                r.dispatchEvent(FWDController.PAN, {
                    e: e,
                    dir: "left"
                })
            };
            r.moveRightHandler = function (e) {
                r.dispatchEvent(FWDController.PAN, {
                    e: e,
                    dir: "right"
                })
            };
            r.moveUpHandler = function (e) {
                r.dispatchEvent(FWDController.PAN, {
                    e: e,
                    dir: "up"
                })
            };
            r.downButtonStartHandler = function (e) {
                r.dispatchEvent(FWDController.PAN, {
                    e: e,
                    dir: "down"
                })
            };
            r.zoomInButtonStartHandler = function (e) {
                r.dispatchEvent(FWDController.ZOOM_IN, {
                    e: e
                })
            };
            r.zoomOutButtonStartHandler = function (e) {
                r.dispatchEvent(FWDController.ZOOM_OUT, {
                    e: e
                })
            };
            r.startHideOrShowMarkersButton = function (e) {
                if (r.hideOrShowMarkersButton_do.currentState == 0) {
                    r.dispatchEvent(FWDController.HIDE_MARKERS, {
                        e: e
                    })
                } else {
                    r.dispatchEvent(FWDController.SHOW_MARKERS, {
                        e: e
                    })
                }
            };
            r.updateHideOrShowMarkersButton = function (e) {
                if (!r.hideOrShowMarkersButton_do) return;
                if (e == 0) {
                    r.hideOrShowMarkersButton_do.setButtonState(0)
                } else {
                    r.hideOrShowMarkersButton_do.setButtonState(1)
                }
            };
            r.infoButtonStart = function (e) {
                r.removeFromDOM();
                r.dispatchEvent(FWDController.SHOW_INFO)
            };
            r.fullScreenStartHandler = function (e) {
                if (r.fullScreenButton_do.currentState == 0) {
                    r.dispatchEvent(FWDController.GO_FULL_SCREEN)
                } else if (r.fullScreenButton_do.currentState == 1) {
                    r.dispatchEvent(FWDController.GO_NORMAL_SCREEN)
                }
                r.fullScreenButton_do.onMouseOut()
            };
            r.updateFullScreenButton = function (e) {
                if (!r.fullScreenButton_do) return;
                if (e == 0) {
                    r.fullScreenButton_do.setButtonState(0)
                } else {
                    r.fullScreenButton_do.setButtonState(1)
                }
                r.removeFromDOM()
            };
            r.startHideOrShowControllerHandler = function (e) {
                if (r.hideOrShowController_do.currentState == 0) {
                    r.updateHideControllerButton(1);
                    r.dispatchEvent(FWDController.HIDE_CONTROLLER)
                } else if (r.hideOrShowController_do.currentState == 1) {
                    r.updateHideControllerButton(0);
                    r.dispatchEvent(FWDController.SHOW_CONTROLLER)
                }
            };
            r.updateHideControllerButton = function (e) {
                if (!r.hideOrShowController_do) return;
                if (e == 0) {
                    r.hideOrShowController_do.setButtonState(0)
                } else {
                    r.hideOrShowController_do.setButtonState(1)
                }
            };
            r.setupSpacers = function () {
                var e = r.items_ar.length - 1;
                var t;
                for (var n = 0; n < e; n++) {
                    t = new FWDSimpleDisplayObject("div");
                    r.spacers_ar[n] = t;
                    t.setHeight(1);
                    t.setBkColor(r.spacerColor_str);
                    r.addChild(t)
                }
            };
            r.getMaxWidthResizeAndPosition = function () {
                var e = r.items_ar.length;
                var t;
                var n;
                var i;
                var s;
                r.totalWidth = 0;
                r.totalHeight = 0;
                for (var o = 0; o < e; o++) {
                    t = r.items_ar[o];
                    if (t.getMaxTextWidth() > r.totalWidth) r.totalWidth = t.getMaxTextWidth()
                }
                for (var o = 0; o < e; o++) {
                    n = r.spacers_ar[o - 1];
                    t = r.items_ar[o];
                    t.setX(r.padding);
                    t.setY(10 + o * (t.totalHeight + r.sapaceBetweenButtons) - r.padding);
                    if (n) {
                        n.setWidth(r.totalWidth + 2);
                        n.setX(r.padding);
                        n.setY(parseInt(t.getY() - r.sapaceBetweenButtons / 2) - 1)
                    }
                    t.setWidth(r.totalWidth + 2);
                    t.centerText()
                }
                r.totalHeight = t.getY() + t.totalHeight + 2;
                r.setWidth(r.totalWidth + r.padding * 2 + 4);
                r.setHeight(r.totalHeight);
                r.setVisible(true);
                r.removeFromDOM()
            };
            r.addContextEvent = function () {
                if (r.parent.main_do.screen.addEventListener) {
                    r.parent.main_do.screen.addEventListener("contextmenu", r.contextMenuHandler)
                } else {
                    r.parent.main_do.screen.attachEvent("oncontextmenu", r.contextMenuHandler)
                }
            };
            r.contextMenuHandler = function (e) {
                if (!r.show_bl || !r.isActive_bl) {
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        return false
                    }
                    return
                }
                r.parent.main_do.addChild(r);
                r.positionButtons(e);
                r.setAlpha(0);
                TweenMax.to(r, .4, {
                    alpha: 1,
                    ease: Quart.easeOut
                });
                if (window.addEventListener) {
                    window.addEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler);
                    window.addEventListener("mouseup", r.contextMenuWindowOnMouseDownHandler)
                } else {
                    document.documentElement.attachEvent("onmousedown", r.contextMenuWindowOnMouseDownHandler);
                    document.documentElement.attachEvent("onmouseup", r.contextMenuWindowOnMouseDownHandler)
                }
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    return false
                }
            };
            r.contextMenuWindowOnMouseDownHandler = function (e) {
                var t = FWDUtils.getViewportMouseCoordinates(e);
                var n = t.screenX;
                var i = t.screenY;
                if (!FWDUtils.hitTest(r.screen, n, i)) {
                    if (window.removeEventListener) {
                        window.removeEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler);
                        window.removeEventListener("mouseup", r.contextMenuWindowOnMouseDownHandler)
                    } else {
                        document.documentElement.detachEvent("onmousedown", r.contextMenuWindowOnMouseDownHandler);
                        document.documentElement.detachEvent("onmouseup", r.contextMenuWindowOnMouseDownHandler)
                    }
                    r.removeFromDOM()
                }
            };
            r.positionButtons = function (e) {
                var t = FWDUtils.getViewportMouseCoordinates(e);
                var n = r.parent.main_do.getWidth();
                var i = r.parent.main_do.getHeight();
                var s = t.screenX - r.parent.main_do.getGlobalX();
                var o = t.screenY - r.parent.main_do.getGlobalY();
                var u = s - 2;
                var a = o - 2;
                r.totalWidth = r.getWidth();
                r.totalHeight = r.getHeight();
                if (u + r.totalWidth > n - 2) u = s - r.totalWidth;
                if (u < 0) u = parseInt((n - r.totalWidth) / 2);
                if (u < 0) u = 0;
                if (a + r.totalHeight > i - 2) a = o - r.totalHeight;
                if (a < 0) a = parseInt((i - r.totalHeight) / 2);
                if (a < 0) a = 0;
                r.setX(u);
                r.setY(a)
            };
            r.disable = function () {
                if (r.moveLeftButton_do) r.moveLeftButton_do.disable();
                if (r.moveRightButton_do) r.moveRightButton_do.disable();
                if (r.moveUpButton_do) r.moveUpButton_do.disable();
                if (r.moveDownButton_do) r.moveDownButton_do.disable();
                if (r.hideOrShowMarkersButton_do) r.hideOrShowMarkersButton_do.disable();
                if (r.hideOrShowController_do) r.hideOrShowController_do.disable();
                if (r.infoButton_do) r.infoButton_do.disable();
                if (r.zoomInButton_do) r.zoomInButton_do.disable();
                if (r.zoomOutButton_do) r.zoomOutButton_do.disable()
            };
            r.enable = function () {
                if (r.moveLeftButton_do && !r.areLeftAndRightButtonsDisabled_bl) r.moveLeftButton_do.enable();
                if (r.moveRightButton_do && !r.areLeftAndRightButtonsDisabled_bl) r.moveRightButton_do.enable();
                if (r.moveUpButton_do && !r.areUpAndDownButtonsDisabled_bl) r.moveUpButton_do.enable();
                if (r.moveDownButton_do && !r.areUpAndDownButtonsDisabled_bl) r.moveDownButton_do.enable();
                if (r.hideOrShowMarkersButton_do) r.hideOrShowMarkersButton_do.enable();
                if (r.hideOrShowController_do) r.hideOrShowController_do.enable();
                if (r.infoButton_do) r.infoButton_do.enable();
                if (r.zoomInButton_do) r.zoomInButton_do.enable();
                if (r.zoomOutButton_do) r.zoomOutButton_do.enable()
            };
            r.removeFromDOM = function () {
                if (r.parent.main_do.contains(r)) r.parent.main_do.removeChild(r)
            };
            r.destroy = function () {
                var s;
                clearTimeout(r.getMaxWidthResizeAndPositionId_to);
                TweenMax.killTweensOf(r);
                if (window.removeEventListener) {
                    window.removeEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler);
                    window.removeEventListener("mouseup", r.contextMenuWindowOnMouseDownHandler);
                    r.parent.main_do.screen.removeEventListener("contextmenu", r.contextMenuHandler)
                } else {
                    document.documentElement.detachEvent("onmousedown", r.contextMenuWindowOnMouseDownHandler);
                    document.documentElement.detachEvent("onmouseup", r.contextMenuWindowOnMouseDownHandler);
                    r.parent.main_do.screen.detachEvent("oncontextmenu", r.contextMenuHandler)
                }
                s = r.items_ar.length;
                for (var o = 0; o < s; o++) {
                    r.items_ar[o].destroy()
                }
                s = r.spacers_ar.length;
                for (var o = 0; o < s; o++) {
                    r.spacers_ar[o].destroy()
                }
                r.buttonsTest_ar = null;
                r.itemsLabels_ar = null;
                r.items_ar = null;
                r.spacers_ar = null;
                r.moveLeftButton_do = null;
                r.moveRightButton_do = null;
                r.moveUpButton_do = null;
                r.moveDownButton_do = null;
                r.hideOrShowMarkersButton_do = null;
                r.infoButton_do = null;
                r.hideOrShowController_do = null;
                r.fullScreenButton_do = null;
                r.zoomInButton_do = null;
                r.zoomOutButton_do = null;
                r.hideOrShowController_do = null;
                r.infoButton_do = null;
                r.fullScreenButton_do = null;
                r.backgroundColor_str = null;
                r.borderColor_str = null;
                r.spacerColor_str = null;
                r.itemNormalColor_str = null;
                r.itemSelectedColor_str = null;
                r.itemDisabledColor_str = null;
                r.draggingMode_str = null;
                r.link_str = null;
                t = null;
                n = null;
                r.setInnerHTML("");
                i.destroy();
                i = null;
                r = null;
                e.prototype = null
            };
            r.init()
        };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.prototype = null;
    window.FWDContextMenu = e
})(window);
(function () {
    var e = function (t, n, r, i, s, o) {
            var u = this;
            var a = e.prototype;
            u.label1_str = t;
            u.label2_str = n;
            u.normalColor_str = r;
            u.selectedColor_str = i;
            u.disabledColor_str = s;
            u.totalWidth = 400;
            u.totalHeight = 20;
            u.padding;
            u.text1_sdo = null;
            u.text2_sdo = null;
            u.dumy_sdo = null;
            u.isMobile_bl = FWDUtils.isMobile;
            u.currentState = 1;
            u.isDisabled_bl = false;
            u.isMaximized_bl = false;
            u.showSecondButton_bl = n != undefined;
            u.isDeveleper_bl = false;
            u.init = function () {
                u.setBackfaceVisibility();
                u.setButtonMode(true);
                u.setupMainContainers();
                u.setWidth(u.totalWidth);
                u.setHeight(u.totalHeight);
                u.setButtonState(0)
            };
            u.setupMainContainers = function () {
                u.text1_sdo = new FWDSimpleDisplayObject("div");
                u.text1_sdo.setBackfaceVisibility();
                u.text1_sdo.setDisplay("inline-block");
                u.text1_sdo.getStyle().fontFamily = "Arial";
                u.text1_sdo.getStyle().fontSize = "12px";
                u.text1_sdo.getStyle().color = u.normalColor_str;
                u.text1_sdo.getStyle().fontSmoothing = "antialiased";
                u.text1_sdo.getStyle().webkitFontSmoothing = "antialiased";
                u.text1_sdo.getStyle().textRendering = "optimizeLegibility";
                u.text1_sdo.setInnerHTML(u.label1_str);
                u.addChild(u.text1_sdo);
                if (u.showSecondButton_bl) {
                    u.text2_sdo = new FWDSimpleDisplayObject("div");
                    u.text2_sdo.setBackfaceVisibility();
                    u.text2_sdo.setDisplay("inline-block");
                    u.text2_sdo.getStyle().fontFamily = "Arial";
                    u.text2_sdo.getStyle().fontSize = "12px";
                    u.text2_sdo.getStyle().color = u.normalColor_str;
                    u.text2_sdo.getStyle().fontSmoothing = "antialiased";
                    u.text2_sdo.getStyle().webkitFontSmoothing = "antialiased";
                    u.text2_sdo.getStyle().textRendering = "optimizeLegibility";
                    u.text2_sdo.setInnerHTML(u.label2_str);
                    u.addChild(u.text2_sdo)
                }
                u.dumy_sdo = new FWDSimpleDisplayObject("div");
                if (FWDUtils.isIE) {
                    u.dumy_sdo.setBkColor("#FF0000");
                    u.dumy_sdo.setAlpha(0)
                }
                u.addChild(u.dumy_sdo);
                if (u.isMobile_bl) {
                    u.screen.addEventListener("touchstart", u.onMouseDown)
                } else if (u.screen.addEventListener) {
                    u.screen.addEventListener("mouseover", u.onMouseOver);
                    u.screen.addEventListener("mouseout", u.onMouseOut);
                    u.screen.addEventListener("mousedown", u.onMouseDown);
                    u.screen.addEventListener("click", u.onClick)
                } else if (u.screen.attachEvent) {
                    u.screen.attachEvent("onmouseover", u.onMouseOver);
                    u.screen.attachEvent("onmouseout", u.onMouseOut);
                    u.screen.attachEvent("onmousedown", u.onMouseDown);
                    u.screen.attachEvent("onclick", u.onClick)
                }
            };
            u.onMouseOver = function (t) {
                if (u.isDisabled_bl) return;
                TweenMax.killTweensOf(u.text1_sdo);
                if (t) {
                    TweenMax.to(u.text1_sdo.screen, .5, {
                        css: {
                            color: u.selectedColor_str
                        },
                        ease: Expo.easeOut
                    });
                    if (u.showSecondButton_bl) TweenMax.to(u.text2_sdo.screen, .5, {
                        css: {
                            color: u.selectedColor_str
                        },
                        ease: Expo.easeOut
                    })
                } else {
                    u.text1_sdo.getStyle().color = u.selectedColor_str;
                    if (u.showSecondButton_bl) {
                        TweenMax.killTweensOf(u.text2_sdo);
                        u.text2_sdo.getStyle().color = u.selectedColor_str
                    }
                }
                u.dispatchEvent(e.MOUSE_OVER)
            };
            u.onMouseOut = function (t) {
                if (u.isDisabled_bl) return;
                TweenMax.killTweensOf(u.text1_sdo);
                TweenMax.to(u.text1_sdo.screen, .5, {
                    css: {
                        color: u.normalColor_str
                    },
                    ease: Expo.easeOut
                });
                if (u.showSecondButton_bl) {
                    TweenMax.killTweensOf(u.text2_sdo);
                    TweenMax.to(u.text2_sdo.screen, .5, {
                        css: {
                            color: u.normalColor_str
                        },
                        ease: Expo.easeOut
                    })
                }
                u.dispatchEvent(e.MOUSE_OUT)
            };
            u.onClick = function (t) {
                if (u.isDeveleper_bl) {
                    window.open("http://www.webdesign-flash.ro", "_blank");
                    return
                }
                if (u.isDisabled_bl) return;
                if (t.preventDefault) t.preventDefault();
                u.dispatchEvent(e.CLICK)
            };
            u.onMouseDown = function (t) {
                if (u.isDisabled_bl) return;
                if (t.preventDefault) t.preventDefault();
                u.dispatchEvent(e.MOUSE_DOWN, {
                    e: t
                })
            };
            u.toggleButton = function () {
                if (!u.showSecondButton_bl) return;
                if (u.currentState == 1) {
                    u.text1_sdo.setVisible(true);
                    u.text2_sdo.setVisible(false);
                    u.currentState = 0;
                    u.dispatchEvent(e.FIRST_BUTTON_CLICK)
                } else {
                    u.text1_sdo.setVisible(false);
                    u.text2_sdo.setVisible(true);
                    u.currentState = 1;
                    u.dispatchEvent(e.SECOND_BUTTON_CLICK)
                }
            };
            u.setButtonState = function (e) {
                if (e == 0) {
                    u.text1_sdo.setVisible(true);
                    if (u.showSecondButton_bl) u.text2_sdo.setVisible(false);
                    u.currentState = 0
                } else if (e == 1) {
                    u.text1_sdo.setVisible(false);
                    if (u.showSecondButton_bl) u.text2_sdo.setVisible(true);
                    u.currentState = 1
                }
            };
            u.centerText = function () {
                u.dumy_sdo.setWidth(u.totalWidth);
                u.dumy_sdo.setHeight(u.totalHeight);
                if (FWDUtils.isIEAndLessThen9) {
                    u.text1_sdo.setY(Math.round((u.totalHeight - u.text1_sdo.getHeight()) / 2) - 1);
                    if (u.showSecondButton_bl) u.text2_sdo.setY(Math.round((u.totalHeight - u.text2_sdo.getHeight()) / 2) - 1)
                } else {
                    u.text1_sdo.setY(Math.round((u.totalHeight - u.text1_sdo.getHeight()) / 2));
                    if (u.showSecondButton_bl) u.text2_sdo.setY(Math.round((u.totalHeight - u.text2_sdo.getHeight()) / 2))
                }
                u.text1_sdo.setHeight(u.totalHeight + 2);
                if (u.showSecondButton_bl) u.text2_sdo.setHeight(u.totalHeight + 2)
            };
            u.getMaxTextWidth = function () {
                var e = u.text1_sdo.getWidth();
                var t = 0;
                if (u.showSecondButton_bl) t = u.text2_sdo.getWidth();
                return Math.max(e, t)
            };
            u.disable = function () {
                u.isDisabled_bl = true;
                TweenMax.killTweensOf(u.text1_sdo);
                TweenMax.to(u.text1_sdo.screen, .5, {
                    css: {
                        color: u.disabledColor_str
                    },
                    ease: Expo.easeOut
                });
                u.setButtonMode(false)
            };
            u.enable = function () {
                u.isDisabled_bl = false;
                TweenMax.killTweensOf(u.text1_sdo);
                TweenMax.to(u.text1_sdo.screen, .5, {
                    css: {
                        color: u.normalColor_str
                    },
                    ease: Expo.easeOut
                });
                u.setButtonMode(true)
            };
            u.destroy = function () {
                if (u.isMobile_bl) {
                    u.screen.removeEventListener("touchstart", u.onMouseDown)
                } else if (u.screen.removeEventListener) {
                    u.screen.removeEventListener("mouseover", u.onMouseOver);
                    u.screen.removeEventListener("mouseout", u.onMouseOut);
                    u.screen.removeEventListener("mousedown", u.onMouseDown);
                    u.screen.removeEventListener("click", u.onClick)
                } else if (u.screen.detachEvent) {
                    u.screen.detachEvent("onmouseover", u.onMouseOver);
                    u.screen.detachEvent("onmouseout", u.onMouseOut);
                    u.screen.detachEvent("onmousedown", u.onMouseDown);
                    u.screen.detachEvent("onclick", u.onClick)
                }
                TweenMax.killTweensOf(u.text1_sdo);
                u.text1_sdo.destroy();
                if (u.text2_sdo) {
                    TweenMax.killTweensOf(u.text2_sdo);
                    u.text2_sdo.destroy()
                }
                u.dumy_sdo.destroy();
                u.text1_sdo = null;
                u.text2_sdo = null;
                u.dumy_sdo = null;
                u.label1_str = null;
                u.label2_str = null;
                u.normalColor_str = null;
                u.selectedColor_str = null;
                u.disabledColor_str = null;
                t = null;
                n = null;
                r = null;
                i = null;
                s = null;
                u.setInnerHTML("");
                a.destroy();
                u = null;
                a = null;
                e.prototype = null
            };
            u.init()
        };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.FIRST_BUTTON_CLICK = "onFirstClick";
    e.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    e.MOUSE_OVER = "onMouseOver";
    e.MOUSE_OUT = "onMouseOut";
    e.MOUSE_DOWN = "onMouseDown";
    e.CLICK = "onClick";
    e.prototype = null;
    window.FWDContextMenuButton = e
})(window);
(function () {
    var e = function (t, n) {
            var r = this;
            var i = e.prototype;
            this.buttonsTest_ar = t.buttons_ar;
            this.buttonsLabels_ar = t.buttonsLabels_ar;
            this.markersList_ar = [];
            this.markersPosition_ar = [];
            this.buttons_ar = [];
            this.backgroundLeft_img = t.controllerBackgroundLeft_img;
            this.backgroundRight_img = t.controllerBackgroundRight_img;
            this.downN_img = t.controllerMoveDownN_img;
            this.downS_img = t.controllerMoveDownS_img;
            this.downD_img = t.controllerMoveDownD_img;
            this.upN_img = t.controllerMoveUpN_img;
            this.upS_img = t.controllerMoveUpS_img;
            this.upD_img = t.controllerMoveUpD_img;
            this.nextN_img = t.controllerNextN_img;
            this.nextS_img = t.controllerNextS_img;
            this.nextD_img = t.controllerNextD_img;
            this.prevN_img = t.controllerPrevN_img;
            this.prevS_img = t.controllerPrevS_img;
            this.prevD_img = t.controllerPrevD_img;
            this.controllerHideMarkersN_img = t.controllerHideMarkersN_img;
            this.controllerHideMarkersS_img = t.controllerHideMarkersS_img;
            this.controllerShowMarkersN_img = t.controllerShowMarkersN_img;
            this.controllerShowMarkersS_img = t.controllerShowMarkersS_img;
            this.infoN_img = t.controllerInfoN_img;
            this.infoS_img = t.controllerInfoS_img;
            this.controllerHideN_img = t.controllerHideN_img;
            this.controllerHideS_img = t.controllerHideS_img;
            this.controllerShowN_img = t.controllerShowN_img;
            this.controllerShowS_img = t.controllerShowS_img;
            this.fullScreenNormalN_img = t.controllerFullScreenNormalN_img;
            this.fullScreenNormalS_img = t.controllerFullScreenNormalS_img;
            this.fullScreenFullN_img = t.controllerFullScreenFullN_img;
            this.fullScreenFullS_img = t.controllerFullScreenFullS_img;
            this.zoomInN_img = t.zoomInN_img;
            this.zoomInS_img = t.zoomInS_img;
            this.zoomOutN_img = t.zoomOutN_img;
            this.zoomOutS_img = t.zoomOutS_img;
            this.scrollBarHandlerN_img = t.scrollBarHandlerN_img;
            this.scrollBarHandlerS_img = t.scrollBarHandlerS_img;
            this.scrollBarLeft_img = t.scrollBarLeft_img;
            this.scrollBarRight_img = t.scrollBarRight_img;
            this.toolTipLeft_img = t.toolTipLeft_img;
            this.toolTipPointer_img = t.toolTipPointer_img;
            this.hider = null;
            this.mainHolder_do = null;
            this.backgroundLeft_sdo = null;
            this.backgroundMiddle_sdo = null;
            this.backgroundRight_sdo = null;
            this.moveDownButton_do = null;
            this.moveUpButton_do = null;
            this.moveRightButton_do = null;
            this.moveLeftButton_do = null;
            this.hideOrShowMarkersButton_do = null;
            this.infoButton_do = null;
            this.hideShowControllerButton_do = null;
            this.fullScreenButton_do = null;
            this.zoomIn_do = null;
            this.zoomOut_do = null;
            this.scrollBar_do = null;
            this.scrollBarLeft_sdo = null;
            this.scrollBarRight_sdo = null;
            this.scrollBarMiddle_sdo = null;
            this.scrollBarHandler_do = null;
            this.scrollBarHandlerN_sdo = null;
            this.scrollBarHandlerS_sdo = null;
            this.moveDownButtonTooTipLabel_do = null;
            this.scrollBarHandlerToolTip_do = null;
            this.moveUpButtonToolTip_do = null;
            this.nextButtonToolTip_do = null;
            this.moveLeftButtonToolTip_do = null;
            this.hideOrShowMarkersToolTip_do = null;
            this.infoToolTip_do = null;
            this.hideOrShowControllerToolTip_do = null;
            this.fullscreenToolTip_do = null;
            this.backgroundMiddlePath_str = t.controllerBackgroundMiddlePath_str;
            this.scrollBarMiddlePath_str = t.scrollBarMiddlePath_str;
            this.draggingMode_str = t.startDraggingMode_str;
            this.controllerPosition_str = t.controllerPosition_str;
            this.buttonToolTipLeft_str = t.buttonToolTipLeft_str;
            this.buttonToolTipMiddle_str = t.buttonToolTipMiddle_str;
            this.buttonToolTipRight_str = t.buttonToolTipRight_str;
            this.link_str = t.link_str;
            this.buttonToolTipFontColor_str = t.buttonToolTipFontColor_str;
            this.buttonToolTipBottomPointer_str = t.buttonToolTipBottomPointer_str;
            this.buttonToolTipTopPointer_str = t.buttonToolTipTopPointer_str;
            this.scrollBarPosition = FWDUtils.indexOfArray(r.buttonsTest_ar, "scrollbar");
            this.controllerBackgroundOpacity = t.controllerBackgroundOpacity;
            this.panSpeed = t.buttonsPanSpeed;
            this.slideShowDelay = t.slideShowDelay;
            this.stageWidth;
            this.setHeight;
            this.controllerOffsetY = t.controllerOffsetY;
            this.scrollBarOffsetX = t.scrollBarOffsetX;
            this.scrollBarRightPartWidth = r.scrollBarRight_img.width;
            this.startSpaceBetweenButtons = t.startSpaceBetweenButtons;
            this.scrollBarHeight = r.scrollBarLeft_img.height;
            this.scrollBarHandlerWidth = r.scrollBarHandlerN_img.width;
            this.scrollBarHandlerHeight = r.scrollBarHandlerN_img.height;
            this.spaceBetweenButtons = t.spaceBetweenButtons;
            this.curHeight = r.backgroundLeft_img.height;
            this.zoomButtonWidth = r.zoomOutN_img.width;
            this.zoomButtonHeight = r.zoomOutN_img.height;
            this.finalHandlerX;
            this.startSpaceForScrollBarButtons = t.startSpaceForScrollBarButtons;
            this.smallSpaceForScrollBar = t.startSpaceForScrollBar;
            this.totalLargeButtons;
            this.curWidth;
            this.maxWidth = t.controllerMaxWidth;
            this.minWidth;
            this.buttonWidth = r.downN_img.width;
            this.buttonHeight = r.downN_img.height;
            this.scrollBarTotalWidth;
            this.scrollBarHandlerXPositionOnPress;
            this.lastPresedX;
            this.scrollBarHandlerToolTipOffsetY = t.scrollBarHandlerToolTipOffsetY;
            this.zoomInAndOutToolTipOffsetY = t.zoomInAndOutToolTipOffsetY;
            this.buttonsToolTipOffsetY = t.buttonsToolTipOffsetY;
            this.hideControllerOffsetY = t.hideControllerOffsetY;
            this.panImageId_int;
            this.zoomWithButtonsId_int;
            this.slideShowId_int;
            this.gotoImageId_to;
            this.zoomWithButtonsId_to;
            this.showId_to;
            this.disableForAWhileHideOrShowControllerToolTipId_to;
            this.showScrollBar_bl = false;
            if (FWDUtils.indexOfArray(r.buttonsTest_ar, "scrollbar") != -1) r.showScrollBar_bl = true;
            this.isMobile_bl = t.isMobile_bl;
            this.inverseNextAndPrevRotation_bl = t.inverseNextAndPrevRotation_bl;
            this.addKeyboardSupport_bl = t.addKeyboardSupport_bl;
            this.isScrollBarActive_bl = false;
            this.isZoomInOrOutPressed_bl = false;
            this.isHiddenForGood_bl = false;
            this.disableHideOrShowControllerToolTip_bl = false;
            this.showButtonsLabels_bl = Boolean(r.buttonsLabels_ar);
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            r.init = function () {
                r.setOverflow("visible");
                r.setSelectable(false);
                r.setupMainHolder();
                r.setupBackground();
                r.setupButtons();
                if (r.addKeyboardSupport_bl) r.addKeyboardSupport();
                r.totalLargeButtons = r.buttons_ar.lenght;
                if (r.showScrollBar_bl) r.setupScrollBar();
                if (r.buttonsTest_ar.length == 0 && !r.showScrollBar_bl) r.setVisible(false);
                r.hide();
                r.showId_to = setTimeout(r.show, 1e3);
                r.screen.onmousedown = function () {
                    r.dispatchEvent(e.MOUSE_DOWN)
                }
            };
            r.resizeAndPosition = function () {
                if (n.stageWidth == r.stageWidth && n.stageHeight == r.stageHeight) return;
                r.stageWidth = n.stageWidth;
                r.stageHeight = n.stageHeight;
                r.positionButtons()
            };
            r.setupMainHolder = function () {
                r.mainHolder_do = new FWDDisplayObject("div");
                r.mainHolder_do.setOverflow("visible");
                r.addChild(r.mainHolder_do)
            };
            r.setupHider = function (e) {
                r.hider = e;
                r.hider.addListener(FWDHider.SHOW, r.onHiderShow);
                r.hider.addListener(FWDHider.HIDE, r.onHiderHide)
            };
            r.onHiderShow = function () {
                if (r.isHiddenForGood_bl) return;
                r.show()
            };
            r.onHiderHide = function () {
                if (r.isHiddenForGood_bl) return;
                if (FWDUtils.hitTest(r.mainHolder_do.screen, r.hider.globalX, r.hider.globalY)) {
                    r.hider.reset();
                    return
                } else {
                    r.hide(true)
                }
            };
            r.setupButtons = function () {
                var e = r.buttonsTest_ar.length;
                var t;
                var i = "";
                var s = "";
                for (var o = 0; o < e; o++) {
                    t = r.buttonsTest_ar[o];
                    if (t == "movedown") {
                        if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                        r.setupDownButton(i);
                        r.buttons_ar.push(r.moveDownButton_do)
                    } else if (t == "moveup") {
                        if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                        r.setupUpButton(i);
                        r.buttons_ar.push(r.moveUpButton_do)
                    } else if (t == "moveright") {
                        if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                        r.setupMoveRightButton(i);
                        r.buttons_ar.push(r.moveRightButton_do)
                    } else if (t == "moveleft") {
                        if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                        r.setupMoveLeftButton(i);
                        r.buttons_ar.push(r.moveLeftButton_do)
                    } else if (t == "hideorshowmarkers") {
                        if (r.showButtonsLabels_bl) {
                            var u = r.buttonsLabels_ar[o];
                            if (u) {
                                if (u.indexOf("/") == -1) {
                                    i = "tooltip is not defined!";
                                    s = "tooltip is not defined!"
                                } else {
                                    i = u.substr(0, u.indexOf("/"));
                                    s = u.substr(u.indexOf("/") + 1)
                                }
                            } else {
                                i = "tooltip is not defined!";
                                s = "tooltip is not defined!"
                            }
                        }
                        r.setupHideOrShowMarkersButton(i, s);
                        r.buttons_ar.push(r.hideOrShowMarkersButton_do)
                    } else if (t == "info") {
                        if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                        r.setupInfoButton(i);
                        r.buttons_ar.push(r.infoButton_do)
                    } else if (t == "hideorshowcontroller") {
                        if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                        if (r.showButtonsLabels_bl) {
                            var u = r.buttonsLabels_ar[o];
                            if (u) {
                                if (u.indexOf("/") == -1) {
                                    i = "tooltip is not defined!";
                                    s = "tooltip is not defined!"
                                } else {
                                    i = u.substr(0, u.indexOf("/"));
                                    s = u.substr(u.indexOf("/") + 1)
                                }
                            } else {
                                i = "tooltip is not defined!";
                                s = "tooltip is not defined!"
                            }
                        }
                        r.setupHideOrShowController(i, s);
                        r.buttons_ar.push(r.hideShowControllerButton_do)
                    } else if (t == "fullscreen") {
                        if (!(n.displayType == FWDMegazoom.FULL_SCREEN && !FWDUtils.hasFullScreen)) {
                            if (r.showButtonsLabels_bl) {
                                var u = r.buttonsLabels_ar[o];
                                if (u) {
                                    if (u.indexOf("/") == -1) {
                                        i = "tooltip is not defined!";
                                        s = "tooltip is not defined!"
                                    } else {
                                        i = u.substr(0, u.indexOf("/"));
                                        s = u.substr(u.indexOf("/") + 1)
                                    }
                                } else {
                                    i = "tooltip is not defined!";
                                    s = "tooltip is not defined!"
                                }
                            }
                            r.setupFullScreenButton(i, s);
                            r.buttons_ar.push(r.fullScreenButton_do)
                        }
                    }
                }
            };
            r.positionButtons = function () {
                var t = r.buttons_ar.length;
                var n = r.spaceBetweenButtons;
                var i;
                var s;
                var o;
                var u;
                var a;
                var f;
                var l;
                var c;
                if (r.showScrollBar_bl) {
                    r.isScrollBarActive_bl = true;
                    r.curWidth = r.stageWidth;
                    c = FWDUtils.indexOfArray(r.buttons_ar, r.zoomIn_do);
                    if (c != -1) {
                        r.buttons_ar.splice(c, 1);
                        t--
                    }
                    c = FWDUtils.indexOfArray(r.buttons_ar, r.zoomOut_do);
                    if (c != -1) {
                        r.buttons_ar.splice(c, 1);
                        t--
                    }
                    if (r.scrollBarPosition > t) r.scrollBarPosition = t;
                    if (r.scrollBarPosition < 0) r.scrollBarPosition = 0;
                    if (r.curWidth > r.maxWidth) r.curWidth = r.maxWidth;
                    if (t == 0) {
                        r.scrollBarTotalWidth = r.startSpaceBetweenButtons * 2 + r.startSpaceForScrollBarButtons * 2 + r.smallSpaceForScrollBar * 2 + r.zoomButtonWidth * 2
                    } else if (t > 1 && r.scrollBarPosition != 0 && r.scrollBarPosition != t) {
                        r.scrollBarTotalWidth = r.startSpaceBetweenButtons * 2 + t * r.buttonWidth + r.spaceBetweenButtons * (t - 2) + r.startSpaceForScrollBarButtons * 2 + r.smallSpaceForScrollBar * 2 + r.zoomButtonWidth * 2
                    } else if (t > 1 && (r.scrollBarPosition == 0 || r.scrollBarPosition == t)) {
                        r.scrollBarTotalWidth = r.startSpaceBetweenButtons * 3 + t * r.buttonWidth + r.spaceBetweenButtons * (t - 1) + r.startSpaceForScrollBarButtons * 2 + r.smallSpaceForScrollBar * 2 + r.zoomButtonWidth * 2
                    } else {
                        r.scrollBarTotalWidth = r.startSpaceBetweenButtons * 2 + t * r.buttonWidth + r.startSpaceForScrollBarButtons * 2 + r.smallSpaceForScrollBar * 2 + r.zoomButtonWidth * 2
                    }
                    r.scrollBarTotalWidth = r.curWidth - r.scrollBarTotalWidth;
                    if (r.scrollBarTotalWidth < 100) r.isScrollBarActive_bl = false
                }
                if (r.isScrollBarActive_bl) {
                    r.scrollBar_do.setVisible(true);
                    for (var h = 0; h < r.scrollBarPosition; h++) {
                        l = r.buttons_ar[h];
                        if (l) {
                            l = r.buttons_ar[h];
                            a = r.startSpaceBetweenButtons + h * (n + r.buttonWidth);
                            f = parseInt((r.curHeight - r.buttonHeight) / 2);
                            if (l != r.hideShowControllerButton_do) {
                                l.setX(a);
                                l.setY(f)
                            } else {
                                l.finalX = a;
                                l.finalY = f
                            }
                        }
                    }
                    for (var h = t + 1; h >= r.scrollBarPosition; h--) {
                        l = r.buttons_ar[h];
                        if (l) {
                            l = r.buttons_ar[h];
                            a = r.curWidth - r.startSpaceBetweenButtons - r.buttonWidth - Math.abs(h - t + 1) * (n + r.buttonWidth);
                            f = parseInt((r.curHeight - r.buttonHeight) / 2);
                            if (l != r.hideShowControllerButton_do) {
                                l.setX(a);
                                l.setY(f)
                            } else {
                                l.finalX = a;
                                l.finalY = f
                            }
                        }
                    }
                    if (t == 0) {
                        u = r.startSpaceForScrollBarButtons + r.startSpaceBetweenButtons
                    } else if (t > 1 && r.scrollBarPosition != 0 && r.scrollBarPosition != t) {
                        u = r.buttons_ar[r.scrollBarPosition - 1].getX() + r.buttonWidth + r.startSpaceForScrollBarButtons
                    } else if (t > 1 && r.scrollBarPosition == 0) {
                        u = r.startSpaceBetweenButtons + r.startSpaceForScrollBarButtons
                    } else if (t > 1 && r.scrollBarPosition == t) {
                        u = r.buttons_ar[r.scrollBarPosition - 1].getX() + r.buttonWidth + r.startSpaceForScrollBarButtons + r.startSpaceBetweenButtons
                    } else if (t == 1 && r.scrollBarPosition > 0) {
                        u = r.startSpaceBetweenButtons + r.buttonWidth + r.startSpaceForScrollBarButtons
                    } else if (t == 1 && r.scrollBarPosition == 0) {
                        u = r.startSpaceForScrollBarButtons + r.startSpaceBetweenButtons
                    }
                    u += r.scrollBarOffsetX;
                    r.zoomOut_do.setX(u);
                    r.zoomOut_do.setY(parseInt((r.curHeight - r.zoomButtonHeight) / 2));
                    r.zoomIn_do.setX(r.zoomOut_do.getX() + r.zoomButtonWidth + r.smallSpaceForScrollBar * 2 + r.scrollBarTotalWidth);
                    r.zoomIn_do.setY(parseInt((r.curHeight - r.zoomButtonHeight) / 2));
                    r.scrollBar_do.setX(r.zoomOut_do.getX() + r.smallSpaceForScrollBar + r.zoomButtonWidth);
                    r.scrollBar_do.setY(parseInt((r.curHeight - r.scrollBarHeight) / 2) + 1);
                    r.scrollBar_do.setWidth(r.scrollBarTotalWidth);
                    r.scrollBarMiddle_do.setX(r.scrollBarRightPartWidth - 1);
                    r.scrollBarMiddle_do.setWidth(r.scrollBarTotalWidth - r.scrollBarRightPartWidth * 2 + 2);
                    r.scrollBarRight_do.setX(r.scrollBarTotalWidth - r.scrollBarRightPartWidth)
                } else {
                    if (r.showScrollBar_bl) {
                        r.scrollBar_do.setVisible(false);
                        if (FWDUtils.indexOfArray(r.buttons_ar, r.zoomIn_do) == -1) {
                            c = r.scrollBarPosition;
                            r.buttons_ar.splice(c, 0, r.zoomIn_do);
                            r.buttons_ar.splice(c, 0, r.zoomOut_do)
                        }
                        t = r.buttons_ar.length
                    }
                    r.minWidth = t * r.buttonWidth + r.startSpaceBetweenButtons * 2 + r.spaceBetweenButtons * t - r.spaceBetweenButtons;
                    if (r.minWidth > r.stageWidth) {
                        r.minWidth = r.stageWidth;
                        if (r.minWidth < 320) r.minWidth = 320;
                        s = r.buttonWidth * t;
                        n = (r.minWidth - r.startSpaceBetweenButtons * 2 - s) / (t - 1)
                    }
                    r.curWidth = r.minWidth;
                    for (var h = 0; h < t + 2; h++) {
                        l = r.buttons_ar[h];
                        if (l) {
                            a = r.startSpaceBetweenButtons + h * (n + r.buttonWidth);
                            f = parseInt((r.curHeight - r.buttonHeight) / 2);
                            if (l == r.zoomIn_do) {
                                a = a + parseInt((r.buttonWidth - r.zoomButtonWidth) / 2) - 2;
                                f = parseInt((r.curHeight - r.zoomButtonHeight) / 2)
                            } else if (l == r.zoomOut_do) {
                                a = a + parseInt((r.buttonWidth - r.zoomButtonWidth) / 2) + 2;
                                f = parseInt((r.curHeight - r.zoomButtonHeight) / 2)
                            }
                            if (l != r.hideShowControllerButton_do) {
                                l.setX(a);
                                l.setY(f)
                            } else {
                                l.finalX = a;
                                l.finalY = f
                            }
                        }
                    }
                }
                r.backgroundRight_sdo.setX(r.curWidth - r.backgroundRight_sdo.getWidth());
                r.backgroundMiddle_sdo.setX(r.backgroundLeft_sdo.getWidth());
                r.backgroundMiddle_sdo.setWidth(r.curWidth - r.backgroundLeft_sdo.getWidth() * 2);
                r.backgroundMiddle_sdo.setHeight(r.curHeight);
                r.mainHolder_do.setWidth(r.curWidth);
                r.mainHolder_do.setHeight(r.curHeight);
                if (r.controllerPosition_str == e.POSITION_TOP) {
                    r.mainHolder_do.setX(Math.round((r.stageWidth - r.curWidth) / 2));
                    r.setY(r.controllerOffsetY)
                } else {
                    r.mainHolder_do.setX(Math.round((r.stageWidth - r.curWidth) / 2));
                    r.setY(r.stageHeight - r.curHeight - r.controllerOffsetY)
                }
                a = r.curWidth - r.startSpaceBetweenButtons - r.buttonWidth - Math.abs(h - t + 1) * (n + r.buttonWidth);
                f = parseInt((r.curHeight - r.buttonHeight) / 2);
                if (r.hideShowControllerButton_do) r.positionHideOrShowControllerButton(false)
            };
            this.positionHideOrShowControllerButton = function (t) {
                var n;
                var i;
                if (r.controllerPosition_str == e.POSITION_TOP) {
                    if (r.isHiddenForGood_bl) {
                        n = Math.round((r.curWidth - r.buttonWidth) / 2);
                        i = r.curHeight
                    } else {
                        n = r.hideShowControllerButton_do.finalX;
                        i = r.hideShowControllerButton_do.finalY
                    }
                } else {
                    if (r.isHiddenForGood_bl) {
                        n = Math.round((r.curWidth - r.buttonWidth) / 2);
                        i = -r.buttonHeight - 2
                    } else {
                        n = r.hideShowControllerButton_do.finalX;
                        i = r.hideShowControllerButton_do.finalY
                    }
                }
                TweenMax.killTweensOf(r.hideShowControllerButton_do);
                if (t) {
                    TweenMax.to(r.hideShowControllerButton_do, .8, {
                        x: n,
                        y: i,
                        ease: Expo.easeInOut
                    })
                } else {
                    r.hideShowControllerButton_do.setX(n);
                    r.hideShowControllerButton_do.setY(i)
                }
            };
            r.setupBackground = function () {
                r.backgroundLeft_sdo = new FWDSimpleDisplayObject("img");
                r.backgroundLeft_sdo.setScreen(r.backgroundLeft_img);
                if (r.controllerBackgroundOpacity != 1) r.backgroundLeft_sdo.setAlpha(r.controllerBackgroundOpacity);
                var e = new Image;
                e.src = r.backgroundMiddlePath_str;
                if (r.isMobile_bl) {
                    r.backgroundMiddle_sdo = new FWDSimpleDisplayObject("div");
                    r.backgroundMiddle_sdo.getStyle().background = "url('" + t.controllerBackgroundMiddlePath_str + "') repeat-x"
                } else {
                    r.backgroundMiddle_sdo = new FWDSimpleDisplayObject("img");
                    r.backgroundMiddle_sdo.setScreen(e)
                }
                if (r.controllerBackgroundOpacity != 1) r.backgroundMiddle_sdo.setAlpha(r.controllerBackgroundOpacity);
                r.backgroundRight_sdo = new FWDSimpleDisplayObject("img");
                r.backgroundRight_sdo.setScreen(r.backgroundRight_img);
                if (r.controllerBackgroundOpacity != 1) r.backgroundRight_sdo.setAlpha(r.controllerBackgroundOpacity);
                r.mainHolder_do.addChild(r.backgroundLeft_sdo);
                r.mainHolder_do.addChild(r.backgroundRight_sdo);
                r.mainHolder_do.addChild(r.backgroundMiddle_sdo)
            };
            r.setupDownButton = function (e) {
                FWDSimpleButton.setPrototype();
                r.moveDownButton_do = new FWDSimpleButton(r.downN_img, r.downS_img, r.downD_img, r.isMobile_bl);
                r.moveDownButton_do.addListener(FWDSimpleButton.MOUSE_OVER, r.moveDownOnMouseOverHandler);
                r.moveDownButton_do.addListener(FWDSimpleButton.MOUSE_OUT, r.moveDownButtonOnMouseOutHandler);
                r.moveDownButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.moveDownButtonStartHandler);
                r.moveDownButton_do.disable();
                r.mainHolder_do.addChild(r.moveDownButton_do);
                if (r.showButtonsLabels_bl) {
                    FWDButtonToolTip.setPrototype();
                    r.moveDownButtonTooTipLabel_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.moveDownButtonTooTipLabel_do)
                }
            };
            r.moveDownOnMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) r.showToolTipButton(r.moveDownButton_do, r.moveDownButtonTooTipLabel_do, r.buttonsToolTipOffsetY)
            };
            r.moveDownButtonOnMouseOutHandler = function (e) {
                if (r.showButtonsLabels_bl) r.moveDownButtonTooTipLabel_do.hide(true)
            };
            r.moveDownButtonStartHandler = function (t) {
                var t = t.e == undefined ? t : t.e;
                if (t.touches) {
                    if (r.scrollBarHandler_do) {
                        r.zoomInWithButtonsEndHandler(t);
                        r.zoomOutWithButtonsEndHandler(t);
                        r.handlerDragEndHandler(t)
                    }
                }
                clearInterval(r.panImageId_int);
                r.moveDownImageInWithDelay();
                r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerUp", r.panEndHandler)
                    } else {
                        window.addEventListener("touchend", r.panEndHandler)
                    }
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("mouseup", r.panEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmouseup", r.panEndHandler)
                    }
                }
            };
            r.moveDownImageInWithDelay = function () {
                r.panImageId_int = setInterval(r.panDown, 16)
            };
            r.panDown = function () {
                r.dispatchEvent(e.PAN, {
                    dir: "down"
                })
            };
            r.setupUpButton = function (e) {
                FWDSimpleButton.setPrototype();
                r.moveUpButton_do = new FWDSimpleButton(r.upN_img, r.upS_img, r.upD_img, r.isMobile_bl);
                r.moveUpButton_do.addListener(FWDSimpleButton.MOUSE_OVER, r.moveUpOnMouseOverHandler);
                r.moveUpButton_do.addListener(FWDSimpleButton.MOUSE_OUT, r.moveUpButtonOnMouseOutHandler);
                r.moveUpButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.moveUpButtonStartHandler);
                r.moveUpButton_do.disable();
                r.mainHolder_do.addChild(r.moveUpButton_do);
                if (r.showButtonsLabels_bl) {
                    FWDButtonToolTip.setPrototype();
                    r.moveUpButtonTooTipLabel_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.moveUpButtonTooTipLabel_do)
                }
            };
            r.moveUpOnMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) r.showToolTipButton(r.moveUpButton_do, r.moveUpButtonTooTipLabel_do, r.buttonsToolTipOffsetY)
            };
            r.moveUpButtonOnMouseOutHandler = function (e) {
                if (r.showButtonsLabels_bl) r.moveUpButtonTooTipLabel_do.hide(true)
            };
            r.moveUpButtonStartHandler = function (t) {
                var t = t.e == undefined ? t : t.e;
                if (t.touches) {
                    if (r.scrollBarHandler_do) {
                        r.zoomInWithButtonsEndHandler(t);
                        r.zoomOutWithButtonsEndHandler(t);
                        r.handlerDragEndHandler(t)
                    }
                }
                clearInterval(r.panImageId_int);
                r.moveUpImageInWithDelay();
                r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerUp", r.panEndHandler)
                    } else {
                        window.addEventListener("touchend", r.panEndHandler)
                    }
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("mouseup", r.panEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmouseup", r.panEndHandler)
                    }
                }
            };
            r.moveUpImageInWithDelay = function () {
                r.panImageId_int = setInterval(r.panUp, 16)
            };
            r.panUp = function () {
                r.dispatchEvent(e.PAN, {
                    dir: "up"
                })
            };
            r.setupMoveRightButton = function (e) {
                FWDSimpleButton.setPrototype();
                r.moveRightButton_do = new FWDSimpleButton(r.nextN_img, r.nextS_img, r.nextD_img, r.isMobile_bl);
                r.moveRightButton_do.addListener(FWDSimpleButton.MOUSE_OVER, r.moveRightOnMouseOverHandler);
                r.moveRightButton_do.addListener(FWDSimpleButton.MOUSE_OUT, r.moveRightButtonOnMouseOutHandler);
                r.moveRightButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.moveRightButtonStartHandler);
                r.moveRightButton_do.disable();
                r.mainHolder_do.addChild(r.moveRightButton_do);
                if (r.showButtonsLabels_bl) {
                    FWDButtonToolTip.setPrototype();
                    r.nextButtonToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.nextButtonToolTip_do)
                }
            };
            r.moveRightOnMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) r.showToolTipButton(r.moveRightButton_do, r.nextButtonToolTip_do, r.buttonsToolTipOffsetY)
            };
            r.moveRightButtonOnMouseOutHandler = function (e) {
                if (r.showButtonsLabels_bl) r.nextButtonToolTip_do.hide(true)
            };
            r.moveRightButtonStartHandler = function (t) {
                var t = t.e == undefined ? t : t.e;
                if (t.touches) {
                    if (r.scrollBarHandler_do) {
                        r.zoomInWithButtonsEndHandler(t);
                        r.zoomOutWithButtonsEndHandler(t);
                        r.handlerDragEndHandler(t)
                    }
                }
                clearInterval(r.panImageId_int);
                r.moveRightImageInWithDelay();
                r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerUp", r.panEndHandler)
                    } else {
                        window.addEventListener("touchend", r.panEndHandler)
                    }
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("mouseup", r.panEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmouseup", r.panEndHandler)
                    }
                }
            };
            r.panEndHandler = function () {
                clearInterval(r.panImageId_int);
                clearTimeout(r.gotoImageId_to);

                r.dispatchEvent(e.ENABLE_PAN_OR_MOVE);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.removeEventListener("MSPointerUp", r.panEndHandler)
                    } else {
                        window.removeEventListener("touchend", r.panEndHandler)
                    }
                } else {
                    if (window.removeEventListener) {
                        window.removeEventListener("mouseup", r.panEndHandler)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmouseup", r.panEndHandler)
                    }
                }
            };
            r.moveRightImageInWithDelay = function () {
                r.panImageId_int = setInterval(r.panRight, 16)
            };
            r.panRight = function () {
                r.dispatchEvent(e.PAN, {
                    dir: "right"
                })
            };
            r.setupMoveLeftButton = function (e) {
                FWDSimpleButton.setPrototype();
                r.moveLeftButton_do = new FWDSimpleButton(r.prevN_img, r.prevS_img, r.prevD_img, r.isMobile_bl);
                r.moveLeftButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.moveLeftButtonOnMouseOverHandler);
                r.moveLeftButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.moveLeftButtonOnMouseOutHandler);
                r.moveLeftButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.moveLeftButtonStartHandler);
                r.moveLeftButton_do.disable();
                r.mainHolder_do.addChild(r.moveLeftButton_do);
                if (r.showButtonsLabels_bl) {
                    FWDButtonToolTip.setPrototype();
                    r.moveLeftButtonToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.moveLeftButtonToolTip_do)
                }
            };
            r.moveLeftButtonOnMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) r.showToolTipButton(r.moveLeftButton_do, r.moveLeftButtonToolTip_do, r.buttonsToolTipOffsetY)
            };
            r.moveLeftButtonOnMouseOutHandler = function (e) {
                if (r.showButtonsLabels_bl) r.moveLeftButtonToolTip_do.hide(true)
            };
            r.moveLeftButtonStartHandler = function (t) {
                var t = t.e == undefined ? t : t.e;
                if (t.touches) {
                    if (r.scrollBarHandler_do) {
                        r.zoomInWithButtonsEndHandler(t);
                        r.zoomOutWithButtonsEndHandler(t);
                        r.handlerDragEndHandler(t)
                    }
                }
                clearInterval(r.panImageId_int);
                r.moveLeftImageInWithDelay();
                r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerUp", r.panEndHandler)
                    } else {
                        window.addEventListener("touchend", r.panEndHandler)
                    }
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("mouseup", r.panEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmouseup", r.panEndHandler)
                    }
                }
            };
            r.moveLeftImageInWithDelay = function () {
                r.panImageId_int = setInterval(r.panLeft, 16)
            };
            r.panLeft = function () {
                r.dispatchEvent(e.PAN, {
                    dir: "left"
                })
            };
            r.setupHideOrShowMarkersButton = function (e, t) {
                FWDComplexButton.setPrototype();
                r.hideOrShowMarkersButton_do = new FWDComplexButton(r.controllerHideMarkersN_img, r.controllerHideMarkersS_img, r.controllerShowMarkersN_img, r.controllerShowMarkersS_img, true);
                r.hideOrShowMarkersButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.hideOrShowButtonOnMouseOverHandler);
                r.hideOrShowMarkersButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.hideOrShowButtonOnMouseOutHandler);
                r.hideOrShowMarkersButton_do.addListener(FWDComplexButton.MOUSE_DOWN, r.hideOrShowButtonStartHandler);
                r.mainHolder_do.addChild(r.hideOrShowMarkersButton_do);
                if (r.showButtonsLabels_bl) {
                    FWDButtonToolTip.setPrototype();
                    r.hideOrShowMarkersToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, t, r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.hideOrShowMarkersToolTip_do)
                }
            };
            r.hideOrShowButtonOnMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) r.showToolTipButton(r.hideOrShowMarkersButton_do, r.hideOrShowMarkersToolTip_do, r.buttonsToolTipOffsetY)
            };
            r.hideOrShowButtonOnMouseOutHandler = function (e) {
                if (r.showButtonsLabels_bl) r.hideOrShowMarkersToolTip_do.hide(true)
            };
            r.hideOrShowButtonStartHandler = function (t) {
                if (r.showButtonsLabels_bl) r.hideOrShowMarkersToolTip_do.hide();
                if (r.hideOrShowMarkersButton_do.currentState == 1) {
                    r.dispatchEvent(e.HIDE_MARKERS)
                } else {
                    r.dispatchEvent(e.SHOW_MARKERS)
                }
            };
            this.setHideOrShowButtonAndToolTipState = function (e) {
                if (e == 1) {
                    r.hideOrShowMarkersButton_do.setButtonState(0);
                    if (r.showButtonsLabels_bl) r.hideOrShowMarkersToolTip_do.setLabel(r.hideOrShowMarkersToolTip_do.toolTipLabel2_str)
                } else {
                    r.hideOrShowMarkersButton_do.setButtonState(1);
                    if (r.showButtonsLabels_bl) r.hideOrShowMarkersToolTip_do.setLabel(r.hideOrShowMarkersToolTip_do.toolTipLabel_str)
                }
            };
            r.setupInfoButton = function (e) {
                FWDSimpleButton.setPrototype();
                r.infoButton_do = new FWDSimpleButton(r.infoN_img, r.infoS_img, null, r.isMobile_bl);
                r.infoButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.infoButtonOnMouseOverHandler);
                r.infoButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.infoButtonOnMouseOutHandler);
                r.infoButton_do.addListener(FWDComplexButton.MOUSE_DOWN, r.infoButtonStartHandler);
                r.mainHolder_do.addChild(r.infoButton_do);
                if (r.showButtonsLabels_bl) {
                    FWDButtonToolTip.setPrototype();
                    r.infoToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.infoToolTip_do)
                }
            };
            r.infoButtonOnMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) r.showToolTipButton(r.infoButton_do, r.infoToolTip_do, r.buttonsToolTipOffsetY)
            };
            r.infoButtonOnMouseOutHandler = function (e) {
                if (r.showButtonsLabels_bl) r.infoToolTip_do.hide(true)
            };
            r.infoButtonStartHandler = function (t) {
                r.dispatchEvent(e.SHOW_INFO)
            };
            r.setupHideOrShowController = function (e, t) {
                FWDComplexButton.setPrototype();
                r.hideShowControllerButton_do = new FWDComplexButton(r.controllerHideN_img, r.controllerHideS_img, r.controllerShowN_img, r.controllerShowS_img, true);
                r.hideShowControllerButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.linkButtonOnMouseOverHandler);
                r.hideShowControllerButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.linkButtonOnMouseOutHandler);
                r.hideShowControllerButton_do.addListener(FWDComplexButton.MOUSE_DOWN, r.hideOrShowControllerStartHandler);
                r.mainHolder_do.addChild(r.hideShowControllerButton_do);
                if (r.showButtonsLabels_bl) {
                    FWDButtonToolTip.setPrototype();
                    r.hideOrShowControllerToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, t, r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.hideOrShowControllerToolTip_do);
                    r.hideOrShowControllerToolTip_do.getStyle().zIndex = 100
                }
            };
            r.linkButtonOnMouseOverHandler = function (e) {
                if (r.disableHideOrShowControllerToolTip_bl) return;
                if (r.showButtonsLabels_bl) r.showToolTipButton(r.hideShowControllerButton_do, r.hideOrShowControllerToolTip_do, r.buttonsToolTipOffsetY)
            };
            r.linkButtonOnMouseOutHandler = function (e) {
                if (r.disableHideOrShowControllerToolTip_bl) return;
                if (r.showButtonsLabels_bl) r.hideOrShowControllerToolTip_do.hide(true)
            };
            r.hideOrShowControllerStartHandler = function (t) {
                if (r.disableHideOrShowControllerToolTip_bl) return;
                if (r.hider) r.hider.reset();
                if (r.showButtonsLabels_bl) r.hideOrShowControllerToolTip_do.hide();
                r.hideShowControllerButton_do.isDisabled_bl = true;
                setTimeout(function () {
                    if (r == null) return;
                    if (!r.isMobile_bl) r.hideShowControllerButton_do.setNormalState();
                    r.hideShowControllerButton_do.isDisabled_bl = false
                }, 400);
                r.disableHideOrShowControllerToolTip_bl = true;
                clearTimeout(r.disableForAWhileHideOrShowControllerToolTipId_to);
                r.disableForAWhileHideOrShowControllerToolTipId_to = setTimeout(function () {
                    r.disableHideOrShowControllerToolTip_bl = false
                }, 400);
                if (r.hideShowControllerButton_do.currentState == 1) {
                    r.setHideOrShowControllerAndToolTipState(1);
                    r.dispatchEvent(e.HIDE_CONTROLLER)
                } else {
                    r.setHideOrShowControllerAndToolTipState(0);
                    r.dispatchEvent(e.SHOW_CONTROLLER)
                }
            };
            this.setHideOrShowControllerAndToolTipState = function (e) {
                if (e == 1) {
                    r.isHiddenForGood_bl = true;
                    r.hideShowControllerButton_do.setButtonState(0);
                    if (r.showButtonsLabels_bl) r.hideOrShowControllerToolTip_do.setLabel(r.hideOrShowControllerToolTip_do.toolTipLabel2_str);
                    r.hide(true)
                } else {
                    r.isHiddenForGood_bl = false;
                    r.hideShowControllerButton_do.setButtonState(1);
                    if (r.showButtonsLabels_bl) r.hideOrShowControllerToolTip_do.setLabel(r.hideOrShowControllerToolTip_do.toolTipLabel_str);
                    r.show(true)
                }
                r.positionHideOrShowControllerButton(true)
            };
            r.setupFullScreenButton = function (e, t) {
                FWDComplexButton.setPrototype();
                r.fullScreenButton_do = new FWDComplexButton(r.fullScreenFullN_img, r.fullScreenFullS_img, r.fullScreenNormalN_img, r.fullScreenNormalS_img, true);
                r.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.fullscreenButtonOnMouseOverHandler);
                r.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.fullscreenButtonOnMouseOutHandler);
                r.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_DOWN, r.fullScreenButtonStartHandler);
                r.mainHolder_do.addChild(r.fullScreenButton_do);
                if (r.showButtonsLabels_bl) {
                    FWDButtonToolTip.setPrototype();
                    r.fullscreenToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, t, r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.fullscreenToolTip_do)
                }
            };
            r.fullscreenButtonOnMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) r.showToolTipButton(r.fullScreenButton_do, r.fullscreenToolTip_do, r.buttonsToolTipOffsetY)
            };
            r.fullscreenButtonOnMouseOutHandler = function (e) {
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.hide(true)
            };
            r.fullScreenButtonStartHandler = function (t) {
                if (r.fullScreenButton_do.currentState == 1) {
                    if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel2_str);
                    r.fullScreenButton_do.setButtonState(0);
                    r.dispatchEvent(e.GO_FULL_SCREEN)
                } else if (r.fullScreenButton_do.currentState == 0) {
                    if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel_str);
                    r.fullScreenButton_do.setButtonState(1);
                    r.dispatchEvent(e.GO_NORMAL_SCREEN)
                }
                setTimeout(function () {
                    if (r == null) return;
                    r.fullScreenButton_do.onMouseOut(t)
                }, 50)
            };
            r.setFullScreenButtonState = function (e) {
                if (e == 0) {
                    r.fullScreenButton_do.setButtonState(0);
                    if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel2_str)
                } else if (e == 1) {
                    r.fullScreenButton_do.setButtonState(1);
                    if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel_str)
                }
            };
            r.setupScrollBar = function () {
                var e;
                FWDSimpleButton.setPrototype();
                r.zoomIn_do = new FWDSimpleButton(r.zoomInN_img, r.zoomInS_img, null, r.isMobile_bl);
                r.zoomIn_do.addListener(FWDSimpleButton.MOUSE_OVER, r.zoomInMouseOverHandler);
                r.zoomIn_do.addListener(FWDSimpleButton.MOUSE_OUT, r.zoomInOrOutMouseOutHandler);
                r.zoomIn_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.zoomInStartHandler);
                r.mainHolder_do.addChild(r.zoomIn_do);
                FWDSimpleButton.setPrototype();
                r.zoomOut_do = new FWDSimpleButton(r.zoomOutN_img, r.zoomOutS_img, null, r.isMobile_bl);
                r.zoomOut_do.addListener(FWDSimpleButton.MOUSE_OVER, r.zoomOutMouseOverHandler);
                r.zoomOut_do.addListener(FWDSimpleButton.MOUSE_OUT, r.zoomInOrOutMouseOutHandler);
                r.zoomOut_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.zoomOutStartHandler);
                r.mainHolder_do.addChild(r.zoomOut_do);
                r.scrollBar_do = new FWDDisplayObject("div");
                r.scrollBar_do.setOverflow("visible");
                r.scrollBar_do.setHeight(r.scrollBarHeight);
                r.mainHolder_do.addChild(r.scrollBar_do);
                r.scrollBarLeft_do = new FWDSimpleDisplayObject("img");
                r.scrollBarLeft_do.setScreen(t.scrollBarLeft_img);
                r.scrollBar_do.addChild(r.scrollBarLeft_do);
                r.scrollBarMiddle_do = new FWDSimpleDisplayObject("div");
                r.scrollBarMiddle_do.setHeight(r.scrollBarHeight);
                r.scrollBarMiddle_do.getStyle().background = "url('" + r.scrollBarMiddlePath_str + "')";
                r.scrollBarMiddle_do.getStyle().backgroundRepeat = "repeat-x";
                r.scrollBar_do.addChild(r.scrollBarMiddle_do);
                r.scrollBarRight_do = new FWDSimpleDisplayObject("img");
                r.scrollBarRight_do.setScreen(r.scrollBarRight_img);
                r.scrollBar_do.addChild(r.scrollBarRight_do);
                FWDSimpleButton.setPrototype();
                r.scrollBarHandler_do = new FWDSimpleButton(r.scrollBarHandlerN_img, r.scrollBarHandlerS_img, null, r.isMobile_bl);
                r.scrollBarHandler_do.setY(parseInt((r.scrollBarHeight - r.scrollBarHandlerHeight) / 2) - 1);
                r.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_OVER, r.handlerOnMouseOver);
                r.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_OUT, r.handlerOnMouseOut);
                r.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.handlerDragStartHandler);
                r.scrollBar_do.addChild(r.scrollBarHandler_do);
                if (r.showButtonsLabels_bl) {
                    e = r.buttonsLabels_ar[r.scrollBarPosition] || "tooltip is not defined!";
                    FWDButtonToolTip.setPrototype();
                    r.scrollBarHandlerToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                    r.mainHolder_do.addChild(r.scrollBarHandlerToolTip_do)
                }
            };
            r.zoomInMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) {
                    r.scrollBarHandlerToolTip_do.show();
                    if (r.isScrollBarActive_bl) {
                        r.positionAndSetLabelScrollBarHandler()
                    } else {
                        if (!r.isScrollBarActive_bl && r.showButtonsLabels_bl) {
                            setTimeout(function () {
                                if (r == null) return;
                                var e = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                                r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(e * 100) + "%");
                                r.showZoomInOrOutToolTipButton(r.zoomIn_do, r.scrollBarHandlerToolTip_do, r.zoomInAndOutToolTipOffsetY)
                            }, 50)
                        }
                    }
                }
            };
            r.zoomInOrOutMouseOutHandler = function (e) {
                if (r.showButtonsLabels_bl) r.scrollBarHandlerToolTip_do.hide(true)
            };
            r.zoomInStartHandler = function (t) {
                t = t.e;
                if (t.touches) {
                    r.handlerDragEndHandler(t)
                }
                clearInterval(r.zoomWithButtonsId_int);
                clearTimeout(r.zoomWithButtonsId_to);
                r.zoomWithButtonsId_to = setTimeout(r.startZoomInWithDelay, 400);
                r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
                r.zoomInWithButtonsDispatchEvent(true);
                r.zoomIn_do.isSelectedFinal_bl = true;
                r.isZoomInOrOutPressed_bl = true;
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerUp", r.zoomInWithButtonsEndHandler)
                    } else {
                        window.addEventListener("touchend", r.zoomInWithButtonsEndHandler)
                    }
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("mouseup", r.zoomInWithButtonsEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmouseup", r.zoomInWithButtonsEndHandler)
                    }
                }
            };
            r.startZoomInWithDelay = function () {
                r.zoomWithButtonsId_int = setInterval(r.zoomInWithButtonsDispatchEvent, 16)
            };
            r.zoomInWithButtonsDispatchEvent = function (t) {
                if (t) {
                    r.dispatchEvent(e.ZOOM_WITH_BUTTONS, {
                        dir: 1,
                        withPause: true
                    })
                } else {
                    r.dispatchEvent(e.ZOOM_WITH_BUTTONS, {
                        dir: 1,
                        withPause: false
                    })
                }
                if (!r.isScrollBarActive_bl && r.showButtonsLabels_bl) {
                    setTimeout(function () {
                        if (r == null) return;
                        var e = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                        r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(e * 100) + "%");
                        r.showZoomInOrOutToolTipButton(r.zoomIn_do, r.scrollBarHandlerToolTip_do, r.zoomInAndOutToolTipOffsetY)
                    }, 50)
                }
            };
            r.zoomInWithButtonsEndHandler = function (t) {
                var n;
                clearInterval(r.zoomWithButtonsId_int);
                clearTimeout(r.zoomWithButtonsId_to);
                r.isZoomInOrOutPressed_bl = false;
                r.zoomIn_do.isSelectedFinal_bl = false;
                n = FWDUtils.getViewportMouseCoordinates(t);
                if (!FWDUtils.hitTest(r.zoomIn_do.screen, n.screenX, n.screenY)) {
                    r.zoomIn_do.onMouseOut(t)
                }
                r.dispatchEvent(e.ENABLE_PAN_OR_MOVE);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.removeEventListener("MSPointerUp", r.zoomInWithButtonsEndHandler)
                    } else {
                        window.removeEventListener("touchend", r.zoomInWithButtonsEndHandler)
                    }
                } else {
                    if (window.removeEventListener) {
                        window.removeEventListener("mouseup", r.zoomInWithButtonsEndHandler)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmouseup", r.zoomInWithButtonsEndHandler)
                    }
                }
            };
            r.zoomOutMouseOverHandler = function (e) {
                if (r.showButtonsLabels_bl) {
                    r.scrollBarHandlerToolTip_do.show();
                    if (r.isScrollBarActive_bl) {
                        r.positionAndSetLabelScrollBarHandler()
                    } else {
                        if (!r.isScrollBarActive_bl && r.showButtonsLabels_bl) {
                            setTimeout(function () {
                                if (r == null) return;
                                var e = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                                r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(e * 100) + "%");
                                r.showZoomInOrOutToolTipButton(r.zoomOut_do, r.scrollBarHandlerToolTip_do, r.zoomInAndOutToolTipOffsetY)
                            }, 50)
                        }
                    }
                }
            };
            r.zoomOutStartHandler = function (t) {
                t = t.e;
                if (t.touches) {
                    r.handlerDragEndHandler(t)
                }
                clearInterval(r.zoomWithButtonsId_int);
                clearTimeout(r.zoomWithButtonsId_to);
                r.zoomWithButtonsId_to = setTimeout(r.startZoomOutWithDelay, 400);
                r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
                r.zoomOutWithButtonsDispatchEvent(true);
                r.zoomOut_do.isSelectedFinal_bl = true;
                r.isZoomInOrOutPressed_bl = true;
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerUp", r.zoomOutWithButtonsEndHandler)
                    } else {
                        window.addEventListener("touchend", r.zoomOutWithButtonsEndHandler)
                    }
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("mouseup", r.zoomOutWithButtonsEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmouseup", r.zoomOutWithButtonsEndHandler)
                    }
                }
            };
            r.startZoomOutWithDelay = function () {
                r.zoomWithButtonsId_int = setInterval(r.zoomOutWithButtonsDispatchEvent, 16)
            };
            r.zoomOutWithButtonsDispatchEvent = function (t) {
                if (!r.isScrollBarActive_bl && r.showButtonsLabels_bl) {
                    setTimeout(function () {
                        if (r == null) return;
                        var e = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                        r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(e * 100) + "%");
                        r.showZoomInOrOutToolTipButton(r.zoomOut_do, r.scrollBarHandlerToolTip_do, r.zoomInAndOutToolTipOffsetY)
                    }, 50)
                }
                if (t) {
                    r.dispatchEvent(e.ZOOM_WITH_BUTTONS, {
                        dir: -1,
                        withPause: true
                    })
                } else {
                    r.dispatchEvent(e.ZOOM_WITH_BUTTONS, {
                        dir: -1,
                        withPause: false
                    })
                }
            };
            r.zoomOutWithButtonsEndHandler = function (t) {
                var n;
                clearInterval(r.zoomWithButtonsId_int);
                clearTimeout(r.zoomWithButtonsId_to);
                r.isZoomInOrOutPressed_bl = false;
                r.zoomOut_do.isSelectedFinal_bl = false;
                n = FWDUtils.getViewportMouseCoordinates(t);
                if (!FWDUtils.hitTest(r.zoomOut_do.screen, n.screenX, n.screenY)) {
                    r.zoomOut_do.onMouseOut(t)
                }
                r.dispatchEvent(e.ENABLE_PAN_OR_MOVE);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.removeEventListener("MSPointerUp", r.zoomOutWithButtonsEndHandler)
                    } else {
                        window.removeEventListener("touchend", r.zoomOutWithButtonsEndHandler)
                    }
                } else {
                    if (window.removeEventListener) {
                        window.removeEventListener("mouseup", r.zoomOutWithButtonsEndHandler)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmouseup", r.zoomOutWithButtonsEndHandler)
                    }
                }
            };
            r.handlerOnMouseOver = function (e) {
                if (r.showButtonsLabels_bl) {
                    r.positionAndSetLabelScrollBarHandler();
                    r.scrollBarHandlerToolTip_do.show()
                }
            };
            r.handlerOnMouseOut = function (e) {
                if (r.showButtonsLabels_bl) r.scrollBarHandlerToolTip_do.hide(true)
            };
            r.handlerDragStartHandler = function (t) {
                t = t.e;
                if (r.isMobile_bl) {
                    r.handlerDragEndHandler(t);
                    if (r.moveLeftButton_do || r.moveLeftButton_do) r.panEndHandler(t)
                }
                var n = FWDUtils.getViewportMouseCoordinates(t);
                r.lastPresedX = n.screenX;
                r.scrollBarHandlerXPositionOnPress = r.scrollBarHandler_do.getX();
                r.scrollBarHandler_do.isSelectedFinal_bl = true;
                r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerMove", r.handlerDragMoveHandler);
                        window.addEventListener("MSPointerUp", r.handlerDragEndHandler)
                    } else {
                        window.addEventListener("touchmove", r.handlerDragMoveHandler);
                        window.addEventListener("touchend", r.handlerDragEndHandler)
                    }
                } else {
                    r.scrollBarHandler_do.isSelectedFinal_bl = true;
                    if (window.addEventListener) {
                        window.addEventListener("mousemove", r.handlerDragMoveHandler);
                        window.addEventListener("mouseup", r.handlerDragEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmousemove", r.handlerDragMoveHandler);
                        document.attachEvent("onmouseup", r.handlerDragEndHandler)
                    }
                }
            };
            r.handlerDragMoveHandler = function (t) {
                if (t.preventDefault) t.preventDefault();
                var n = FWDUtils.getViewportMouseCoordinates(t);
                r.finalHandlerX = Math.round(r.scrollBarHandlerXPositionOnPress + n.screenX - r.lastPresedX);
                if (r.finalHandlerX <= 0) {
                    r.finalHandlerX = 0
                } else if (r.finalHandlerX >= r.scrollBarTotalWidth - r.scrollBarHandlerWidth) {
                    r.finalHandlerX = r.scrollBarTotalWidth - r.scrollBarHandlerWidth
                }
                var i = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                r.dispatchEvent(e.SCROLL_BAR_UPDATE, {
                    percent: i
                });
                r.scrollBarHandler_do.setX(r.finalHandlerX);
                r.positionAndSetLabelScrollBarHandler()
            };
            r.handlerDragEndHandler = function (t) {
                var n;
                r.dispatchEvent(e.ENABLE_PAN_OR_MOVE);
                n = FWDUtils.getViewportMouseCoordinates(t);
                if (!FWDUtils.hitTest(r.scrollBarHandler_do.screen, n.screenX, n.screenY)) {
                    r.scrollBarHandler_do.onMouseOut(t);
                    if (r.showButtonsLabels_bl) r.scrollBarHandlerToolTip_do.hide(true);
                    r.scrollBarHandler_do.setUnselctedFinal()
                }
                r.scrollBarHandler_do.isSelectedFinal_bl = false;
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.removeEventListener("MSPointerMove", r.handlerDragMoveHandler);
                        window.removeEventListener("MSPointerUp", r.handlerDragEndHandler)
                    } else {
                        window.removeEventListener("touchmove", r.handlerDragMoveHandler);
                        window.removeEventListener("touchend", r.handlerDragEndHandler)
                    }
                } else {
                    if (window.removeEventListener) {
                        window.removeEventListener("mousemove", r.handlerDragMoveHandler);
                        window.removeEventListener("mouseup", r.handlerDragEndHandler)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmousemove", r.handlerDragMoveHandler);
                        document.detachEvent("onmouseup", r.handlerDragEndHandler)
                    }
                }
            };
            r.updateScrollBar = function (e, t) {
                if (!r.scrollBarHandler_do) return;
                r.finalHandlerX = Math.round(e * (r.scrollBarTotalWidth - r.scrollBarHandlerWidth));
                if (!r.isScrollBarActive_bl) return;
                if (r.finalHandlerX <= 0) {
                    r.finalHandlerX = 0
                } else if (r.finalHandlerX >= r.scrollBarTotalWidth - r.scrollBarHandlerWidth) {
                    r.finalHandlerX = r.scrollBarTotalWidth - r.scrollBarHandlerWidth
                }
                TweenMax.killTweensOf(r.scrollBarHandler_do);
                if (t) {
                    TweenMax.to(r.scrollBarHandler_do, .2, {
                        x: r.finalHandlerX,
                        onUpdate: r.positionAndSetLabelScrollBarHandler,
                        onComplete: r.positionAndSetLabelScrollBarHandler
                    })
                } else {
                    r.scrollBarHandler_do.setX(r.finalHandlerX)
                }
            };
            r.positionAndSetLabelScrollBarHandler = function () {
                if (!r.showButtonsLabels_bl || !r.isScrollBarActive_bl) return;
                var t = 0;
                var n = 0;
                var i = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                var s = r.getGlobalX();
                r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(i * 100) + "%");
                setTimeout(function () {
                    if (r == null) return;
                    t = parseInt(r.scrollBarHandler_do.getX() + r.scrollBar_do.getX() + (r.scrollBarHandlerWidth - r.scrollBarHandlerToolTip_do.totalWidth) / 2);
                    if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                        n = -r.scrollBarHandlerToolTip_do.totalHeight - r.scrollBarHandlerToolTipOffsetY
                    } else {
                        n = r.curHeight + r.scrollBarHandlerToolTipOffsetY
                    }
                    if (s + t < 0) t = 0;
                    r.scrollBarHandlerToolTip_do.setX(t);
                    r.scrollBarHandlerToolTip_do.setY(n)
                }, 51)
            };
            this.addKeyboardSupport = function () {
                if (document.addEventListener) {
                    window.addEventListener("keydown", r.onKeyDownHandler);
                    window.addEventListener("keyup", r.onKeyUpHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onkeydown", r.onKeyDownHandler);
                    document.attachEvent("onkeyup", r.onKeyUpHandler)
                }
            };
            this.onKeyDownHandler = function (e) {
                if (n.hibernate_bl) return;
                if (r.isKeyPressed_bl) return;
                if (e && e.keyCode == 39) {
                    r.isKeyPressed_bl = true;
                    r.moveRightButtonStartHandler(e);
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        return false
                    }
                } else if (e.keyCode == 37) {
                    r.isKeyPressed_bl = true;
                    r.moveLeftButtonStartHandler(e);
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        return false
                    }
                }
                if (e && e.keyCode == 38) {
                    r.isKeyPressed_bl = true;
                    r.moveUpButtonStartHandler(e);
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        return false
                    }
                } else if (e.keyCode == 40) {
                    r.isKeyPressed_bl = true;
                    r.moveDownButtonStartHandler(e);
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        return false
                    }
                }
            };
            this.onKeyUpHandler = function (e) {
                r.isKeyPressed_bl = false;
                r.panEndHandler(e)
            };
            r.hide = function (t) {
                if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                    if (t) {
                        TweenMax.to(r.mainHolder_do, 1, {
                            y: r.curHeight + r.controllerOffsetY,
                            ease: Expo.easeInOut
                        })
                    } else {
                        r.mainHolder_do.setY(r.curHeight + r.controllerOffsetY)
                    }
                } else if (r.controllerPosition_str == e.POSITION_TOP) {
                    if (t) {
                        TweenMax.to(r.mainHolder_do, 1, {
                            y: -r.curHeight - r.controllerOffsetY,
                            ease: Expo.easeInOut
                        })
                    } else {
                        r.mainHolder_do.setY(-r.curHeight - r.controllerOffsetY)
                    }
                }
            };
            r.show = function () {
                TweenMax.to(r.mainHolder_do, 1, {
                    y: 0,
                    ease: Expo.easeInOut
                })
            };
            r.showToolTipButton = function (t, n, i) {
                if (r.showButtonsLabels_bl) {
                    var s;
                    var o;
                    var u = r.mainHolder_do.getX();
                    var a = 0;
                    if (r.showButtonsLabels_bl) n.show();
                    setTimeout(function () {
                        if (r == null) return;
                        s = parseInt(t.getX() + (r.buttonWidth - n.totalWidth) / 2);
                        if (u + s < 0) {
                            a = u + s;
                            s = s + Math.abs(u + s)
                        } else if (u + r.curWidth - s - n.totalWidth < 0) {
                            a = -(u + r.curWidth - s - n.totalWidth);
                            s = s + u + r.curWidth - s - n.totalWidth
                        }
                        if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                            o = -n.totalHeight - i;
                            if (r.isHiddenForGood_bl && t == r.hideShowControllerButton_do) o -= r.curHeight - 5
                        } else {
                            o = r.curHeight + i;
                            if (r.isHiddenForGood_bl && t == r.hideShowControllerButton_do) o += r.curHeight - 5
                        }
                        if (r.isHiddenForGood_bl) {
                            if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                                o -= r.hideControllerOffsetY
                            } else {
                                o += r.hideControllerOffsetY
                            }
                        }
                        n.setX(s);
                        n.setY(o);
                        n.positionPointer(a)
                    }, 51)
                }
            };
            r.showZoomInOrOutToolTipButton = function (t, n, i) {
                if (r.showButtonsLabels_bl) {
                    var s;
                    var o;
                    var u = r.mainHolder_do.getX();
                    var a = 0;
                    setTimeout(function () {
                        if (r == null) return;
                        s = parseInt(t.getX() + (r.zoomButtonHeight - n.totalWidth) / 2);
                        if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                            o = -n.totalHeight - i
                        } else {
                            o = r.curHeight + i
                        }
                        if (u + s < 0) {
                            a = u + s;
                            s = s + Math.abs(u + s)
                        } else if (u + r.curWidth - s - n.totalWidth < 0) {
                            a = -(u + r.curWidth - s - n.totalWidth);
                            s = s + u + r.curWidth - s - n.totalWidth
                        }
                        n.setX(s);
                        n.setY(o);
                        n.positionPointer(a)
                    }, 51)
                }
            };
            this.disableUpAndDownButtons = function () {
                if (r.moveUpButton_do) r.moveUpButton_do.disable();
                if (r.moveDownButton_do) r.moveDownButton_do.disable()
            };
            this.enableUpAndDownButtons = function () {
                if (r.moveUpButton_do) r.moveUpButton_do.enable();
                if (r.moveDownButton_do) r.moveDownButton_do.enable()
            };
            this.disableLeftAndRightButtons = function () {
                if (r.moveLeftButton_do) r.moveLeftButton_do.disable();
                if (r.moveRightButton_do) r.moveRightButton_do.disable()
            };
            this.enableLeftAndRightButtons = function () {
                if (r.moveLeftButton_do) r.moveLeftButton_do.enable();
                if (r.moveRightButton_do) r.moveRightButton_do.enable()
            };
            r.cleanMainEvents = function () {
                clearInterval(r.panImageId_int);
                clearInterval(r.zoomWithButtonsId_int);
                clearInterval(r.slideShowId_int);
                clearTimeout(r.gotoImageId_to);
                clearTimeout(r.zoomWithButtonsId_to);
                clearTimeout(r.showId_to);
                clearTimeout(r.disableForAWhileHideOrShowControllerToolTipId_to);
                if (r.hider) {
                    r.hider.removeListener(FWDHider.SHOW, r.onHiderShow);
                    r.hider.removeListener(FWDHider.HIDE, r.onHiderHide)
                }
                r.screen.onmousedown = null;
                if (r.isMobile_bl) {
                    window.removeEventListener("touchend", r.panEndHandler);
                    window.removeEventListener("MSPointerUp", r.panEndHandler);
                    window.removeEventListener("touchend", r.zoomInWithButtonsEndHandler);
                    window.removeEventListener("MSPointerUp", r.zoomInWithButtonsEndHandler);
                    window.removeEventListener("touchend", r.zoomOutWithButtonsEndHandler);
                    window.removeEventListener("MSPointerUp", r.zoomOutWithButtonsEndHandler);
                    window.removeEventListener("touchmove", r.handlerDragMoveHandler);
                    window.removeEventListener("touchend", r.handlerDragEndHandler);
                    window.removeEventListener("MSPointerMove", r.handlerDragMoveHandler);
                    window.removeEventListener("MSPointerUp", r.handlerDragEndHandler)
                } else {
                    if (window.removeEventListener) {
                        window.removeEventListener("mouseup", r.panEndHandler);
                        window.removeEventListener("mouseup", r.zoomInWithButtonsEndHandler);
                        window.removeEventListener("mouseup", r.zoomOutWithButtonsEndHandler);
                        window.removeEventListener("mousemove", r.handlerDragMoveHandler);
                        window.removeEventListener("mouseup", r.handlerDragEndHandler);
                        window.removeEventListener("keydown", r.onKeyDownHandler);
                        window.removeEventListener("keyup", r.onKeyUpHandler)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmouseup", r.panEndHandler);
                        document.detachEvent("onmouseup", r.zoomInWithButtonsEndHandler);
                        document.detachEvent("onmouseup", r.zoomOutWithButtonsEndHandler);
                        document.detachEvent("onmousemove", r.handlerDragMoveHandler);
                        document.detachEvent("onmouseup", r.handlerDragEndHandler);
                        document.detachEvent("onkeydown", r.onKeyDownHandler);
                        document.detachEvent("onkeyup", r.onKeyUpHandler)
                    }
                }
            };
            this.destroy = function () {
                r.cleanMainEvents();
                TweenMax.killTweensOf(r.mainHolder_do);
                r.mainHolder_do.destroy();
                r.backgroundLeft_sdo.destroy();
                r.backgroundMiddle_sdo.destroy();
                r.backgroundRight_sdo.destroy();
                if (r.moveDownButton_do) r.moveDownButton_do.destroy();
                if (r.moveUpButton_do) r.moveUpButton_do.destroy();
                if (r.moveRightButton_do) r.moveRightButton_do.destroy();
                if (r.moveLeftButton_do) r.moveLeftButton_do.destroy();
                if (r.hideOrShowMarkersButton_do) r.hideOrShowMarkersButton_do.destroy();
                if (r.infoButton_do) r.infoButton_do.destroy();
                if (r.hideShowControllerButton_do) {
                    TweenMax.killTweensOf(r.hideShowControllerButton_do);
                    r.hideShowControllerButton_do.destroy()
                }
                if (r.fullScreenButton_do) r.fullScreenButton_do.destroy();
                if (r.zoomIn_do) r.zoomIn_do.destroy();
                if (r.zoomOut_do) r.zoomOut_do.destroy();
                if (r.scrollBar_do) r.scrollBar_do.destroy();
                if (r.scrollBarLeft_sdo) r.scrollBarLeft_sdo.destroy();
                if (r.scrollBarRight_sdo) r.scrollBarRight_sdo.destroy();
                if (r.scrollBarMiddle_sdo) r.scrollBarMiddle_sdo.destroy();
                if (r.scrollBarHandler_do) {
                    TweenMax.killTweensOf(r.scrollBarHandler_do);
                    r.scrollBarHandler_do.destroy()
                }
                if (r.scrollBarHandlerN_sdo) r.scrollBarHandlerN_sdo.destroy();
                if (r.scrollBarHandlerS_sdo) r.scrollBarHandlerS_sdo.destroy();
                if (r.moveDownButtonTooTipLabel_do) r.moveDownButtonTooTipLabel_do.destroy();
                if (r.scrollBarHandlerToolTip_do) r.scrollBarHandlerToolTip_do.destroy();
                if (r.moveUpButtonToolTip_do) r.moveUpButtonToolTip_do.destroy();
                if (r.nextButtonToolTip_do) r.nextButtonToolTip_do.destroy();
                if (r.moveLeftButtonToolTip_do) r.moveLeftButtonToolTip_do.destroy();
                if (r.hideOrShowMarkersToolTip_do) r.hideOrShowMarkersToolTip_do.destroy();
                if (r.infoToolTip_do) r.infoToolTip_do.destroy();
                if (r.hideOrShowControllerToolTip_do) r.hideOrShowControllerToolTip_do.destroy();
                if (r.fullscreenToolTip_do) r.fullscreenToolTip_do.destroy();
                r.buttonsTest_ar = null;
                r.buttons_ar = null;
                r.hider = null;
                r.mainHolder_do = null;
                r.backgroundLeft_sdo = null;
                r.backgroundMiddle_sdo = null;
                r.backgroundRight_sdo = null;
                r.moveDownButton_do = null;
                r.moveUpButton_do = null;
                r.moveRightButton_do = null;
                r.moveLeftButton_do = null;
                r.hideOrShowMarkersButton_do = null;
                r.infoButton_do = null;
                r.hideShowControllerButton_do = null;
                r.fullScreenButton_do = null;
                r.zoomIn_do = null;
                r.zoomOut_do = null;
                r.scrollBar_do = null;
                r.scrollBarLeft_sdo = null;
                r.scrollBarRight_sdo = null;
                r.scrollBarMiddle_sdo = null;
                r.scrollBarHandler_do = null;
                r.scrollBarHandlerN_sdo = null;
                r.scrollBarHandlerS_sdo = null;
                r.moveDownButtonTooTipLabel_do = null;
                r.scrollBarHandlerToolTip_do = null;
                r.moveUpButtonToolTip_do = null;
                r.nextButtonToolTip_do = null;
                r.moveLeftButtonToolTip_do = null;
                r.hideOrShowMarkersToolTip_do = null;
                r.infoToolTip_do = null;
                r.hideOrShowControllerToolTip_do = null;
                r.fullscreenToolTip_do = null;
                r.backgroundLeft_img = null;
                r.backgroundRight_img = null;
                r.downN_img = null;
                r.downS_img = null;
                r.upN_img = null;
                r.upS_img = null;
                r.nextN_img = null;
                r.nextS_img = null;
                r.prevN_img = null;
                r.prevS_img = null;
                this.controllerHideMarkersN_img = null;
                this.controllerHideMarkersS_img = null;
                this.controllerShowMarkersN_img = null;
                this.controllerShowMarkersS_img = null;
                r.infoN_img = null;
                r.infoS_img = null;
                r.linkN_img = null;
                r.linkS_img = null;
                r.fullScreenNormalN_img = null;
                r.fullScreenNormalS_img = null;
                r.fullScreenFullN_img = null;
                r.fullScreenFullS_img = null;
                r.zoomInN_img = null;
                r.zoomInS_img = null;
                r.zoomOutN_img = null;
                r.zoomOutS_img = null;
                r.scrollBarHandlerN_img = null;
                r.scrollBarHandlerS_img = null;
                r.scrollBarLeft_img = null;
                r.scrollBarRight_img = null;
                r.toolTipLeft_img = null;
                r.toolTipPointer_img = null;
                r.backgroundMiddlePath_str = null;
                r.scrollBarMiddlePath_str = null;
                r.draggingMode_str = null;
                r.controllerPosition_str = null;
                r.buttonToolTipLeft_str = null;
                r.buttonToolTipMiddle_str = null;
                r.buttonToolTipRight_str = null;
                r.link_str = null;
                t = null;
                n = null;
                r.setInnerHTML("");
                i.destroy();
                r = null;
                i = null;
                e.prototype = null
            };
            this.init()
        };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.SHOW_INFO = "showInfo";
    e.POSITION_TOP = "top";
    e.POSITION_BOTTOM = "bottom";
    e.PAN = "pan";
    e.DISABLE_PAN_OR_MOVE = "disablePanOrMove";
    e.ENABLE_PAN_OR_MOVE = "enablePanOrMove";
    e.SCROLL_BAR_UPDATE = "scrollBarUpdate";
    e.ZOOM_WITH_BUTTONS = "zoomWithButtons";
    e.ZOOM_IN = "zoomIn";
    e.ZOOM_OUT = "zoomOut";
    e.PAN = "pan";
    e.ROTATE = "rotate";
    e.HIDE_MARKERS = "hideMarkers";
    e.SHOW_MARKERS = "showMarkers";
    e.GO_FULL_SCREEN = "goFullScreen";
    e.GO_NORMAL_SCREEN = "goNormalScreen";
    e.MOUSE_DOWN = "controllerOnMouseDown";
    e.HIDE_CONTROLLER = "hideController";
    e.SHOW_CONTROLLER = "showController";
    e.prototype = null;
    window.FWDController = e
})();
(function (e) {
    var t = function (e, n) {
            var r = this;
            var i = t.prototype;
            this.navigatorImage_img;
            this.mainPreloader_img = null;
            this.mainLightboxCloseButtonN_img = null;
            this.mainLightboxCloseButtonS_img = null;
            this.controllerBackgroundLeft_img = null;
            this.controllerBackgroundRight_img = null;
            this.controllerMoveDownN_img = null;
            this.controllerMoveDownS_img = null;
            this.controllerMoveDownD_img = null;
            this.controllerMoveUpN_img = null;
            this.controllerMoveUpS_img = null;
            this.controllerMoveUpD_img = null;
            this.controllerNextN_img = null;
            this.controllerNextS_img = null;
            this.controllerNextD_img = null;
            this.controllerPrevN_img = null;
            this.controllerPrevS_img = null;
            this.controllerPrevD_img = null;
            this.controllerHideMarkersN_img = null;
            this.controllerHideMarkersS_img = null;
            this.controllerShowMarkersN_img = null;
            this.controllerShowMarkersS_img = null;
            this.controllerInfoN_img = null;
            this.controllerInfoS_img = null;
            this.controllerHideN_img = null;
            this.controllerHideS_img = null;
            this.controllerShowN_img = null;
            this.controllerShowS_img = null;
            this.controllerFullScreenNormalN_img = null;
            this.controllerFullScreenNormalS_img = null;
            this.controllerFullScreenFullN_img = null;
            this.controllerFullScreenFullS_img = null;
            this.zoomInN_img = null;
            this.zoomInS_img = null;
            this.zoomOutN_img = null;
            this.zoomOutS_img = null;
            this.scrollBarHandlerN_img = null;
            this.scrollBarHandlerS_img = null;
            this.scrollBarLeft_img = null;
            this.scrollBarRight_img = null;
            this.toolTipLeft_img = null;
            this.toolTipPointer_img = null;
            this.infoWindowCloseNormal_img = null;
            this.infoWindowCloseSelected_img = null;
            this.originalImage_img = null;
            this.navigatorImage_img = null;
            this.props_obj = e;
            this.rootElement_el = null;
            this.skinPaths_ar = [];
            this.images_ar = [];
            this.markersList_ar = [];
            this.toolTipWindows_ar = [];
            this.buttons_ar = null;
            this.buttonsLabels_ar = null;
            this.contextMenuLabels_ar = null;
            this.skinPath_str = undefined;
            this.backgroundColor_str = null;
            this.handMovePath_str = null;
            this.handGrabPath_str = null;
            this.controllerBackgroundMiddlePath_str = null;
            this.scrollBarMiddlePath_str = null;
            this.controllerPosition_str = null;
            this.preloaderFontColor_str = null;
            this.preloaderBackgroundColor_str = null;
            this.preloaderText_str = null;
            this.buttonToolTipLeft_str = null;
            this.buttonToolTipMiddle_str = null;
            this.buttonToolTipRight_str = null;
            this.buttonToolTipBottomPointer_str = null;
            this.buttonToolTipTopPointer_str = null;
            this.buttonToolTipFontColor_str = null;
            this.contextMenuBackgroundColor_str = null;
            this.contextMenuBorderColor_str = null;
            this.contextMenuSpacerColor_str = null;
            this.contextMenuItemNormalColor_str = null;
            this.contextMenuItemSelectedColor_str = null;
            this.contextMenuItemSelectedColor_str = null;
            this.contextMenuItemDisabledColor_str = null;
            this.navigatorPosition_str = null;
            this.navigatorHandlerColor_str = null;
            this.navigatorBorderColor_str = null;
            this.infoText_str = null;
            this.infoWindowBackgroundColor_str = null;
            this.infoWindowScrollBarColor_str = null;
            this.originalImagePath_str = null;
            this.navigatorImagePath_str = null;
            this.dragRotationSpeed;
            this.panSpeed;
            this.zoomSpeed;
            this.controllerHeight;
            this.imageWidth;
            this.imageHeight;
            this.largeImageWidth;
            this.largeImageHeight;
            this.spaceBetweenButtons;
            this.startSpaceBetweenButtons;
            this.scrollBarOffsetX;
            this.doubleClickZoomFactor;
            this.zoomFactor;
            this.startZoomFactor;
            this.controllerOffsetY;
            this.hideControllerDelay;
            this.controllerBackgroundOpacity;
            this.controllerMaxWidth;
            this.countLoadedSkinImages = 0;
            this.countLoadedImages = 0;
            this.scrollBarHandlerToolTipOffsetY;
            this.zoomInAndOutToolTipOffsetY;
            this.buttonsToolTipOffsetY;
            this.hideControllerOffsetY;
            this.scrollBarPosition;
            this.startSpaceForScrollBarButtons;
            this.totalGraphics;
            this.navigatorWidth;
            this.navigatorHeight;
            this.navigatorOffsetX;
            this.navigatorOffsetY;
            this.infoWindowBackgroundOpacity;
            this.markerToolTipOffsetY;
            this.toolTipWindowMaxWidth;
            this.lightBoxBackgroundOpacity;
            this.parseDelayId_to;
            this.loadImageId_to;
            this.addKeyboardSupport_bl;
            this.showContextMenu_bl;
            this.showNavigator_bl;
            this.inversePanDirection_bl;
            this.useEntireScreenFor3dObject_bl;
            this.hideController_bl;
            this.showScriptDeveloper_bl;
            this.showMarkers_bl;
            this.hasNavigatorError_bl = false;
            this.showMarkersInfo_bl = false;
            this.addDoubleClickSupport_bl = false;
            this.isMobile_bl = FWDUtils.isMobile;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            r.init = function () {
                r.parseDelayId_to = setTimeout(r.parseProperties, 100)
            };
            r.parseProperties = function () {
                var e;
                var i;
                var s;
                var o;
                var u;
                var a;
                var f;
                var l;
                var c;
                var h;
                var p;
                var d;
                var v;
                var m;
                var g;
                var y = false;
                r.rootElement_el = n;
                if (!r.rootElement_el) {
                    u = "Make sure that the a div with the id - <font color='#FFFFFF'>" + r.props_obj.playListAndSkinId + "</font> exists, self represents the data playlist.";
                    r.dispatchEvent(t.LOAD_ERROR, {
                        text: u
                    });
                    return
                }
                r.originalImagePath_str = r.props_obj.imagePath;
                if (!r.originalImagePath_str) {
                    u = "The <font color='#FFFFFF'>imagePath</font> property which represents the path for the iamge to zoom is not defined in the constructor function!";
                    r.dispatchEvent(t.LOAD_ERROR, {
                        text: u
                    });
                    return
                }
                r.rootElement_el.style.display = "none";
                e = FWDUtils.getChildFromNodeListFromAttribute(r.rootElement_el, "data-markers");
                r.showNavigator_bl = r.props_obj.showNavigator;
                r.showNavigator_bl = r.showNavigator_bl == "yes" ? true : false;
                if (r.props_obj.showNavigatorOnMobile && r.props_obj.showNavigatorOnMobile == "no" && r.isMobile_bl && r.showNavigator_bl) r.showNavigator_bl = false;
                r.showMarkersInfo_bl = r.props_obj.showMarkersInfo == "yes" ? true : false;
                if (r.isMobile_bl) r.showMarkersInfo_bl = false;
                r.addDoubleClickSupport_bl = r.props_obj.addDoubleClickSupport;
                r.addDoubleClickSupport_bl = r.addDoubleClickSupport_bl == "yes" ? true : false;
                if (FWDUtils.isIEAndLessThen9) r.addDoubleClickSupport_bl = false;
                r.backgroundColor_str = r.props_obj.backgroundColor || "transparent";
                r.preloaderFontColor_str = r.props_obj.preloaderFontColor || "#000000";
                r.preloaderBackgroundColor_str = r.props_obj.preloaderBackgroundColor || "transparent";
                r.preloaderText_str = r.props_obj.preloaderText || "Loading:";
                r.controllerPosition_str = r.props_obj.controllerPosition || "bottom";
                if (r.controllerPosition_str != "top" && r.controllerPosition_str != "bottom") r.controllerPosition_str = "top";
                if (!r.props_obj.buttons) {
                    u = "The <font color='#FFFFFF'>buttons</font> is not defined in the contructor, this is necessary to setup the main buttons.";
                    r.dispatchEvent(t.LOAD_ERROR, {
                        text: u
                    });
                    return
                }
                r.buttons_ar = FWDUtils.splitAndTrim(r.props_obj.buttons, true, true);
                if (r.isMobile_bl && !r.hasPointerEvent_bl) {
                    r.buttonsLabels_ar = null;
                    r.contextMenuLabels_ar = null
                } else {
                    if (r.props_obj.buttonsToolTips) r.buttonsLabels_ar = FWDUtils.splitAndTrim(r.props_obj.buttonsToolTips, false);
                    if (r.props_obj.contextMenuLabels) r.contextMenuLabels_ar = FWDUtils.splitAndTrim(r.props_obj.contextMenuLabels, false)
                }
                r.showScriptDeveloper_bl = r.props_obj.showScriptDeveloper;
                r.showScriptDeveloper_bl = r.showScriptDeveloper_bl == "no" ? false : true;
                r.dragRotationSpeed = r.props_obj.dragRotationSpeed || .5;
                if (isNaN(r.dragRotationSpeed)) r.dragRotationSpeed = .5;
                if (r.dragRotationSpeed < 0) {
                    r.dragRotationSpeed = 0
                } else if (r.dragRotationSpeed > 1) {
                    r.dragRotationSpeed = 1
                }
                r.panSpeed = r.props_obj.panSpeed || 1;
                if (isNaN(r.panSpeed)) r.panSpeed = 1;
                if (r.panSpeed < 1) {
                    r.panSpeed = 1
                } else if (r.panSpeed > 100) {
                    r.panSpeed = 100
                }
                r.zoomSpeed = r.props_obj.zoomSpeed || .1;
                if (isNaN(r.zoomSpeed)) r.zoomSpeed = .1;
                if (r.zoomSpeed < .1) {
                    r.zoomSpeed = .1
                } else if (r.zoomSpeed > 1) {
                    r.zoomSpeed = 1
                }
                r.imageWidth = r.props_obj.imageWidth;
                if (!r.imageWidth) {
                    r.showPropertyError("imageWidth");
                    return
                } else {
                    r.imageWidth = parseInt(r.imageWidth)
                }
                r.imageHeight = r.props_obj.imageHeight;
                if (!r.imageHeight) {
                    r.showPropertyError("imageHeight");
                    return
                } else {
                    r.imageHeight = parseInt(r.imageHeight)
                }
                r.zoomFactor = r.props_obj.zoomFactor;
                if (r.zoomFactor == undefined) {
                    r.showPropertyError("zoomFactor");
                    return
                }
                if (r.zoomFactor < 1) {
                    r.zoomFactor = 1
                } else if (r.zoomFactor > 5) {
                    r.zoomFactor = 5
                }
                r.doubleClickZoomFactor = r.props_obj.doubleClickZoomFactor;
                if (isNaN(r.doubleClickZoomFactor)) r.doubleClickZoomFactor = r.zoomFactor;
                if (r.doubleClickZoomFactor > r.zoomFactor) r.doubleClickZoomFactor = r.zoomFactor;
                r.startZoomFactor = r.props_obj.startZoomFactor;
                if (r.startZoomFactor == undefined) {
                    r.startZoomFactor = "default";
                    return
                }
                if (!isNaN(r.startZoomFactor)) {
                    if (r.startZoomFactor < .1) {
                        r.startZoomFactor = .1
                    } else if (r.startZoomFactor > r.zoomFactor) {
                        r.startZoomFactor = r.zoomFactor
                    }
                }
                r.navigatorOffsetX = r.props_obj.navigatorOffsetX || 0;
                if (isNaN(r.navigatorOffsetX)) r.navigatorOffsetX = 0;
                r.navigatorOffsetY = r.props_obj.navigatorOffsetY || 0;
                if (isNaN(r.navigatorOffsetY)) r.navigatorOffsetY = 0;
                r.controllerBackgroundOpacity = r.props_obj.controllerBackgroundOpacity;
                if (!r.controllerBackgroundOpacity) r.controllerBackgroundOpacity = 1;
                if (isNaN(r.controllerBackgroundOpacity)) r.controllerBackgroundOpacity = 1;
                if (r.controllerBackgroundOpacity < 0) {
                    r.controllerBackgroundOpacity = 0
                } else if (r.controllerBackgroundOpacity > 1) {
                    r.controllerBackgroundOpacity = 1
                }
                r.controllerMaxWidth = r.props_obj.controllerMaxWidth;
                if (!r.controllerMaxWidth) r.controllerMaxWidth = 900;
                if (isNaN(r.controllerMaxWidth)) r.controllerMaxWidth = 900;
                if (r.controllerMaxWidth < 200) r.controllerMaxWidth = 200;
                r.hideControllerDelay = r.props_obj.hideControllerDelay;
                if (r.hideControllerDelay) {
                    r.hideController_bl = true;
                    if (isNaN(r.hideControllerDelay)) {
                        r.hideControllerDelay = 4e3
                    } else if (r.hideControllerDelay < 0) {
                        r.hideControllerDelay = 4e3
                    } else {
                        r.hideControllerDelay *= 1e3
                    }
                }
                r.spaceBetweenButtons = r.props_obj.spaceBetweenButtons || 0;
                r.scrollBarPosition = r.props_obj.scrollBarPosition || 0;
                r.startSpaceForScrollBarButtons = r.props_obj.startSpaceForScrollBarButtons || 0;
                r.startSpaceBetweenButtons = r.props_obj.startSpaceBetweenButtons || 0;
                r.startSpaceForScrollBar = r.props_obj.startSpaceForScrollBar || 0;
                r.scrollBarOffsetX = r.props_obj.scrollBarOffsetX || 0;
                r.controllerOffsetY = r.props_obj.controllerOffsetY || 0;
                r.scrollBarHandlerToolTipOffsetY = r.props_obj.scrollBarHandlerToolTipOffsetY || 0;
                r.zoomInAndOutToolTipOffsetY = r.props_obj.zoomInAndOutToolTipOffsetY || 0;
                r.buttonsToolTipOffsetY = r.props_obj.buttonsToolTipOffsetY || 0;
                r.hideControllerOffsetY = r.props_obj.hideControllerOffsetY || 0;
                r.infoWindowBackgroundOpacity = r.props_obj.infoWindowBackgroundOpacity || 1;
                r.markerToolTipOffsetY = r.props_obj.markerToolTipOffsetY || 1;
                r.toolTipWindowMaxWidth = r.props_obj.toolTipWindowMaxWidth || 300;
                r.buttonToolTipFontColor_str = r.props_obj.buttonToolTipFontColor || "#000000";
                r.contextMenuBackgroundColor_str = r.props_obj.contextMenuBackgroundColor || "#000000";
                r.contextMenuBorderColor_str = r.props_obj.contextMenuBorderColor || "#FF0000";
                r.contextMenuSpacerColor_str = r.props_obj.contextMenuSpacerColor || "#FF0000";
                r.contextMenuItemNormalColor_str = r.props_obj.contextMenuItemNormalColor || "#FF0000";
                r.contextMenuItemSelectedColor_str = r.props_obj.contextMenuItemSelectedColor || "#FF0000";
                r.contextMenuItemDisabledColor_str = r.props_obj.contextMenuItemDisabledColor || "#FF0000";
                r.infoWindowBackgroundColor_str = r.props_obj.infoWindowBackgroundColor || "#FF0000";
                r.infoWindowScrollBarColor_str = r.props_obj.infoWindowScrollBarColor || "#FF0000";
                r.navigatorImagePath_str = r.props_obj.navigatorImagePath;
                if (r.showNavigator_bl && !r.navigatorImagePath_str) {
                    u = "The  <font color='#FFFFFF'>navigatorImagePath</font> is not defined in the contructor, this is necessary to setup the navigator.";
                    r.dispatchEvent(t.LOAD_ERROR, {
                        text: u
                    });
                    return
                }
                r.navigatorPosition_str = r.props_obj.navigatorPosition || "topleft";
                r.navigatorPosition_str = String(r.navigatorPosition_str).toLowerCase();
                f = r.navigatorPosition_str == "topleft" || r.navigatorPosition_str == "topright" || r.navigatorPosition_str == "bottomleft" || r.navigatorPosition_str == "bottomright";
                if (!f) r.navigatorPosition_str = "topleft";
                r.navigatorHandlerColor_str = r.props_obj.navigatorHandlerColor || "#FF0000";
                r.navigatorBorderColor_str = r.props_obj.navigatorBorderColor || "#FF0000";
                r.showContextMenu_bl = r.props_obj.showContextMenu;
                r.showContextMenu_bl = r.showContextMenu_bl == "no" ? false : true;
                r.inversePanDirection_bl = r.props_obj.inversePanDirection;
                r.inversePanDirection_bl = r.inversePanDirection_bl == "yes" ? true : false;
                r.addKeyboardSupport_bl = r.props_obj.addKeyboardSupport == "no" ? false : true;
                if (r.isMobile_bl) r.addKeyboardSupport_bl = false;
                r.useEntireScreenFor3dObject_bl = r.props_obj.useEntireScreen;
                r.useEntireScreenFor3dObject_bl = r.useEntireScreenFor3dObject_bl == "yes" ? true : false;
                /*r.infoText_str = FWDUtils.getChildFromNodeListFromAttribute(r.rootElement_el, "data-info");
                if (r.infoText_str) {
                    r.infoText_str = r.infoText_str.innerHTML
                } else {
                    r.infoText_str = "not defined make sure that an ul element with the attribute data-info is defined!"
                }*/
                if (e) r.showMarkers_bl = true;
                if (r.showMarkers_bl) {
                    o = FWDUtils.getChildren(e);
                    for (var b = 0; b < o.length; b++) {
                        l = {};
                        h = o[b];
                        p = false;
                        d = "";
                        m = FWDUtils.hasAttribute(h, "data-marker-type", b);
                        if (!m) {
                            r.showMarkerError("data-marker-type", b);
                            return
                        }
                        m = FWDUtils.hasAttribute(h, "data-marker-normal-state-path", b);
                        if (!m) {
                            r.showMarkerError("data-marker-normal-state-path", b);
                            return
                        }
                        m = FWDUtils.hasAttribute(h, "data-marker-selected-state-path", b);
                        if (!m) {
                            r.showMarkerError("data-marker-selected-state-path");
                            return
                        }
                        m = FWDUtils.hasAttribute(h, "data-marker-left");
                        if (!m) {
                            r.showMarkerError("data-marker-left", b);
                            return
                        }
                        m = FWDUtils.hasAttribute(h, "data-marker-top");
                        if (!m) {
                            r.showMarkerError("data-marker-top", b);
                            return
                        }
                        m = FWDUtils.hasAttribute(h, "data-marker-width");
                        if (!m) {
                            r.showMarkerError("data-marker-width", b);
                            return
                        }
                        m = FWDUtils.hasAttribute(h, "data-marker-height");
                        if (!m) {
                            r.showMarkerError("data-marker-height", b);
                            return
                        }
                        m = FWDUtils.hasAttribute(h, "data-show-after-zoom-factor");
                        if (!m) {
                            r.showMarkerError("data-show-after-zoom-factor", b);
                            return
                        }
                        l.type = FWDUtils.getAttributeValue(h, "data-marker-type");
                        f = l.type == "link" || l.type == "tooltip" || l.type == "infowindow";
                        if (!f) {
                            r.showMarkerTypeError(l.type, b);
                            return
                        }
                        if (FWDUtils.hasAttribute(h, "data-show-content")) {
                            if (FWDUtils.trim(FWDUtils.getAttributeValue(h, "data-show-content")) == "no") {
                                y = false
                            } else {
                                y = true
                            }
                        } else {
                            y = true
                        }
                        l.normalStatePath_str = FWDUtils.trim(FWDUtils.getAttributeValue(h, "data-marker-normal-state-path"));
                        l.selectedStatePath_str = FWDUtils.trim(FWDUtils.getAttributeValue(h, "data-marker-selected-state-path"));
                        l.toolTipLabel = FWDUtils.getAttributeValue(h, "data-tool-tip-label") || undefined;
                        l.markerX = parseInt(FWDUtils.getAttributeValue(h, "data-marker-left"));
                        if (isNaN(l.markerX)) l.markerX = 0;
                        l.markerY = parseInt(FWDUtils.getAttributeValue(h, "data-marker-top"));
                        if (isNaN(l.markerY)) l.markerY = 0;
                        l.markerWidth = parseInt(FWDUtils.getAttributeValue(h, "data-marker-width"));
                        if (isNaN(l.markerWidth)) l.markerWidth = 5;
                        l.markerHeight = parseInt(FWDUtils.getAttributeValue(h, "data-marker-height"));
                        if (isNaN(l.markerHeight)) l.markerHeight = 5;
                        l.showAfterScale = parseFloat(FWDUtils.getAttributeValue(h, "data-show-after-zoom-factor"));
                        if (isNaN(l.showAfterScale)) l.showAfterScale = 0;
                        if (l.type == "link") {
                            l.link = FWDUtils.getAttributeValue(h, "data-marker-url") || "http://www.link-is-not-defined.com";
                            l.target = FWDUtils.getAttributeValue(h, "data-marker-target") || "_blank"
                        } else {
                            l.innerHTML = h.innerHTML
                        }
                        f = FWDUtils.getAttributeValue(h, "data-reg-point");
                        f = f === "center" || f === "centertop" || f === "centerbottom";
                        if (!f) {
                            f = "center"
                        } else {
                            f = FWDUtils.trim(FWDUtils.getAttributeValue(h, "data-reg-point")).toLowerCase()
                        }
                        l.regPoint = f;
                        l.maxWidth = parseInt(FWDUtils.getAttributeValue(h, "data-marker-window-width"));
                        if (isNaN(l.maxWidth)) l.maxWidth = 200;
                        l.hasContent_bl = y;
                        var c = {};
                        if (l.type == "tooltip") {
                            c.innerHTML = h.innerHTML;
                            c.maxWidth = l.maxWidth;
                            c.hasContent_bl = y;
                            r.toolTipWindows_ar.push(c)
                        }
                        r.markersList_ar.push(l)
                    }
                }
                r.skinPath_str = r.props_obj.skinPath;
                if (!r.skinPath_str) {
                    u = "The <font color='#FFFFFF'>skinPath</font> property is not defined in the constructor function!";
                    r.dispatchEvent(t.LOAD_ERROR, {
                        text: u
                    });
                    return
                }
                if (r.skinPath_str.lastIndexOf("/") + 1 != r.skinPath_str.length) {
                    r.skinPath_str += "/"
                }
                r.handMovePath_str = r.skinPath_str + "move.cur";
                r.handGrabPath_str = r.skinPath_str + "handgrab.cur";
                var w = r.skinPath_str + "preloader.png";
                var E = r.skinPath_str + "lightbox-close-icon.png";
                var S = r.skinPath_str + "lightbox-close-icon-rollover.png";
                var x = r.skinPath_str + "bg-bar-left.png";
                var T = r.skinPath_str + "bg-bar-right.png";
                var N = r.skinPath_str + "down-icon.png";
                var C = r.skinPath_str + "down-icon-rollover.png";
                var k = r.skinPath_str + "down-icon-disabled.png";
                var L = r.skinPath_str + "up-icon.png";
                var A = r.skinPath_str + "up-icon-rollover.png";
                var O = r.skinPath_str + "up-icon-disabled.png";
                var M = r.skinPath_str + "right-icon.png";
                var _ = r.skinPath_str + "right-icon-rollover.png";
                var D = r.skinPath_str + "right-icon-disabled.png";
                var P = r.skinPath_str + "left-icon.png";
                var H = r.skinPath_str + "left-icon-rollover.png";
                var B = r.skinPath_str + "left-icon-disabled.png";
                var j = r.skinPath_str + "hide-markers-icon.png";
                var F = r.skinPath_str + "hide-markers-icon-rollover.png";
                var I = r.skinPath_str + "show-markers-icon.png";
                var q = r.skinPath_str + "show-markers-icon-rollover.png";
                var R = r.skinPath_str + "info-icon.png";
                var U = r.skinPath_str + "info-icon-rollover.png";
                var z = r.skinPath_str + "hide-controller-icon.png";
                var W = r.skinPath_str + "hide-controller-icon-rollover.png";
                var X = r.skinPath_str + "show-controller-icon.png";
                var V = r.skinPath_str + "show-controller-icon-rollover.png";
                var $ = r.skinPath_str + "fullscr-normal-icon.png";
                var J = r.skinPath_str + "fullscr-normal-icon-rollover.png";
                var K = r.skinPath_str + "fullscr-full-icon.png";
                var Q = r.skinPath_str + "fullscr-full-icon-rollover.png";
                var G = r.skinPath_str + "zoomin.png";
                var Y = r.skinPath_str + "zoomin-rollover.png";
                var Z = r.skinPath_str + "zoomout.png";
                var et = r.skinPath_str + "zoomout-rollover.png";
                var tt = r.skinPath_str + "handler.png";
                var nt = r.skinPath_str + "handler-rollover.png";
                var rt = r.skinPath_str + "scrool-left.png";
                var it = r.skinPath_str + "scrool-right.png";
                r.scrollBarMiddlePath_str = r.skinPath_str + "scrool-middle.png";
                r.controllerBackgroundMiddlePath_str = r.skinPath_str + "bg-bar-middle.png";
                r.buttonToolTipLeft_str = r.skinPath_str + "button-tool-tip-left.png";
                r.buttonToolTipMiddle_str = r.skinPath_str + "button-tool-tip-middle.png";
                r.buttonToolTipRight_str = r.skinPath_str + "button-tool-tip-right.png";
                r.buttonToolTipBottomPointer_str = r.skinPath_str + "button-tool-tip-down-pointer.png";
                r.buttonToolTipTopPointer_str = r.skinPath_str + "button-tool-tip-top-pointer.png";
                var st = r.skinPath_str + "close-icon.png";
                var ot = r.skinPath_str + "close-icon-rollover.png";
                r.skinPaths_ar.push(w);
                r.skinPaths_ar.push(E);
                r.skinPaths_ar.push(S);
                r.skinPaths_ar.push(x);
                r.skinPaths_ar.push(T);
                r.skinPaths_ar.push(N);
                r.skinPaths_ar.push(C);
                r.skinPaths_ar.push(k);
                r.skinPaths_ar.push(L);
                r.skinPaths_ar.push(A);
                r.skinPaths_ar.push(O);
                r.skinPaths_ar.push(M);
                r.skinPaths_ar.push(_);
                r.skinPaths_ar.push(D);
                r.skinPaths_ar.push(P);
                r.skinPaths_ar.push(H);
                r.skinPaths_ar.push(B);
                r.skinPaths_ar.push(j);
                r.skinPaths_ar.push(F);
                r.skinPaths_ar.push(I);
                r.skinPaths_ar.push(q);
                r.skinPaths_ar.push(R);
                r.skinPaths_ar.push(U);
                r.skinPaths_ar.push(z);
                r.skinPaths_ar.push(W);
                r.skinPaths_ar.push(X);
                r.skinPaths_ar.push(V);
                r.skinPaths_ar.push($);
                r.skinPaths_ar.push(J);
                r.skinPaths_ar.push(K);
                r.skinPaths_ar.push(Q);
                r.skinPaths_ar.push(G);
                r.skinPaths_ar.push(Y);
                r.skinPaths_ar.push(Z);
                r.skinPaths_ar.push(et);
                r.skinPaths_ar.push(tt);
                r.skinPaths_ar.push(nt);
                r.skinPaths_ar.push(rt);
                r.skinPaths_ar.push(it);
                r.skinPaths_ar.push(r.buttonToolTipTopPointer_str);
                r.skinPaths_ar.push(r.buttonToolTipLeft_str);
                r.skinPaths_ar.push(st);
                r.skinPaths_ar.push(ot);
                r.skinPaths_ar.push(r.buttonToolTipMiddle_str);
                r.skinPaths_ar.push(r.buttonToolTipRight_str);
                r.skinPaths_ar.push(r.controllerBackgroundMiddlePath_str);
                r.totalGraphics = r.skinPaths_ar.length;
                r.loadSkin()
            };
            r.loadSkin = function () {
                if (r.image_img) {
                    r.image_img.onload = null;
                    r.image_img.onerror = null
                }
                var e = r.skinPaths_ar[r.countLoadedSkinImages];
                r.image_img = new Image;
                r.image_img.onload = r.onSkinLoadHandler;
                r.image_img.onerror = r.onKinLoadErrorHandler;
                r.image_img.src = e
            };
            r.onSkinLoadHandler = function (e) {
                if (r.countLoadedSkinImages == 0) {
                    r.mainPreloader_img = r.image_img;
                    r.dispatchEvent(t.PRELOADER_LOAD_DONE);
                    r.dispatchEvent(t.SKIN_PROGRESS)
                } else if (r.countLoadedSkinImages == 1) {
                    r.mainLightboxCloseButtonN_img = r.image_img
                } else if (r.countLoadedSkinImages == 2) {
                    r.mainLightboxCloseButtonS_img = r.image_img;
                    r.dispatchEvent(t.LIGHBOX_CLOSE_BUTTON_LOADED)
                } else if (r.countLoadedSkinImages == 3) {
                    r.controllerBackgroundLeft_img = r.image_img;
                    r.controllerHeight = r.controllerBackgroundLeft_img.height
                } else if (r.countLoadedSkinImages == 4) {
                    r.controllerBackgroundRight_img = r.image_img
                } else if (r.countLoadedSkinImages == 5) {
                    r.controllerMoveDownN_img = r.image_img
                } else if (r.countLoadedSkinImages == 6) {
                    r.controllerMoveDownS_img = r.image_img
                } else if (r.countLoadedSkinImages == 7) {
                    r.controllerMoveDownD_img = r.image_img
                } else if (r.countLoadedSkinImages == 8) {
                    r.controllerMoveUpN_img = r.image_img
                } else if (r.countLoadedSkinImages == 9) {
                    r.controllerMoveUpS_img = r.image_img
                } else if (r.countLoadedSkinImages == 10) {
                    r.controllerMoveUpD_img = r.image_img
                } else if (r.countLoadedSkinImages == 11) {
                    r.controllerNextN_img = r.image_img
                } else if (r.countLoadedSkinImages == 12) {
                    r.controllerNextS_img = r.image_img
                } else if (r.countLoadedSkinImages == 13) {
                    r.controllerNextD_img = r.image_img
                } else if (r.countLoadedSkinImages == 14) {
                    r.controllerPrevN_img = r.image_img
                } else if (r.countLoadedSkinImages == 15) {
                    r.controllerPrevS_img = r.image_img
                } else if (r.countLoadedSkinImages == 16) {
                    r.controllerPrevD_img = r.image_img
                } else if (r.countLoadedSkinImages == 17) {
                    r.controllerHideMarkersN_img = r.image_img
                } else if (r.countLoadedSkinImages == 18) {
                    r.controllerHideMarkersS_img = r.image_img
                } else if (r.countLoadedSkinImages == 19) {
                    r.controllerShowMarkersN_img = r.image_img
                } else if (r.countLoadedSkinImages == 20) {
                    r.controllerShowMarkersS_img = r.image_img
                } else if (r.countLoadedSkinImages == 21) {
                    r.controllerInfoN_img = r.image_img
                } else if (r.countLoadedSkinImages == 22) {
                    r.controllerInfoS_img = r.image_img
                } else if (r.countLoadedSkinImages == 23) {
                    r.controllerHideN_img = r.image_img
                } else if (r.countLoadedSkinImages == 24) {
                    r.controllerHideS_img = r.image_img
                } else if (r.countLoadedSkinImages == 25) {
                    r.controllerShowN_img = r.image_img
                } else if (r.countLoadedSkinImages == 26) {
                    r.controllerShowS_img = r.image_img
                } else if (r.countLoadedSkinImages == 27) {
                    r.controllerFullScreenNormalN_img = r.image_img
                } else if (r.countLoadedSkinImages == 28) {
                    r.controllerFullScreenNormalS_img = r.image_img
                } else if (r.countLoadedSkinImages == 29) {
                    r.controllerFullScreenFullN_img = r.image_img
                } else if (r.countLoadedSkinImages == 30) {
                    r.controllerFullScreenFullS_img = r.image_img
                } else if (r.countLoadedSkinImages == 31) {
                    r.zoomInN_img = r.image_img
                } else if (r.countLoadedSkinImages == 32) {
                    r.zoomInS_img = r.image_img
                } else if (r.countLoadedSkinImages == 33) {
                    r.zoomOutN_img = r.image_img
                } else if (r.countLoadedSkinImages == 34) {
                    r.zoomOutS_img = r.image_img
                } else if (r.countLoadedSkinImages == 35) {
                    r.scrollBarHandlerN_img = r.image_img
                } else if (r.countLoadedSkinImages == 36) {
                    r.scrollBarHandlerS_img = r.image_img
                } else if (r.countLoadedSkinImages == 37) {
                    r.scrollBarLeft_img = r.image_img
                } else if (r.countLoadedSkinImages == 38) {
                    r.scrollBarRight_img = r.image_img
                } else if (r.countLoadedSkinImages == 39) {
                    r.toolTipPointer_img = r.image_img
                } else if (r.countLoadedSkinImages == 40) {
                    r.toolTipLeft_img = r.image_img
                } else if (r.countLoadedSkinImages == 41) {
                    r.infoWindowCloseNormal_img = r.image_img
                } else if (r.countLoadedSkinImages == 42) {
                    r.infoWindowCloseSelected_img = r.image_img
                }
                r.countLoadedSkinImages++;
                if (r.countLoadedSkinImages < r.totalGraphics) {
                    r.loadImageId_to = setTimeout(r.loadSkin, 16)
                } else {
                    r.dispatchEvent(t.SKIN_PROGRESS, {
                        percent: r.countLoadedSkinImages / r.totalGraphics
                    });
                    r.dispatchEvent(t.LOAD_DONE);
                    if (r.showNavigator_bl) {
                        r.loadNavigatorImage()
                    } else {
                        r.loadMainImage()
                    }
                }
            };
            r.onKinLoadErrorHandler = function (e) {
                var n = "The skin graphics with the label <font color='#FFFFFF'>" + r.skinPaths_ar[r.countLoadedSkinImages] + "</font> can't be loaded, make sure that the image exists and the path is correct!";
                console.log(e);
                var i = {
                    text: n
                };
                r.dispatchEvent(t.LOAD_ERROR, i)
            };
            r.stopToLoad = function () {
                clearTimeout(r.loadImageId_to);
                if (r.image_img) {
                    r.image_img.onload = null;
                    r.image_img.onerror = null
                }
                if (r.navigatorImage_img) {
                    r.navigatorImage_img.onload = null;
                    r.navigatorImage_img.onerror = null
                }
            };
            r.loadNavigatorImage = function () {
                if (r.image_img) {
                    r.image_img.onload = null;
                    r.image_img.onerror = null
                }
                var e = r.navigatorImagePath_str;
                r.image_img = new Image;
                r.image_img.onload = r.onNavigatorImageLoadHandler;
                r.image_img.onerror = r.onNavigatorImageLoadErrorHandler;
                r.image_img.src = e
            };
            r.onNavigatorImageLoadHandler = function () {
                r.navigatorWidth = r.image_img.width;
                r.navigatorHeight = r.image_img.height;
                r.navigatorImage_img = r.image_img;
                r.loadMainImage();
                r.dispatchEvent(t.IMAGES_PROGRESS)
            };
            r.loadMainImage = function () {
                if (r.hasNavigatorError_bl) return;
                if (r.image_img) {
                    r.image_img.onload = null;
                    r.image_img.onerror = null
                }
                r.image_img = new Image;
                r.image_img.onload = r.onImageLoadHandler;
                r.image_img.onerror = r.onImageLoadErrorHandler;
                r.image_img.src = r.originalImagePath_str
            };
            r.onImageLoadHandler = function (e) {
                r.originalImage_img = r.image_img;
                r.dispatchEvent(t.IMAGES_LOAD_COMPLETE)
            };
            r.onLastNavigatorImageLoadHandler = function (e) {
                if (r == null) return;
                r.dispatchEvent(t.IMAGES_LOAD_COMPLETE)
            };
            r.onNavigatorImageLoadErrorHandler = function (e) {
                var n = "The navigator image with the label <font color='#FFFFFF'>" + r.navigatorImagePath_str + "</font> can't be loaded, make sure that the image exists and the path is correct!";
                r.hasNavigatorError_bl = true;
                var i = {
                    text: n
                };
                r.dispatchEvent(t.LOAD_ERROR, i);
                console.log(e)
            };
            r.onImageLoadErrorHandler = function (e) {
                var n = "The image with the label <font color='#FFFFFF'>" + r.originalImagePath_str + "</font> can't be loaded, make sure that the image exists and the path is correct!";
                console.log(e);
                var i = {
                    text: n
                };
                r.dispatchEvent(t.LOAD_ERROR, i)
            };
            r.checkForAttribute = function (e, n, i) {
                var s = FWDUtils.getChildFromNodeListFromAttribute(e, n);
                s = s ? FWDUtils.trim(FWDUtils.getAttributeValue(s, n)) : undefined;
                if (!s) {
                    if (i != undefined) {
                        r.dispatchEvent(t.LOAD_ERROR, {
                            text: "Element with attribute <font color='#FFFFFF'>" + n + "</font> is not defined at positon <font color='#FFFFFF'>" + (i + 1) + "</font>"
                        })
                    } else {
                        r.dispatchEvent(t.LOAD_ERROR, {
                            text: "Element with attribute <font color='#FFFFFF'>" + n + "</font> is not defined."
                        })
                    }
                    return
                }
                return s
            };
            r.showPropertyError = function (e) {
                r.dispatchEvent(t.LOAD_ERROR, {
                    text: "The property called <font color='#FFFFFF'>" + e + "</font> is not defined."
                })
            };
            r.showMarkerError = function (e, n) {
                r.dispatchEvent(t.LOAD_ERROR, {
                    text: "The marker at position <font color='#FFFFFF'>" + (n + 1) + "</font> dose not have defined an attribute <font color='#FFFFFF'>" + e + "</font>."
                })
            };
            r.showMarkerTypeError = function (e, n) {
                r.dispatchEvent(t.LOAD_ERROR, {
                    text: "Marker type is incorrect <font color='#FFFFFF'>" + e + "</font> at position <font color='#FFFFFF'>" + n + "</font>. Accepted types are <font color='#FFFFFF'>link, tooltip, infowindow</font>."
                })
            };
            r.destroy = function () {
                var e;
                clearTimeout(r.parseDelayId_to);
                clearTimeout(r.loadImageId_to);
                if (r.image_img) {
                    r.image_img.onload = null;
                    r.image_img.onerror = null;
                    r.image_img.src = null
                }
                if (r.navigatorImage_img) {
                    r.navigatorImage_img.onload = null;
                    r.navigatorImage_img.onerror = null;
                    r.navigatorImage_img.src = null
                }
                if (r.mainPreloader_img) r.mainPreloader_img.src = null;
                if (r.mainLightboxCloseButtonN_img) r.mainLightboxCloseButtonN_img.src = null;
                if (r.mainLightboxCloseButtonS_img) r.mainLightboxCloseButtonS_img.src = null;
                if (r.controllerBackgroundLeft_img) r.controllerBackgroundLeft_img.src = null;
                if (r.controllerBackgroundRight_img) r.controllerBackgroundRight_img.src = null;
                if (r.controllerMoveDownN_img) r.controllerMoveDownN_img.src = null;
                if (r.controllerMoveDownS_img) r.controllerMoveDownS_img.src = null;
                if (r.controllerMoveDownD_img) r.controllerMoveDownD_img.src = null;
                if (r.controllerMoveUpN_img) r.controllerMoveUpN_img.src = null;
                if (r.controllerMoveUpS_img) r.controllerMoveUpS_img.src = null;
                if (r.controllerMoveUpD_img) r.controllerMoveUpD_img.src = null;
                if (r.controllerNextN_img) r.controllerNextN_img.src = null;
                if (r.controllerNextS_img) r.controllerNextS_img.src = null;
                if (r.controllerNextD_img) r.controllerNextD_img.src = null;
                if (r.controllerPrevN_img) r.controllerPrevN_img.src = null;
                if (r.controllerPrevS_img) r.controllerPrevS_img.src = null;
                if (r.controllerPrevD_img) r.controllerPrevD_img.src = null;
                if (r.controllerHideMarkersN_img) r.controllerHideMarkersN_img.src = null;
                if (r.controllerHideMarkersS_img) r.controllerHideMarkersS_img.src = null;
                if (r.controllerShowMarkersN_img) r.controllerShowMarkersN_img.src = null;
                if (r.controllerShowMarkersS_img) r.controllerShowMarkersS_img.src = null;
                if (r.controllerInfoN_img) r.controllerInfoN_img.src = null;
                if (r.controllerHideN_img) r.controllerHideN_img.src = null;
                if (r.controllerHideS_img) r.controllerHideS_img.src = null;
                if (r.controllerShowN_img) r.controllerShowN_img.src = null;
                if (r.controllerShowS_img) r.controllerShowS_img.src = null;
                if (r.controllerFullScreenNormalN_img) r.controllerFullScreenNormalN_img.src = null;
                if (r.controllerFullScreenNormalS_img) r.controllerFullScreenNormalS_img.src = null;
                if (r.controllerFullScreenFullN_img) r.controllerFullScreenFullN_img.src = null;
                if (r.controllerFullScreenFullS_img) r.controllerFullScreenFullS_img.src = null;
                if (r.zoomInN_img) r.zoomInN_img.src = null;
                if (r.zoomInS_img) r.zoomInS_img.src = null;
                if (r.zoomOutN_img) r.zoomOutN_img.src = null;
                if (r.zoomOutS_img) r.zoomOutS_img.src = null;
                if (r.scrollBarHandlerN_img) r.scrollBarHandlerN_img.src = null;
                if (r.scrollBarHandlerN_img) r.scrollBarHandlerN_img.src = null;
                if (r.scrollBarHandlerS_img) r.scrollBarHandlerS_img.src = null;
                if (r.scrollBarLeft_img) r.scrollBarLeft_img.src = null;
                if (r.scrollBarLeft_img) r.scrollBarLeft_img.src = null;
                if (r.scrollBarRight_img) r.scrollBarRight_img.src = null;
                if (r.toolTipLeft_img) r.toolTipLeft_img.src = null;
                if (r.toolTipPointer_img) r.toolTipPointer_img.src = null;
                if (r.infoWindowCloseNormal_img) r.infoWindowCloseNormal_img.src = null;
                if (r.infoWindowCloseSelected_img) r.infoWindowCloseSelected_img.src = null;
                r.mainPreloader_img = null;
                r.mainLightboxCloseButtonN_img = null;
                r.mainLightboxCloseButtonS_img = null;
                r.controllerBackgroundLeft_img = null;
                r.controllerBackgroundRight_img = null;
                r.controllerMoveDownN_img = null;
                r.controllerMoveDownS_img = null;
                r.controllerMoveUpN_img = null;
                r.controllerMoveUpS_img = null;
                r.controllerNextN_img = null;
                r.controllerNextS_img = null;
                r.controllerPrevN_img = null;
                r.controllerPrevS_img = null;
                r.controllerHideMarkersN_img = null;
                r.controllerHideMarkersS_img = null;
                r.controllerShowMarkersN_img = null;
                r.controllerShowMarkersS_img = null;
                r.controllerInfoN_img = null;
                r.controllerInfoS_img = null;
                r.controllerHideN_img = null;
                r.controllerHideS_img = null;
                r.controllerShowN_img = null;
                r.controllerShowS_img = null;
                r.controllerFullScreenNormalN_img = null;
                r.controllerFullScreenNormalS_img = null;
                r.controllerFullScreenFullN_img = null;
                r.controllerFullScreenFullS_img = null;
                r.zoomInN_img = null;
                r.zoomInS_img = null;
                r.zoomOutN_img = null;
                r.zoomOutS_img = null;
                r.scrollBarHandlerN_img = null;
                r.scrollBarHandlerS_img = null;
                r.scrollBarLeft_img = null;
                r.scrollBarRight_img = null;
                r.toolTipLeft_img = null;
                r.toolTipPointer_img = null;
                r.infoWindowCloseNormal_img = null;
                r.infoWindowCloseSelected_img = null;
                this.props_obj = null;
                this.rootElement_el = null;
                this.skinPaths_ar = null;
                this.markersList_ar = null;
                this.toolTipWindows_ar = null;
                this.buttons_ar = null;
                this.buttonsLabels_ar = null;
                this.contextMenuLabels_ar = null;
                this.backgroundColor_str = null;
                this.handMovePath_str = null;
                this.handGrabPath_str = null;
                this.controllerBackgroundMiddlePath_str = null;
                this.scrollBarMiddlePath_str = null;
                this.controllerPosition_str = null;
                this.preloaderFontColor_str = null;
                this.preloaderBackgroundColor_str = null;
                this.preloaderText_str = null;
                this.buttonToolTipLeft_str = null;
                this.buttonToolTipMiddle_str = null;
                this.buttonToolTipRight_str = null;
                this.buttonToolTipBottomPointer_str = null;
                this.buttonToolTipTopPointer_str = null;
                this.buttonToolTipFontColor_str = null;
                this.contextMenuBackgroundColor_str = null;
                this.contextMenuBorderColor_str = null;
                this.contextMenuSpacerColor_str = null;
                this.contextMenuItemNormalColor_str = null;
                this.contextMenuItemSelectedColor_str = null;
                this.contextMenuItemSelectedColor_str = null;
                this.contextMenuItemDisabledColor_str = null;
                this.navigatorPosition_str = null;
                this.navigatorHandlerColor_str = null;
                this.navigatorBorderColor_str = null;
                this.infoText_str = null;
                this.infoWindowBackgroundColor_str = null;
                this.infoWindowScrollBarColor_str = null;
                i.destroy();
                r = null;
                i = null;
                t.prototype = null
            };
            r.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDEventDispatcher
    };
    t.prototype = null;
    t.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
    t.LOAD_DONE = "onLoadDone";
    t.LOAD_ERROR = "onLoadError";
    t.LIGHBOX_CLOSE_BUTTON_LOADED = "onLightBoxCloseButtonLoadDone";
    t.IMAGE_LOADED = "onImageLoaded";
    t.FIRST_IMAGE_LOAD_COMPLETE = "onFirstImageLoadComplete";
    t.IMAGES_LOAD_COMPLETE = "onImagesLoadComplete";
    t.SKIN_PROGRESS = "onSkinProgress";
    t.IMAGES_PROGRESS = "onImagesPogress";
    t.hasTouch_bl = false;
    e.FWDData = t
})(window);
(function (e) {
    var t = function (n, r) {
            var i = this;
            var s = t.prototype;
            this.infoWindowCloseNormal_img = r.infoWindowCloseNormal_img;
            this.infoWindowCloseSelected_img = r.infoWindowCloseSelected_img;
            this.close_do = null;
            this.background_sdo = null;
            this.mainContentHolder_do = null;
            this.dumyHolder_do = null;
            this.contentHolder_sdo = null;
            this.scrollBar_do = null;
            this.scrollBarTrack_sdo = null;
            this.scrollBarHandler_sdo = null;
            this.mainBackgroundColor_str = r.infoWindowBackgroundColor_str;
            this.scrollBarHandlerColor = r.infoWindowScrollBarColor_str;
            this.scrollBarTrackColor = r.infoWindowScrollBarColor_str;
            this.scrollBarTrackOpacity = .6;
            this.toolTipWindowId = "none";
            this.backgroundOpacity = r.infoWindowBackgroundOpacity;
            this.mainContentHolderWidth;
            this.mainContentHolderHeight;
            this.contentHolderHeight;
            this.scrollBarHandlerFinalY;
            this.mainContentFinalX = 0;
            this.mainContentFinalY = 0;
            this.contentFinalX = 0;
            this.contentFinalY = 0;
            this.headerFinalY = 0;
            this.contentHeight;
            this.maxWidth = 800;
            this.offestWidth = 20;
            this.offsetHeight = 20;
            this.stageWidth;
            this.stageHeight;
            this.scrollBarHeight = 0;
            this.scrollBarWidth = 4;
            this.scrollBarHandlerHeight;
            this.scrollBarBorderRadius = 15;
            this.yPositionOnPress;
            this.lastPresedY;
            this.closeButtonWidth = i.infoWindowCloseNormal_img.width;
            this.closeButtonHeight = i.infoWindowCloseNormal_img.height;
            this.vy = 0;
            this.vy2 = 0;
            this.friction = .9;
            this.hideWithDelayId_do;
            this.showOrHideWithDelayId_to;
            this.hideCompleteId_to;
            this.updateMobileScrollBarId_int;
            this.isShowed_bl = true;
            this.isDragging_bl = false;
            this.allowToScroll_bl = true;
            this.isMobile_bl = FWDUtils.isMobile;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            i.init = function () {
                i.setOverflow("visible");
                i.setBackfaceVisibility();
                i.setupMainContainers();
                if (i.isMobile_bl) {
                    i.setupMobileScrollbar()
                } else {
                    i.setupPCScrollBar();
                    i.addMouseWheelSupport()
                }
                i.setupCloseButton();
                i.hide(false)
            };
            i.resizeAndPosition = function () {
                if (i.stageWidth == n.stageWidth && i.stageHeight == n.stageHeight) return;
                i.stageWidth = n.stageWidth;
                i.stageHeight = n.stageHeight;
                i.background_sdo.setWidth(i.stageWidth);
                i.background_sdo.setHeight(i.stageHeight);
                i.updateSize()
            };
            i.setupMainContainers = function () {
                i.background_sdo = new FWDSimpleDisplayObject("div");
                i.background_sdo.setBkColor(i.mainBackgroundColor_str);
                i.addChild(i.background_sdo);
                i.mainContentHolder_do = new FWDDisplayObject("div");
                i.mainContentHolder_do.setBackfaceVisibility();
                i.dumyHolder_do = new FWDDisplayObject("div");
                i.dumyHolder_do.setBackfaceVisibility();
                i.addChild(i.dumyHolder_do);
                i.dumyHolder_do.addChild(i.mainContentHolder_do);
                i.contentHolder_sdo = new FWDSimpleDisplayObject("div");
                i.contentHolder_sdo.getStyle().fontSmoothing = "antialiased";
                i.contentHolder_sdo.getStyle().webkitFontSmoothing = "antialiased";
                i.contentHolder_sdo.getStyle().textRendering = "optimizeLegibility";
                if (!FWDUtils.isMobile || FWDUtils.isApple) {
                    i.contentHolder_sdo.hasTransform3d_bl = false;
                    i.contentHolder_sdo.hasTransform2d_bl = false
                }
                i.contentHolder_sdo.setBackfaceVisibility();
                i.mainContentHolder_do.addChild(i.contentHolder_sdo)
            };
            i.setupCloseButton = function () {
                FWDSimpleButton.setPrototype();
                i.close_do = new FWDSimpleButton(i.infoWindowCloseNormal_img, i.infoWindowCloseSelected_img);
                i.close_do.addListener(FWDSimpleButton.MOUSE_DOWN, i.closeButtonStartHandler);
                i.mainContentHolder_do.addChild(i.close_do)
            };
            i.closeButtonStartHandler = function (e) {
                if (!i.isShowed_bl) return;
                i.hide(true)
            };
            i.updateSize = function () {
                i.mainContentHolderWidth = i.stageWidth - i.offestWidth;
                if (i.mainContentHolderWidth > i.maxWidth) i.mainContentHolderWidth = i.maxWidth;
                i.mainContentHolder_do.setWidth(i.mainContentHolderWidth);
                i.setWidth(i.stageWidth);
                i.setHeight(i.stageHeight);
                i.dumyHolder_do.setWidth(i.stageWidth);
                i.dumyHolder_do.setHeight(i.stageHeight);
                i.close_do.setX(i.mainContentHolderWidth - i.closeButtonWidth);
                if (i.isMobile_bl) {
                    setTimeout(function () {
                        if (i == null) return;
                        TweenMax.killTweensOf(i.mainContentHolder_do);
                        i.contentHolderHeight = i.contentHolder_sdo.getHeight();
                        i.mainContentHolderHeight = Math.min(i.stageHeight, i.contentHolderHeight);
                        i.mainContentFinalX = Math.round((i.stageWidth - i.mainContentHolderWidth) / 2);
                        if (i.stageHeight > i.contentHolderHeight) {
                            i.mainContentFinalY = Math.round((i.stageHeight - i.contentHolderHeight) / 2);
                            i.allowToScroll_bl = false
                        } else {
                            i.mainContentFinalY = 0;
                            i.allowToScroll_bl = true
                        }
                        i.updateMobileScrollBarWithoutAnimation();
                        TweenMax.killTweensOf(i.mainContentHolder_do);
                        i.mainContentHolder_do.setX(i.mainContentFinalX);
                        i.mainContentHolder_do.setY(i.mainContentFinalY);
                        i.mainContentHolder_do.setHeight(i.mainContentHolderHeight)
                    }, 50)
                } else {
                    setTimeout(function () {
                        if (i == null) return;
                        TweenMax.killTweensOf(i.mainContentHolder_do);
                        i.contentHolderHeight = i.contentHolder_sdo.getHeight();
                        i.mainContentHolderHeight = i.stageHeight;
                        i.mainContentFinalX = Math.round((i.stageWidth - i.mainContentHolderWidth) / 2);
                        i.scrollBarHeight = Math.min(i.contentHolderHeight - 20 - i.closeButtonHeight, i.stageHeight - 20 - i.closeButtonHeight);
                        if (i.stageHeight > i.contentHolderHeight) {
                            i.scrollBar_do.setOverflow("hidden");
                            i.mainContentHolderHeight = i.contentHolderHeight;
                            i.scrollBarHandler_sdo.setY(0);
                            i.mainContentFinalY = Math.round((i.stageHeight - i.contentHolderHeight) / 2);
                            i.allowToScroll_bl = false
                        } else {
                            i.mainContentFinalY = 0;
                            i.scrollBar_do.setOverflow("visible");
                            i.scrollBar_do.setY(5 + i.closeButtonHeight);
                            i.allowToScroll_bl = true
                        }
                        if (i.stageHeight < 120) i.mainContentFinalY = 0;
                        i.scrollBarHandlerHeight = Math.min(i.scrollBarHeight - 20, i.stageHeight / i.contentHolderHeight * (i.scrollBarHeight - 20));
                        if (i.scrollBarHandlerHeight > 500) {
                            i.scrollBarHandlerHeight = 500
                        }
                        i.scrollBar_do.setX(i.mainContentHolderWidth - i.scrollBarWidth - 2);
                        i.scrollBarTrack_sdo.setHeight(Math.max(i.scrollBarHeight, i.scrollBarHandlerHeight));
                        i.scrollBarHandler_sdo.setHeight(i.scrollBarHandlerHeight);
                        TweenMax.killTweensOf(i.mainContentHolder_do);
                        i.mainContentHolder_do.setX(i.mainContentFinalX);
                        i.mainContentHolder_do.setY(i.mainContentFinalY);
                        i.mainContentHolder_do.setHeight(i.mainContentHolderHeight);
                        i.updatePCHandler(false)
                    }, 50)
                }
            };
            i.setText = function (e) {
                if (i == null) return;
                i.updateSize();
                i.contentHolder_sdo.setInnerHTML(e);
                setTimeout(i.updateSize, 120)
            };
            i.setupPCScrollBar = function () {
                i.scrollBar_do = new FWDDisplayObject("div");
                i.scrollBar_do.setOverflow("visible");
                i.mainContentHolder_do.addChild(i.scrollBar_do);
                i.scrollBarTrack_sdo = new FWDSimpleDisplayObject("div");
                i.scrollBarTrack_sdo.setWidth(i.scrollBarWidth);
                i.scrollBarTrack_sdo.setBkColor(i.scrollBarTrackColor);
                i.scrollBarTrack_sdo.setAlpha(0);
                i.scrollBarTrack_sdo.getStyle().borderRadius = i.scrollBarBorderRadius + "px";
                i.scrollBar_do.addChild(i.scrollBarTrack_sdo);
                i.scrollBarHandler_sdo = new FWDSimpleDisplayObject("div");
                i.scrollBarHandler_sdo.setButtonMode(true);
                i.scrollBarHandler_sdo.setWidth(i.scrollBarWidth);
                i.scrollBarHandler_sdo.getStyle().borderRadius = i.scrollBarBorderRadius + "px";
                i.scrollBarHandler_sdo.setBkColor(i.scrollBarHandlerColor);
                i.scrollBarHandler_sdo.setAlpha(.5);
                if (i.scrollBarHandler_sdo.screen.addEventListener) {
                    i.scrollBarHandler_sdo.screen.addEventListener("mouseover", i.scrollBarHandlerOnMouseOver);
                    i.scrollBarHandler_sdo.screen.addEventListener("mouseout", i.scrollBarHandlerOnMouseOut);
                    i.scrollBarHandler_sdo.screen.addEventListener("mousedown", i.scrollBarHandlerOnMouseDown)
                } else if (i.screen.attachEvent) {
                    i.scrollBarHandler_sdo.screen.attachEvent("onmouseover", i.scrollBarHandlerOnMouseOver);
                    i.scrollBarHandler_sdo.screen.attachEvent("onmouseout", i.scrollBarHandlerOnMouseOut);
                    i.scrollBarHandler_sdo.screen.attachEvent("onmousedown", i.scrollBarHandlerOnMouseDown)
                }
                i.scrollBar_do.addChild(i.scrollBarHandler_sdo)
            };
            i.scrollBarHandlerOnMouseOver = function () {
                TweenMax.to(i.scrollBarHandler_sdo, .2, {
                    alpha: 1,
                    w: 10
                });
                TweenMax.to(i.scrollBarTrack_sdo, .2, {
                    alpha: .4,
                    w: 10
                });
                TweenMax.to(i.scrollBar_do, .2, {
                    x: i.mainContentHolderWidth - i.scrollBarWidth - 6
                })
            };
            i.scrollBarHandlerOnMouseOut = function () {
                if (i.isDragging_bl) return;
                TweenMax.to(i.scrollBarHandler_sdo, .3, {
                    alpha: .5,
                    w: i.scrollBarWidth
                });
                TweenMax.to(i.scrollBarTrack_sdo, .3, {
                    alpha: 0,
                    w: i.scrollBarWidth
                });
                TweenMax.to(i.scrollBar_do, .3, {
                    x: i.mainContentHolderWidth - i.scrollBarWidth - 2
                })
            };
            i.scrollBarHandlerOnMouseDown = function (t) {
                if (!i.allowToScroll_bl) return;
                var n = FWDUtils.getViewportMouseCoordinates(t);
                i.isDragging_bl = true;
                i.yPositionOnPress = i.scrollBarHandler_sdo.getY();
                i.lastPresedY = n.screenY;
                if (e.addEventListener) {
                    e.addEventListener("mousemove", i.scrollBarHandlerMoveHandler);
                    e.addEventListener("mouseup", i.scrollBarHandlerEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", i.scrollBarHandlerMoveHandler);
                    document.attachEvent("onmouseup", i.scrollBarHandlerEndHandler)
                }
            };
            i.scrollBarHandlerMoveHandler = function (e) {
                if (e.preventDefault) e.preventDefault();
                var t = FWDUtils.getViewportMouseCoordinates(e);
                i.scrollBarHandlerFinalY = Math.round(i.yPositionOnPress + t.screenY - i.lastPresedY);
                if (i.scrollBarHandlerFinalY >= i.scrollBarHeight - i.scrollBarHandlerHeight) {
                    i.scrollBarHandlerFinalY = i.scrollBarHeight - i.scrollBarHandlerHeight
                }
                if (i.scrollBarHandlerFinalY <= 0) i.scrollBarHandlerFinalY = 0;
                i.scrollBarHandler_sdo.setY(i.scrollBarHandlerFinalY);
                i.updatePCHandler(true)
            };
            i.scrollBarHandlerEndHandler = function (t) {
                var n = FWDUtils.getViewportMouseCoordinates(t);
                i.isDragging_bl = false;
                if (!FWDUtils.hitTest(i.scrollBarHandler_sdo.screen, n.screenX, n.screenY)) {
                    i.scrollBarHandlerOnMouseOut()
                }
                if (e.removeEventListener) {
                    e.removeEventListener("mousemove", i.scrollBarHandlerMoveHandler);
                    e.removeEventListener("mouseup", i.scrollBarHandlerEndHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousemove", i.scrollBarHandlerMoveHandler);
                    document.detachEvent("onmouseup", i.scrollBarHandlerEndHandler)
                }
            };
            i.updatePCHandler = function (e) {
                var t;
                var n;
                n = i.scrollBarHandlerFinalY / (i.scrollBarHeight - i.scrollBarHandlerHeight);
                if (n == "Infinity") n = 0;
                if (n >= 1) n = 1;
                if (i.isDragging_bl) {
                    i.contentFinalY = parseInt(n * (i.stageHeight - i.contentHolderHeight))
                } else {
                    if (i.scrollBarHandler_sdo.getY() < 0) {
                        i.scrollBarHandler_sdo.setY(0)
                    } else if (i.scrollBarHandler_sdo.getY() > i.scrollBarHeight - i.scrollBarHandlerHeight) {
                        i.scrollBarHandler_sdo.setY(i.scrollBarHeight - i.scrollBarHandlerHeight)
                    }
                    t = i.scrollBarHandler_sdo.getY() / (i.scrollBarHeight - i.scrollBarHandlerHeight);
                    if (isNaN(t)) t = 0;
                    if (i.stageHeight > i.contentHolderHeight) {
                        i.contentFinalY = 0
                    } else {
                        i.contentFinalY = Math.round(t * (i.scrollBarHeight - i.scrollBarHandlerHeight));
                        i.contentFinalY = Math.round(t * (i.stageHeight - i.contentHolderHeight))
                    }
                }
                if (e) {
                    TweenMax.to(i.contentHolder_sdo, .3, {
                        y: Math.round(i.contentFinalY)
                    })
                } else {
                    i.contentHolder_sdo.setY(Math.round(i.contentFinalY))
                }
            };
            i.addMouseWheelSupport = function () {
                if (e.addEventListener) {
                    i.screen.addEventListener("mousewheel", i.mouseWheelHandler);
                    i.screen.addEventListener("DOMMouseScroll", i.mouseWheelHandler)
                } else if (document.attachEvent) {
                    i.screen.attachEvent("onmousewheel", i.mouseWheelHandler)
                }
            };
            this.mouseWheelHandler = function (e) {
                if (!i.isShowed_bl) return;
                if (i.isDragging_bl) return;
                if (i.stageHeight > i.contentHolderHeight) return;
                var t = i.stageHeight / i.contentHolderHeight;
                var n = e.detail || e.wheelDelta;
                if (e.wheelDelta) n *= -1;
                if (FWDUtils.isOpera) n *= -1;
                if (n > 0) {
                    i.scrollBarHandler_sdo.setY(i.scrollBarHandler_sdo.getY() + 45 * t)
                } else if (n < 0) {
                    i.scrollBarHandler_sdo.setY(i.scrollBarHandler_sdo.getY() - 45 * t)
                }
                i.updatePCHandler(true);
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    return false
                }
                return
            };
            i.setupMobileScrollbar = function () {
                if (i.hasPointerEvent_bl) {
                    i.screen.addEventListener("MSPointerDown", i.scrollBarTouchStartHandler)
                } else {
                    i.screen.addEventListener("touchstart", i.scrollBarTouchStartHandler)
                }
            };
            i.scrollBarTouchStartHandler = function (t) {
                if (!i.allowToScroll_bl) return;
                var n = FWDUtils.getViewportMouseCoordinates(t);
                i.isDragging_bl = true;
                i.lastPresedY = n.screenY;
                if (i.hasPointerEvent_bl) {
                    e.addEventListener("MSPointerUp", i.scrollBarTouchEndHandler);
                    e.addEventListener("MSPointerMove", i.scrollBarTouchMoveHandler)
                } else {
                    e.addEventListener("touchend", i.scrollBarTouchEndHandler);
                    e.addEventListener("touchmove", i.scrollBarTouchMoveHandler)
                }
            };
            i.scrollBarTouchMoveHandler = function (e) {
                if (e.preventDefault) e.preventDefault();
                var t = FWDUtils.getViewportMouseCoordinates(e);
                var n = t.screenY - i.lastPresedY;
                i.contentFinalY += n;
                i.contentFinalY = Math.round(i.contentFinalY);
                i.contentHolder_sdo.setY(i.contentFinalY);
                i.lastPresedY = t.screenY;
                i.vy = n * 2
            };
            i.scrollBarTouchEndHandler = function (t) {
                i.isDragging_bl = false;
                if (i.hasPointerEvent_bl) {
                    e.removeEventListener("MSPointerUp", i.scrollBarTouchEndHandler);
                    e.removeEventListener("MSPointerMove", i.scrollBarTouchMoveHandler)
                } else {
                    e.removeEventListener("touchend", i.scrollBarTouchEndHandler);
                    e.removeEventListener("touchmove", i.scrollBarTouchMoveHandler)
                }
            };
            i.updateMobileScrollBar = function (e) {
                if (!i.isDragging_bl) {
                    i.vy *= i.friction;
                    i.contentFinalY += i.vy;
                    if (i.contentFinalY > 0) {
                        i.vy2 = (0 - i.contentFinalY) * .3;
                        i.vy *= i.friction;
                        i.contentFinalY += i.vy2
                    } else if (i.contentFinalY < i.mainContentHolderHeight - i.contentHolderHeight) {
                        i.vy2 = (i.mainContentHolderHeight - i.contentHolderHeight - i.contentFinalY) * .3;
                        i.vy *= i.friction;
                        i.contentFinalY += i.vy2
                    }
                    i.contentHolder_sdo.setY(Math.round(i.contentFinalY))
                }
            };
            i.updateMobileScrollBarWithoutAnimation = function () {
                if (i.contentFinalY > 0) {
                    i.contentFinalY = 0
                } else if (i.contentFinalY < i.mainContentHolderHeight - i.contentHolderHeight) {
                    i.contentFinalY = i.mainContentHolderHeight - i.contentHolderHeight
                }
                i.contentHolder_sdo.setY(Math.round(i.contentFinalY))
            };
            i.activateScrollBar = function () {
                if (i.isMobile_bl) {
                    i.updateMobileScrollBarId_int = setInterval(i.updateMobileScrollBar, 16)
                }
            };
            i.show = function (e) {
                if (i.isShowed_bl) return;
                i.isShowed_bl = true;
                i.resizeAndPosition();
                i.setText(e);
                i.activateScrollBar();
                if (FWDUtils.isMobile) {
                    TweenMax.to(i.background_sdo, .6, {
                        alpha: i.backgroundOpacity,
                        delay: .2
                    });
                    i.showOrHideWithDelayId_to = setTimeout(i.showWithDelay, 1800)
                } else {
                    TweenMax.to(i.background_sdo, .6, {
                        alpha: i.backgroundOpacity
                    });
                    i.showOrHideWithDelayId_to = setTimeout(i.showWithDelay, 800)
                }
                i.dispatchEvent(t.SHOW_START)
            };
            i.showWithDelay = function () {
                i.dumyHolder_do.setX(0);
                if (i.scrollBarHandler_sdo) i.scrollBarHandler_sdo.setVisible(true);
                i.mainContentHolder_do.setY(-i.mainContentHolderHeight);
                TweenMax.to(i.mainContentHolder_do, .6, {
                    y: i.mainContentFinalY,
                    ease: Expo.easeInOut
                });
                if (!i.isMobile_bl) setTimeout(function () {
                    i.scrollBarHandler_sdo.setAlpha(.5);
                    if (i.close_do.s_do) i.close_do.s_do.setAlpha(0)
                }, 400)
            };
            i.hide = function (e, t) {
                if (!i.isShowed_bl && !t) return;
                TweenMax.killTweensOf(i.background_sdo);
                if (e) {
                    TweenMax.to(i.mainContentHolder_do, .6, {
                        y: i.stageHeight,
                        ease: Expo.easeInOut
                    });
                    i.showOrHideWithDelayId_to = setTimeout(i.hideWithDelay, 800)
                } else {
                    i.dumyHolder_do.setX(-3e3);
                    if (i.scrollBarHandler_sdo) i.scrollBarHandler_sdo.setVisible(false);
                    i.background_sdo.setAlpha(0)
                }
                clearInterval(i.updateMobileScrollBarId_int);
                i.isShowed_bl = false
            };
            i.hideWithDelay = function () {
                i.contentHolder_sdo.setInnerHTML("");
                TweenMax.to(i.background_sdo, .6, {
                    alpha: 0
                });
                i.hideCompleteId_to = setTimeout(i.hideWithDelayComplete, 600)
            };
            i.hideWithDelayComplete = function () {
                i.contentFinalY = 0;
                if (i.scrollBarHandler_sdo) i.scrollBarHandler_sdo.setY(0);
                i.dispatchEvent(t.HIDE_COMPLETE)
            };
            i.cleanMainEvents = function () {
                if (i.screen.removeEventListener) {
                    if (i.scrollBarHandler_sdo) {
                        i.scrollBarHandler_sdo.screen.removeEventListener("mouseover", i.scrollBarHandlerOnMouseOver);
                        i.scrollBarHandler_sdo.screen.removeEventListener("mouseout", i.scrollBarHandlerOnMouseOut);
                        i.scrollBarHandler_sdo.screen.removeEventListener("mousedown", i.scrollBarHandlerOnMouseDown)
                    }
                    e.removeEventListener("mousemove", i.scrollBarHandlerMoveHandler);
                    e.removeEventListener("mouseup", i.scrollBarHandlerEndHandler);
                    i.screen.removeEventListener("mousewheel", i.mouseWheelHandler);
                    i.screen.removeEventListener("DOMMouseScroll", i.mouseWheelHandler);
                    i.screen.addEventListener("MSPointerDown", i.scrollBarTouchStartHandler);
                    i.screen.addEventListener("touchstart", i.scrollBarTouchStartHandler);
                    e.removeEventListener("MSPointerUp", i.scrollBarTouchEndHandler);
                    e.removeEventListener("MSPointerMove", i.scrollBarTouchMoveHandler);
                    e.removeEventListener("touchend", i.scrollBarTouchEndHandler);
                    e.removeEventListener("touchmove", i.scrollBarTouchMoveHandler)
                } else if (i.screen.detachEvent) {
                    i.scrollBarHandler_sdo.screen.detachEvent("onmouseover", i.scrollBarHandlerOnMouseOver);
                    i.scrollBarHandler_sdo.screen.detachEvent("onmouseout", i.scrollBarHandlerOnMouseOut);
                    i.scrollBarHandler_sdo.screen.detachEvent("onmousedown", i.scrollBarHandlerOnMouseDown);
                    document.detachEvent("onmousemove", i.scrollBarHandlerMoveHandler);
                    document.detachEvent("onmouseup", i.scrollBarHandlerEndHandler);
                    i.screen.detachEvent("onmousewheel", i.mouseWheelHandler)
                }
                clearTimeout(i.hideWithDelayId_do);
                clearTimeout(i.showOrHideWithDelayId_to);
                clearTimeout(i.hideCompleteId_to);
                clearInterval(i.updateMobileScrollBarId_int)
            };
            i.destroy = function () {
                i.cleanMainEvents();
                if (i.scrollBar_do) {
                    TweenMax.killTweensOf(i.scrollBar_do);
                    TweenMax.killTweensOf(i.scrollBarHandler_sdo);
                    TweenMax.killTweensOf(i.scrollBarTrack_sdo);
                    i.scrollBar_do.destroy();
                    i.scrollBarHandler_sdo.destroy();
                    i.scrollBarTrack_sdo.destroy()
                }
                TweenMax.killTweensOf(i.contentHolder_sdo);
                i.contentHolder_sdo.destroy();
                TweenMax.killTweensOf(i.background_sdo);
                i.background_sdo.destroy();
                TweenMax.killTweensOf(i.mainContentHolder_do);
                i.mainContentHolder_do.destroy();
                i.close_do.destroy();
                i.infoWindowCloseNormal_img = null;
                i.infoWindowCloseSelected_img = null;
                i.close_do = null;
                i.background_sdo = null;
                i.mainContentHolder_do = null;
                i.contentHolder_sdo = null;
                i.scrollBar_do = null;
                i.scrollBarTrack_sdo = null;
                i.scrollBarHandler_sdo = null;
                i.mainBackgroundColor_str = null;
                i.scrollBarHandlerColor = null;
                i.scrollBarTrackColor = null;
                i.scrollBarTrackOpacity = null;
                n = null;
                r = null;
                i.setInnerHTML("");
                s.destroy();
                i = null;
                s = null;
                t.prototype = null
            };
            i.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.HIDE_COMPLETE = "hideComplete";
    t.SHOW_START = "showStart";
    t.prototype = null;
    e.FWDDescriptionWindow = t
})(window);
(function (e) {
    var t = function (e, t, n, r) {
            var i = this;
            i.listeners = {
                events_ar: []
            };
            if (e == "div" || e == "img" || e == "canvas") {
                i.type = e
            } else {
                throw Error("Type is not valid! " + e)
            }
            this.children_ar = [];
            this.style;
            this.screen;
            this.transform;
            this.position = t || "absolute";
            this.overflow = n || "hidden";
            this.display = r || "inline-block";
            this.visible = true;
            this.buttonMode;
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
            this.rect;
            this.alpha = 1;
            this.innerHTML = "";
            this.opacityType = "";
            this.isHtml5_bl = false;
            this.hasTransform3d_bl = FWDUtils.hasTransform3d;
            this.hasTransform2d_bl = FWDUtils.hasTransform2d;
            if (FWDUtils.isFirefox) i.hasTransform3d_bl = false;
            if (FWDUtils.isFirefox) i.hasTransform2d_bl = false;
            this.hasBeenSetSelectable_bl = false;
            i.init = function () {
                i.setScreen()
            };
            i.getTransform = function () {
                var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
                var t;
                while (t = e.shift()) {
                    if (typeof i.screen.style[t] !== "undefined") {
                        return t
                    }
                }
                return false
            };
            i.getOpacityType = function () {
                var e;
                if (typeof i.screen.style.opacity != "undefined") {
                    e = "opacity"
                } else {
                    e = "filter"
                }
                return e
            };
            i.setScreen = function (e) {
                if (i.type == "img" && e) {
                    i.screen = e;
                    i.setMainProperties()
                } else {
                    i.screen = document.createElement(i.type);
                    i.setMainProperties()
                }
            };
            i.setMainProperties = function () {
                i.transform = i.getTransform();
                i.setPosition(i.position);
                i.setDisplay(i.display);
                i.setOverflow(i.overflow);
                i.opacityType = i.getOpacityType();
                if (i.opacityType == "opacity") i.isHtml5_bl = true;
                if (i.opacityType == "filter") i.screen.style.filter = "inherit";
                i.screen.style.left = "0px";
                i.screen.style.top = "0px";
                i.screen.style.margin = "0px";
                i.screen.style.padding = "0px";
                i.screen.style.maxWidth = "none";
                i.screen.style.maxHeight = "none";
                i.screen.style.border = "none";
                i.screen.style.lineHeight = "1";
                i.screen.style.backgroundColor = "transparent";
                i.screen.style.backfaceVisibility = "hidden";
                i.screen.style.webkitBackfaceVisibility = "hidden";
                i.screen.style.MozBackfaceVisibility = "hidden";
                i.screen.style.MozImageRendering = "optimizeSpeed";
                i.screen.style.WebkitImageRendering = "optimizeSpeed";
                if (e == "img") {
                    i.setWidth(i.screen.width);
                    i.setHeight(i.screen.height)
                }
            };
            i.setBackfaceVisibility = function () {
                i.screen.style.backfaceVisibility = "visible";
                i.screen.style.webkitBackfaceVisibility = "visible";
                i.screen.style.MozBackfaceVisibility = "visible"
            };
            i.setSelectable = function (e) {
                if (!e) {
                    i.screen.style.userSelect = "none";
                    i.screen.style.MozUserSelect = "none";
                    i.screen.style.webkitUserSelect = "none";
                    i.screen.style.khtmlUserSelect = "none";
                    i.screen.style.oUserSelect = "none";
                    i.screen.style.msUserSelect = "none";
                    i.screen.msUserSelect = "none";
                    i.screen.ondragstart = function (e) {
                        return false
                    };
                    i.screen.onselectstart = function () {
                        return false
                    };
                    i.screen.ontouchstart = function () {
                        return false
                    };
                    i.screen.style.webkitTouchCallout = "none";
                    i.hasBeenSetSelectable_bl = true
                }
            };
            i.getScreen = function () {
                return i.screen
            };
            i.setVisible = function (e) {
                i.visible = e;
                if (i.visible == true) {
                    i.screen.style.visibility = "visible"
                } else {
                    i.screen.style.visibility = "hidden"
                }
            };
            i.getVisible = function () {
                return i.visible
            };
            i.setResizableSizeAfterParent = function () {
                i.screen.style.width = "100%";
                i.screen.style.height = "100%"
            };
            i.getStyle = function () {
                return i.screen.style
            };
            i.setOverflow = function (e) {
                i.overflow = e;
                i.screen.style.overflow = i.overflow
            };
            i.setPosition = function (e) {
                i.position = e;
                i.screen.style.position = i.position
            };
            i.setDisplay = function (e) {
                i.display = e;
                i.screen.style.display = i.display
            };
            i.setButtonMode = function (e) {
                i.buttonMode = e;
                if (i.buttonMode == true) {
                    i.screen.style.cursor = "pointer"
                } else {
                    i.screen.style.cursor = "default"
                }
            };
            i.setBkColor = function (e) {
                i.screen.style.backgroundColor = e
            };
            i.setInnerHTML = function (e) {
                i.innerHTML = e;
                i.screen.innerHTML = i.innerHTML
            };
            i.getInnerHTML = function () {
                return i.innerHTML
            };
            i.getRect = function () {
                return i.screen.getBoundingClientRect()
            };
            i.setAlpha = function (e) {
                i.alpha = e;
                if (i.opacityType == "opacity") {
                    i.screen.style.opacity = i.alpha
                } else if (i.opacityType == "filter") {
                    i.screen.style.filter = "alpha(opacity=" + i.alpha * 100 + ")";
                    i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(i.alpha * 100) + ")"
                }
            };
            i.getAlpha = function () {
                return i.alpha
            };
            i.getRect = function () {
                return i.screen.getBoundingClientRect()
            };
            i.getGlobalX = function () {
                return i.getRect().left
            };
            i.getGlobalY = function () {
                return i.getRect().top
            };
            i.setX = function (e) {
                i.x = e;
                if (i.hasTransform3d_bl) {
                    i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
                } else if (i.hasTransform2d_bl) {
                    i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
                } else {
                    i.screen.style.left = i.x + "px"
                }
            };
            i.getX = function () {
                return i.x
            };
            i.setY = function (e) {
                i.y = e;
                if (i.hasTransform3d_bl) {
                    i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
                } else if (i.hasTransform2d_bl) {
                    i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
                } else {
                    i.screen.style.top = i.y + "px"
                }
            };
            i.getY = function () {
                return i.y
            };
            i.setWidth = function (e) {
                i.w = e;
                if (i.type == "img") {
                    i.screen.width = i.w
                } else {
                    i.screen.style.width = i.w + "px"
                }
            };
            i.getWidth = function () {
                if (i.type == "div") {
                    if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                    return i.w
                } else if (i.type == "img") {
                    if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                    if (i.screen.width != 0) return i.screen.width;
                    return i._w
                } else if (i.type == "canvas") {
                    if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                    return i.w
                }
            };
            i.setHeight = function (e) {
                i.h = e;
                if (i.type == "img") {
                    i.screen.height = i.h
                } else {
                    i.screen.style.height = i.h + "px"
                }
            };
            i.getHeight = function () {
                if (i.type == "div") {
                    if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                    return i.h
                } else if (i.type == "img") {
                    if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                    if (i.screen.height != 0) return i.screen.height;
                    return i.h
                } else if (i.type == "canvas") {
                    if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                    return i.h
                }
            };
            i.addChild = function (e) {
                if (i.contains(e)) {
                    i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1);
                    i.children_ar.push(e);
                    i.screen.appendChild(e.screen)
                } else {
                    i.children_ar.push(e);
                    i.screen.appendChild(e.screen)
                }
            };
            i.removeChild = function (e) {
                if (i.contains(e)) {
                    i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1);
                    i.screen.removeChild(e.screen)
                } else {
                    throw Error("##removeChild()## Child dose't exist, it can't be removed!")
                }
            };
            i.contains = function (e) {
                if (FWDUtils.indexOfArray(i.children_ar, e) == -1) {
                    return false
                } else {
                    return true
                }
            };
            i.addChildAt = function (e, t) {
                if (i.getNumChildren() == 0) {
                    i.children_ar.push(e);
                    i.screen.appendChild(e.screen)
                } else if (t == 1) {
                    i.screen.insertBefore(e.screen, i.children_ar[0].screen);
                    i.screen.insertBefore(i.children_ar[0].screen, e.screen);
                    if (i.contains(e)) {
                        i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1, e)
                    } else {
                        i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 0, e)
                    }
                } else {
                    if (t < 0 || t > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                    i.screen.insertBefore(e.screen, i.children_ar[t].screen);
                    if (i.contains(e)) {
                        i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1, e)
                    } else {
                        i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 0, e)
                    }
                }
            };
            i.getChildAt = function (e) {
                if (e < 0 || e > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                if (i.getNumChildren() == 0) throw Errror("##getChildAt## Child dose not exist!");
                return i.children_ar[e]
            };
            i.removeChildAtZero = function () {
                i.screen.removeChild(i.children_ar[0].screen);
                i.children_ar.shift()
            };
            i.getNumChildren = function () {
                return i.children_ar.length
            };
            i.addListener = function (e, t) {
                if (e == undefined) throw Error("type is required.");
                if (typeof e === "object") throw Error("type must be of type String.");
                if (typeof t != "function") throw Error("listener must be of type Function.");
                var n = {};
                n.type = e;
                n.listener = t;
                n.target = this;
                this.listeners.events_ar.push(n)
            };
            i.dispatchEvent = function (e, t) {
                if (this.listeners == null) return;
                if (e == undefined) throw Error("type is required.");
                if (typeof e === "object") throw Error("type must be of type String.");
                for (var n = 0, r = this.listeners.events_ar.length; n < r; n++) {
                    if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e) {
                        if (t) {
                            for (var i in t) {
                                this.listeners.events_ar[n][i] = t[i]
                            }
                        }
                        this.listeners.events_ar[n].listener.call(this, this.listeners.events_ar[n])
                    }
                }
            };
            i.removeListener = function (e, t) {
                if (e == undefined) throw Error("type is required.");
                if (typeof e === "object") throw Error("type must be of type String.");
                if (typeof t != "function") throw Error("listener must be of type Function." + e);
                for (var n = 0, r = this.listeners.events_ar.length; n < r; n++) {
                    if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e && this.listeners.events_ar[n].listener === t) {
                        this.listeners.events_ar.splice(n, 1);
                        break
                    }
                }
            };
            i.disposeImage = function () {
                if (i.type == "img") i.screen.src = null
            };
            i.destroy = function () {
                if (i.hasBeenSetSelectable_bl) {
                    i.screen.ondragstart = null;
                    i.screen.onselectstart = null;
                    i.screen.ontouchstart = null
                }
                i.screen.removeAttribute("style");
                i.listeners = [];
                i.listeners = null;
                i.children_ar = [];
                i.children_ar = null;
                i.style = null;
                i.screen = null;
                i.transform = null;
                i.position = null;
                i.overflow = null;
                i.display = null;
                i.visible = null;
                i.buttonMode = null;
                i.x = null;
                i.y = null;
                i.w = null;
                i.h = null;
                i.rect = null;
                i.alpha = null;
                i.innerHTML = null;
                i.opacityType = null;
                i.isHtml5_bl = null;
                i.hasTransform3d_bl = null;
                i.hasTransform2d_bl = null;
                i = null
            };
            i.init()
        };
    e.FWDDisplayObject = t
})(window);
(function () {
    var e = function () {
            this.listeners = {
                events_ar: []
            };
            this.addListener = function (e, t) {
                if (e == undefined) throw Error("type is required.");
                if (typeof e === "object") throw Error("type must be of type String.");
                if (typeof t != "function") throw Error("listener must be of type Function.");
                var n = {};
                n.type = e;
                n.listener = t;
                n.target = this;
                this.listeners.events_ar.push(n)
            };
            this.dispatchEvent = function (e, t) {
                if (this.listeners == null) return;
                if (e == undefined) throw Error("type is required.");
                if (typeof e === "object") throw Error("type must be of type String.");
                for (var n = 0, r = this.listeners.events_ar.length; n < r; n++) {
                    if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e) {
                        if (t) {
                            for (var i in t) {
                                this.listeners.events_ar[n][i] = t[i]
                            }
                        }
                        this.listeners.events_ar[n].listener.call(this, this.listeners.events_ar[n])
                    }
                }
            };
            this.removeListener = function (e, t) {
                if (e == undefined) throw Error("type is required.");
                if (typeof e === "object") throw Error("type must be of type String.");
                if (typeof t != "function") throw Error("listener must be of type Function." + e);
                for (var n = 0, r = this.listeners.events_ar.length; n < r; n++) {
                    if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e && this.listeners.events_ar[n].listener === t) {
                        this.listeners.events_ar.splice(n, 1);
                        break
                    }
                }
            };
            this.destroy = function () {
                this.listeners = null;
                this.addListener = null;
                this.dispatchEvent = null;
                this.removeListener = null
            }
        };
    window.FWDEventDispatcher = e
})(window);
(function (e) {
    var t = function (e, n, r) {
            var i = this;
            var s = t.prototype;
            this.screenToTest = n;
            this.hideDelay = r;
            this.globalX = 0;
            this.globalY = 0;
            this.currentTime;
            this.checkIntervalId_int;
            this.dispatchOnceShow_bl = true;
            this.dispatchOnceHide_bl = false;
            this.isMobile_bl = e;
            this.isStopped_bl = true;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            i.init = function () {};
            i.start = function () {
                i.currentTime = (new Date).getTime();
                i.checkIntervalId_int = setInterval(i.update, 100);
                i.addMouseOrTouchCheck();
                i.isStopped_bl = false
            };
            i.stop = function () {
                clearInterval(i.checkIntervalId_int);
                i.isStopped_bl = true;
                i.removeMouseOrTouchCheck()
            };
            i.addMouseOrTouchCheck = function () {
                if (i.isMobile_bl) {
                    if (i.hasPointerEvent_bl) {
                        i.screenToTest.screen.addEventListener("MSPointerDown", i.onMouseOrTouchUpdate);
                        i.screenToTest.screen.addEventListener("MSPointerMove", i.onMouseOrTouchUpdate)
                    } else {
                        i.screenToTest.screen.addEventListener("touchstart", i.onMouseOrTouchUpdate)
                    }
                } else if (i.screenToTest.screen.addEventListener) {
                    i.screenToTest.screen.addEventListener("mousemove", i.onMouseOrTouchUpdate)
                } else if (i.screenToTest.screen.attachEvent) {
                    i.screenToTest.screen.attachEvent("onmousemove", i.onMouseOrTouchUpdate)
                }
            };
            i.removeMouseOrTouchCheck = function () {
                if (i.isMobile_bl) {
                    if (i.hasPointerEvent_bl) {
                        i.screenToTest.screen.removeEventListener("MSPointerDown", i.onMouseOrTouchUpdate);
                        i.screenToTest.screen.removeEventListener("MSPointerMove", i.onMouseOrTouchUpdate)
                    } else {
                        i.screenToTest.screen.removeEventListener("touchstart", i.onMouseOrTouchUpdate)
                    }
                } else if (i.screenToTest.screen.removeEventListener) {
                    i.screenToTest.screen.removeEventListener("mousemove", i.onMouseOrTouchUpdate)
                } else if (i.screenToTest.screen.detachEvent) {
                    i.screenToTest.screen.detachEvent("onmousemove", i.onMouseOrTouchUpdate)
                }
            };
            i.onMouseOrTouchUpdate = function (e) {
                var t = FWDUtils.getViewportMouseCoordinates(e);
                i.currentTime = (new Date).getTime();
                i.globalX = t.screenX;
                i.globalY = t.screenY
            };
            i.update = function (e) {
                if ((new Date).getTime() > i.currentTime + i.hideDelay) {
                    if (i.dispatchOnceShow_bl) {
                        i.dispatchEvent(t.HIDE);
                        i.dispatchOnceHide_bl = true;
                        i.dispatchOnceShow_bl = false
                    }
                } else {
                    if (i.dispatchOnceHide_bl) {
                        i.dispatchEvent(t.SHOW);
                        i.dispatchOnceHide_bl = false;
                        i.dispatchOnceShow_bl = true
                    }
                }
            };
            i.reset = function () {
                i.currentTime = (new Date).getTime();
                i.dispatchEvent(t.SHOW)
            };
            i.destroy = function () {
                i.removeMouseOrTouchCheck();
                clearInterval(i.checkIntervalId_int);
                i.screenToTest = null;
                n = null;
                i.init = null;
                i.start = null;
                i.stop = null;
                i.addMouseOrTouchCheck = null;
                i.removeMouseOrTouchCheck = null;
                i.onMouseOrTouchUpdate = null;
                i.update = null;
                i.reset = null;
                i.destroy = null;
                s.destroy();
                s = null;
                i = null;
                t.prototype = null
            };
            i.init()
        };
    t.HIDE = "hide";
    t.SHOW = "show";
    t.setPrototype = function () {
        t.prototype = new FWDEventDispatcher
    };
    e.FWDHider = t
})(window);
(function () {
    var e = function (t, n) {
            var r = this;
            var i = e.prototype;
            this.originalImage_img;
            this.toolTipLeft_img = t.toolTipLeft_img;
            this.toolTipPointer_img = t.toolTipPointer_img;
            this.markers_ar = [];
            this.toolTipWindows_ar = [];
            this.toolTipDataWindows_ar = t.toolTipWindows_ar;
            this.markersList_ar = t.markersList_ar;
            this.markersPosition_ar = t.markersPosition_ar;
            this.largeImagesPaths_ar = t.largeImagesPaths_ar;
            this.curMarker_do;
            this.markersToolTip_do;
            this.markersToolTipWindow_do;
            this.hider;
            this.dumy_sdo;
            this.slicesHolder_do;
            this.smallImage_sdo;
            this.markersPositionInfo_sdo;
            this.handMovePath_str = t.handMovePath_str;
            this.handGrabPath_str = t.handGrabPath_str;
            this.backgroundColor_str = n.backgroundColor_str;
            this.draggingMode_str = t.startDraggingMode_str;
            this.controllerPosition_str = t.controllerPosition_str;
            this.buttonToolTipLeft_str = t.buttonToolTipLeft_str;
            this.buttonToolTipMiddle_str = t.buttonToolTipMiddle_str;
            this.buttonToolTipRight_str = t.buttonToolTipRight_str;
            this.buttonToolTipFontColor_str = t.buttonToolTipFontColor_str;
            this.buttonToolTipBottomPointer_str = t.buttonToolTipBottomPointer_str;
            this.buttonToolTipTopPointer_str = t.buttonToolTipTopPointer_str;
            this.lastMarkerId_str;
            this.curId = 0;
            this.prevId = 1e3;
            this.curLargeImageId = 1e3;
            this.totalImages = t.totalImages;
            this.totalToolTipsWindows = r.toolTipDataWindows_ar.length;
            this.stageWidth;
            this.stageHeight;
            this.smallestPossibleScale;
            this.currentScale = undefined;
            this.sliceCurrentScale = 1;
            this.prevScale = 0;
            this.percentZoomed = .1;
            this.imageWidth;
            this.imageHeight;
            this.doubleClickZoomFactor = t.doubleClickZoomFactor;
            this.zoomFactor = t.zoomFactor;
            this.startZoomFactor = t.startZoomFactor;
            this.zoomSpeed = t.zoomSpeed;
            this.finalX = 0;
            this.finalY = 0;
            this.xPositionOnPress;
            this.yPositionOnPress;
            this.lastPresedX = 0;
            this.lastPresedY = 0;
            this.lastPresedX2 = 0;
            this.lastPresedY2 = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.controllerHeight = t.controllerHeight;
            this.controllerOffsetY = t.controllerOffsetY;
            this.rotationSpeed = Math.abs(-1.1 + t.dragRotationSpeed);
            this.startScaleForMobileZoom;
            this.totalMarkers;
            this.globalX;
            this.globalY;
            this.markerToolTipOffsetY = t.markerToolTipOffsetY;
            this.toolTipWindowMaxWidth = t.toolTipWindowMaxWidth;
            this.sliceWidth = t.sliceWidth;
            this.sliceHeight = t.sliceHeight;
            this.cols = t.cols;
            this.rows = t.rows;
            this.panSpeed = t.panSpeed;
            this.panDirectionSign = t.inversePanDirection_bl ? -1 : 1;
            this.tweenDone_to;
            this.removeSmallSDOId_to;
            this.setAlphaWithDelayId_to;
            this.hideToolTipWindowId_to;
            this.addHideToolTipWindowTestWithDelayId_to;
            this.showToolTipWindoId_to;
            this.showMarkerToolTipId_to;
            this.setupMarkersAndToolTipWindowsId_to;
            this.secondTapId_to;
            this.enableMarkersId_to;
            this.showMarkersFirstTimeId_to;
            this.showMarkersFirstTimeDone_bl = false;
            this.allowToDragHoriz_bl = false;
            this.allowToDragVert_bl = false;
            this.isTweening_bl = false;
            this.isDragging_bl = false;
            this.isScrollBarHandlerPressed_bl = false;
            this.isResizingFirstTime_bl = true;
            this.isControllerActive_bl = false;
            this.useEntireScreenFor3dObject_bl = t.useEntireScreenFor3dObject_bl;
            this.isMobile_bl = t.isMobile_bl;
            this.showNavigator_bl = t.showNavigator_bl;
            this.showMarkers_bl = t.showMarkers_bl;
            this.isNavigatorShowed_bl = false;
            this.addImageFirstTimeOnActivate_bl = true;
            this.showMarkersInfo_bl = t.showMarkersInfo_bl;
            this.updateScrollBarWithDelay_bl = true;
            this.areLeftAndRightButtonsDisabled_bl = false;
            this.areUpAndDownButtonsDisabled_bl = false;
            this.isMobile_bl = t.isMobile_bl;
            this.addDoubleClickSupport_bl = t.addDoubleClickSupport_bl;
            this.showLargeImageVersionOnZoom_bl = t.showLargeImageVersionOnZoom_bl;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            r.init = function () {
                if (r.controllerPosition_str == FWDController.POSITION_TOP && !r.useEntireScreenFor3dObject_bl) r.setY(r.controllerHeight);
                r.setupMainContiners();
                if (!r.showMarkersInfo_bl) r.dumy_sdo.screen.style.cursor = "url(" + r.handMovePath_str + "), default";
                r.originalImage_img = t.originalImage_img;
                r.imageWidth = t.imageWidth;
                r.imageHeight = t.imageHeight;
                r.addImage();
                r.addPannSupport();
                r.addPinchSupport();
                r.addMouseWheelSupport();
                if (r.addDoubleClickSupport_bl) r.addDoubleClickSupport();
                r.setupMarkersAndToolTipWindowsId_to = setTimeout(r.setupMarkersAndToolTipWindows, 2e3);
                if (r.showMarkersInfo_bl) r.setupMarkersInfo();
                r.resizeAndPosition(true);
                r.showMarkersFirstTime()
            };
            this.setupMarkersAndToolTipWindows = function () {
                if (r.showMarkers_bl) {
                    r.setupMarkers();
                    if (!r.isMobile_bl || r.hasPointerEvent_bl) r.setupMarkersToolTip();
                    r.setupMarkersToolTipWindows();
                    r.positionMarkers(false)
                }
                if (r.showNavigator_bl) {
                    r.hideOrShowNavigator();
                    r.updateNavigator(false)
                }
                if (r.stageHeight < r.finalHeight) {
                    r.dispatchEvent(e.ENABLE_UP_AND_DOWN_BUTTONS);
                    r.areUpAndDownButtonsDisabled_bl = true
                }
                if (r.stageWidth < r.finalWidth) {
                    r.dispatchEvent(e.ENABLE_LEFT_AND_RIGHT_BUTTONS);
                    r.areLeftAndRightButtonsDisabled_bl = true
                }
            };
            r.setupHider = function (e) {
                r.hider = e
            };
            r.addImage = function () {
                if (FWDUtils.isChrome && !r.isMobile_bl) {
                    r.smallImage_sdo = new FWDTransformDisplayObject("div");
                    r.originalImage_img.style.position = "relative";
                    r.originalImage_img.style.display = "block";
                    r.originalImage_img.style.left = "0px";
                    r.originalImage_img.style.top = "0px";
                    r.originalImage_img.style.margin = "0px";
                    r.originalImage_img.style.padding = "0px";
                    r.originalImage_img.style.maxWidth = "none";
                    r.originalImage_img.style.maxHeight = "none";
                    r.originalImage_img.style.border = "none";
                    r.originalImage_img.style.lineHeight = "1";
                    r.originalImage_img.backgroundColor = "transparent";
                    r.originalImage_img.backfaceVisibility = "hidden";
                    r.originalImage_img.webkitBackfaceVisibility = "hidden";
                    r.originalImage_img.MozBackfaceVisibility = "hidden";
                    r.smallImage_sdo.screen.appendChild(r.originalImage_img)
                } else {
                    r.smallImage_sdo = new FWDTransformDisplayObject("img");
                    r.smallImage_sdo.setScreen(r.originalImage_img)
                }
                r.smallImage_sdo.setTransformOrigin(0, 0);
                r.addImageFirstTimeOnActivate_bl = false;
                r.addChild(r.smallImage_sdo);
                r.addChild(r.dumy_sdo)
            };
            r.setupMainContiners = function () {
                r.setBkColor(r.backgroundColor_str);
                r.smallImage_sdo = new FWDTransformDisplayObject("img");
                r.dumy_sdo = new FWDSimpleDisplayObject("div");
                if (FWDUtils.isIE) {
                    r.dumy_sdo.setBkColor("#00FF00");
                    r.dumy_sdo.setAlpha(.01)
                }
                if (r.controllerPosition_str == FWDController.POSITION_TOP && !r.useEntireScreenFor3dObject_bl) r.dumy_sdo.setY(-r.controllerHeight)
            };
            r.resizeAndPosition = function (e, t) {
                if (r.stageWidth == n.stageWidth && r.stageHeight == n.stageHeight - r.controllerHeight && !t) return;
                r.stageWidth = n.stageWidth;
                if (r.useEntireScreenFor3dObject_bl) {
                    r.stageHeight = n.stageHeight
                } else {
                    r.stageHeight = n.stageHeight - r.controllerHeight
                }
                r.setWidth(r.stageWidth);
                r.setHeight(r.stageHeight);
                var i = r.stageWidth / r.imageWidth;
                var s = r.stageHeight / r.imageHeight;
                var o;
                if (i < s) {
                    o = i
                } else {
                    o = s
                }
                if (o >= r.zoomFactor) o = r.zoomFactor;
                if (o >= r.zoomFactor) {
                    r.currentScale = r.prevScale = r.smallestPossibleScale = r.zoomFactor
                } else {
                    r.smallestPossibleScale = o;
                    if (r.currentScale === undefined) r.currentScale = r.prevScale = o
                }
                if (r.isResizingFirstTime_bl) {
                    if (!isNaN(r.startZoomFactor)) {
                        if (r.startZoomFactor > r.currentScale) {
                            r.currentScale = r.prevScale = r.startZoomFactor
                        }
                    }
                    r.isResizingFirstTime_bl = false
                }
                r.finalWidth = Math.round(r.currentScale * r.imageWidth);
                r.finalHeight = Math.round(r.currentScale * r.imageHeight);
                if (i <= s && o != r.zoomFactor) {
                    if (r.finalWidth < r.stageWidth) {
                        r.currentScale = r.stageWidth / r.imageWidth;
                        r.smallestPossibleScale = r.currentScale
                    }
                } else if (i >= s && o != r.zoomFactor) {
                    if (r.finalHeight < r.stageHeight) {
                        r.currentScale = r.stageHeight / r.imageHeight;
                        r.smallestPossibleScale = r.currentScale
                    }
                }
                r.finalWidth = Math.round(r.currentScale * r.imageWidth);
                r.finalHeight = Math.round(r.currentScale * r.imageHeight);
                r.dumy_sdo.setWidth(r.stageWidth);
                if (r.useEntireScreenFor3dObject_bl) {
                    r.dumy_sdo.setHeight(r.stageHeight)
                } else {
                    r.dumy_sdo.setHeight(r.stageHeight + r.controllerHeight)
                }
                r.checkXAndYBouds();
                if (e) r.centerImage();
                r.resizeAndPositionImage();
                if (r.showNavigator_bl) {
                    r.hideOrShowNavigator();
                    r.updateNavigator(false)
                }
                r.positionMarkers(false);
                setTimeout(function () {
                    if (r == null) return;
                    r.dispatchScrollBarUpdate(false)
                }, 50);
                r.disableOrEnableMoveButtons();
                r.dispatchScrollBarUpdate(false)
            };
            r.resizeAndPositionImage = function (t) {
                r.isTweening_bl = true;
                TweenMax.killTweensOf(r.smallImage_sdo);
                clearTimeout(r.tweenDone_to);
                if (t) {
                    if (r.smallImage_sdo.hasTransform2d_bl) {
                        TweenMax.to(r.smallImage_sdo, .3, {
                            x: r.finalX,
                            y: r.finalY,
                            scale: r.currentScale
                        })
                    } else {
                        TweenMax.to(r.smallImage_sdo, .3, {
                            w: r.finalWidth,
                            h: r.finalHeight,
                            x: r.finalX,
                            y: r.finalY
                        })
                    }
                    r.tweenDone_to = setTimeout(r.tweenDoneHandler, 300)
                } else {
                    if (r.smallImage_sdo.hasTransform2d_bl) {
                        if (r.smallImage_sdo.hasTransform3d_bl) {
                            r.smallImage_sdo.setPositionAndScale(r.finalX, r.finalY, r.currentScale)
                        } else {
                            r.smallImage_sdo.setScale(r.currentScale);
                            r.smallImage_sdo.setX(r.finalX);
                            r.smallImage_sdo.setY(r.finalY)
                        }
                    } else {
                        r.smallImage_sdo.setX(r.finalX);
                        r.smallImage_sdo.setY(r.finalY);
                        r.smallImage_sdo.setWidth(r.finalWidth);
                        r.smallImage_sdo.setHeight(r.finalHeight)
                    }
                    r.isTweening_bl = false;
                    r.dispatchEvent(e.IMAGE_ZOOM_COMPLETE)
                }
            };
            r.tweenDoneHandler = function () {
                r.isTweening_bl = false;
                r.dispatchEvent(e.IMAGE_ZOOM_COMPLETE)
            };
            r.checkXAndYBouds = function () {
                if (r.finalWidth <= r.stageWidth) {
                    r.finalX = Math.round((r.stageWidth - r.finalWidth) / 2)
                } else if (r.finalWidth > r.stageWidth + 1) {
                    r.allowToDragHoriz_bl = true;
                    if (r.finalX > 0) {
                        r.finalX = 0
                    } else if (r.finalX <= r.stageWidth - r.finalWidth + 1) {
                        r.finalX = r.stageWidth - r.finalWidth + 1
                    }
                } else {
                    r.allowToDragHoriz_bl = false
                }
                if (r.finalHeight <= r.stageHeight) {
                    r.finalY = Math.round((r.stageHeight - r.finalHeight) / 2)
                } else if (r.finalHeight > r.stageHeight + 1) {
                    r.allowToDragVert_bl = true;
                    if (r.finalY > 0) {
                        r.finalY = 0
                    } else if (r.finalY <= r.stageHeight - r.finalHeight) {
                        r.finalY = r.stageHeight - r.finalHeight
                    }
                } else {
                    r.allowToDragVert_bl = false
                }
            };
            r.zoomImage = function (e) {
                if (e) {
                    r.finalWidth = Math.round(r.currentScale * r.imageWidth);
                    r.finalHeight = Math.round(r.currentScale * r.imageHeight);
                    r.finalX -= Math.round((r.mouseX - r.finalX) * (r.currentScale - r.prevScale) / r.prevScale);
                    r.finalY -= Math.round((r.mouseY - r.finalY) * (r.currentScale - r.prevScale) / r.prevScale)
                }
                if (!r.isControllerActive_bl) r.dispatchScrollBarUpdate(true);
                r.checkXAndYBouds();
                if (r.showNavigator_bl) {
                    r.hideOrShowNavigator();
                    r.updateNavigator(true)
                }
                r.positionMarkers(true);
                r.disableOrEnableMoveButtons();
                r.resizeAndPositionImage(true);
                r.prevScale = r.currentScale
            };
            r.addPinchSupport = function () {
                if (r.screen.addEventListener) {
                    r.dumy_sdo.screen.addEventListener("gesturestart", this.gestureStartHandler);
                    r.dumy_sdo.screen.addEventListener("gesturechange", this.gestureChangeHandler)
                }
            };
            r.gestureStartHandler = function (e) {
                r.startScaleForMobileZoom = 1
            };
            r.gestureChangeHandler = function (e) {
                e.preventDefault();
                if (r.isControllerActive_bl) return;
                var t;
                if (e.scale > 1) {
                    t = e.scale - r.startScaleForMobileZoom
                } else {
                    t = -(r.startScaleForMobileZoom - e.scale)
                }
                r.startScaleForMobileZoom = 1;
                r.mouseX = Math.round(r.stageWidth / 2);
                r.mouseY = Math.round(r.stageHeight / 2);
                r.currentScale += t;
                r.startScaleForMobileZoom = e.scale;
                if (parseFloat(r.currentScale.toFixed(5)) <= parseFloat(r.smallestPossibleScale.toFixed(5))) {
                    r.currentScale = r.smallestPossibleScale
                } else if (r.currentScale > r.zoomFactor) {
                    r.currentScale = r.zoomFactor
                }
                r.zoomImage(true)
            };
            r.addPannSupport = function () {
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        r.dumy_sdo.screen.addEventListener("MSPointerDown", r.panStartHandler)
                    } else {
                        r.dumy_sdo.screen.addEventListener("touchstart", r.panStartHandler)
                    }
                } else if (r.screen.addEventListener) {
                    r.dumy_sdo.screen.addEventListener("mousedown", r.panStartHandler, true)
                } else if (r.screen.attachEvent) {
                    r.dumy_sdo.screen.attachEvent("onmousedown", r.panStartHandler)
                }
            };
            r.panStartHandler = function (t) {
                if (r.isTweening_bl || r.isControllerActive_bl || r.isTweening_bl) return;
                if (t.preventDefault) t.preventDefault();
                if (r.finalWidth < r.stageWidth && r.finalHeight < r.stageHeight) return;
                if (!r.isMobile_bl || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                    if (t.button <= 1) n.disableAll()
                }
                var i = FWDUtils.getViewportMouseCoordinates(t);
                r.isDragging_bl = true;
                r.xPositionOnPress = r.smallImage_sdo.getX();
                r.yPositionOnPress = r.smallImage_sdo.getY();
                r.lastPresedX = i.screenX;
                r.lastPresedY = i.screenY;
                r.hideToolTipWindow();
                r.dispatchEvent(e.PAN_START);
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerMove", r.panMoveHandler);
                        window.addEventListener("MSPointerUp", r.panEndHandler)
                    } else {
                        window.addEventListener("touchmove", r.panMoveHandler);
                        window.addEventListener("touchend", r.panEndHandler)
                    }
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("mousemove", r.panMoveHandler);
                        window.addEventListener("mouseup", r.panEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmousemove", r.panMoveHandler);
                        document.attachEvent("onmouseup", r.panEndHandler)
                    }
                }
            };
            r.panMoveHandler = function (e) {
                if (e.preventDefault) e.preventDefault();
                if (e.touches && e.touches.length != 1 || r.isControllerActive_bl || r.isTweening_bl) return;
                var t = FWDUtils.getViewportMouseCoordinates(e);
                if (r.finalWidth > r.stageWidth + 1) {
                    r.finalX = Math.round(r.xPositionOnPress + t.screenX - r.lastPresedX);
                    if (r.finalX > 0) {
                        r.finalX = 0
                    } else if (r.finalX <= r.stageWidth - r.finalWidth + 1) {
                        r.finalX = r.stageWidth - r.finalWidth + 1
                    }
                    r.smallImage_sdo.setX(r.finalX)
                }
                if (r.finalHeight > r.stageHeight + 1) {
                    r.finalY = Math.round(r.yPositionOnPress + t.screenY - r.lastPresedY);
                    if (r.finalY > 0) {
                        r.finalY = 0
                    } else if (r.finalY <= r.stageHeight - r.finalHeight) {
                        r.finalY = r.stageHeight - r.finalHeight
                    }
                    r.smallImage_sdo.setY(r.finalY)
                }
                if (r.showNavigator_bl) {
                    r.hideOrShowNavigator();
                    r.updateNavigator(false)
                }
                r.positionMarkers(false)
            };
            r.panEndHandler = function (e) {
                if (e.preventDefault) e.preventDefault();
                r.isDragging_bl = false;
                if (!r.isMobile_bl || e.pointerType == e.MSPOINTER_TYPE_MOUSE) n.enableAll();
                if (r.isMobile_bl) {
                    if (r.hasPointerEvent_bl) {
                        window.removeEventListener("MSPointerMove", r.panMoveHandler);
                        window.removeEventListener("MSPointerUp", r.panEndHandler)
                    } else {
                        window.removeEventListener("touchmove", r.panMoveHandler);
                        window.removeEventListener("touchend", r.panEndHandler)
                    }
                } else {
                    if (window.removeEventListener) {
                        window.removeEventListener("mousemove", r.panMoveHandler);
                        window.removeEventListener("mouseup", r.panEndHandler)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmousemove", r.panMoveHandler);
                        document.detachEvent("onmouseup", r.panEndHandler)
                    }
                }
            };
            r.addMouseWheelSupport = function () {
                if (window.addEventListener) {
                    r.dumy_sdo.screen.addEventListener("mousewheel", r.mouseWheelHandler);
                    r.dumy_sdo.screen.addEventListener("DOMMouseScroll", r.mouseWheelHandler)
                } else if (document.attachEvent) {
                    r.dumy_sdo.screen.attachEvent("onmousewheel", r.mouseWheelHandler)
                }
            };
            r.mouseWheelHandler = function (e) {
                if (e.preventDefault) e.preventDefault();
                if (r.isDragging_bl || r.isControllerActive_bl) return;
                var t = FWDUtils.getViewportMouseCoordinates(e);
                if (r.hider) r.hider.reset();
                r.mouseX = t.screenX - r.getGlobalX();
                r.mouseY = t.screenY - r.getGlobalY();
                var n = e.detail || e.wheelDelta;
                if (e.wheelDelta) n *= -1;
                if (n > 0) {
                    if (r.currentScale == r.smallestPossibleScale) return;
                    r.currentScale -= r.zoomSpeed;
                    if (parseFloat(r.currentScale.toFixed(5)) <= parseFloat(r.smallestPossibleScale.toFixed(5))) r.currentScale = r.smallestPossibleScale
                } else if (n < 0) {
                    if (r.currentScale == r.zoomFactor) return;
                    r.currentScale += r.zoomSpeed;
                    if (r.currentScale > r.zoomFactor) r.currentScale = r.zoomFactor
                }
                r.zoomImage(true);
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    return false
                }
            };
            this.addDoubleClickSupport = function () {
                if (r.isMobile_bl) {
                    r.dumy_sdo.screen.addEventListener("touchstart", r.onFirstDown)
                } else {
                    r.dumy_sdo.screen.addEventListener("mousedown", r.onFirstDown)
                }
            };
            this.onFirstDown = function (e) {
                var t = FWDUtils.getViewportMouseCoordinates(e);
                r.firstTapX = t.screenX;
                r.firstTapY = t.screenY;
                if (r.isMobile_bl) {
                    clearTimeout(r.secondTapId_to);
                    r.secondTapId_to = setTimeout(r.doubleTapExpired, 200);
                    r.dumy_sdo.screen.addEventListener("touchstart", r.onSecondDown);
                    r.dumy_sdo.screen.removeEventListener("touchstart", r.onFirstDown)
                } else {
                    clearTimeout(r.secondTapId_to);
                    r.secondTapId_to = setTimeout(r.doubleTapExpired, 200);
                    r.dumy_sdo.screen.addEventListener("mousedown", r.onSecondDown);
                    r.dumy_sdo.screen.removeEventListener("mousedown", r.onFirstDown)
                }
            };
            this.doubleTapExpired = function () {
                clearTimeout(r.secondTapId_to);
                if (r.isMobile_bl) {
                    r.dumy_sdo.screen.removeEventListener("touchstart", r.onSecondDown);
                    r.dumy_sdo.screen.addEventListener("touchstart", r.onFirstDown)
                } else {
                    r.dumy_sdo.screen.removeEventListener("mousedown", r.onSecondDown);
                    r.dumy_sdo.screen.addEventListener("mousedown", r.onFirstDown)
                }
            };
            this.onSecondDown = function (e) {
                var t = FWDUtils.getViewportMouseCoordinates(e);
                var n;
                var i;
                if (e.touches && e.touches.length != 1) return;
                if (r.currentScale == r.zoomFactor || r.doubleClickZoomFactor < r.currentScale) return;
                n = Math.abs(t.screenX - r.firstTapX);
                i = Math.abs(t.screenY - r.firstTapY);
                if (r.isMobile_bl && (n > 10 || i > 10)) {
                    return
                } else if (!r.isMobile_bl && (n > 2 || i > 2)) {
                    return
                }
                if (r.isMobile_bl) r.smallImage_sdo.screen.removeEventListener("touchstart", r.onSecondDown);
                r.mouseX = t.screenX - r.getGlobalX();
                r.mouseY = t.screenY - r.getGlobalY();
                r.currentScale = r.zoomFactor;
                r.zoomImage(true);
                r.mouseX = r.stageWidth / 2;
                r.mouseY = r.stageHeight / 2
            };
            r.setupMarkers = function () {
                var e;
                var t;
                var n = 0;
                r.totalMarkers = r.markersList_ar.length;
                for (var i = 0; i < r.totalMarkers; i++) {
                    t = r.markersList_ar[i];
                    FWDMarker.setPrototype();
                    e = new FWDMarker(t.markerId, t.normalStatePath_str, t.selectedStatePath_str, t.type, t.regPoint, t.toolTipLabel, i, t.markerX, t.markerY, t.markerWidth, t.markerHeight, t.showAfterScale, t.hasContent_bl);
                    e.addListener(FWDMarker.MOUSE_OVER, r.markerOnMouseOverHandler);
                    e.addListener(FWDMarker.MOUSE_OUT, r.markerOnMouseOutHandler);
                    e.addListener(FWDMarker.MOUSE_DOWN, r.markerOnStartHandler);
                    if (t.type == "tooltip") {
                        e.innerHTML_str = t.innerHTML
                    } else if (t.type == "infowindow") {
                        e.innerHTML_str = t.innerHTML
                    } else if (t.type == "link") {
                        e.link_str = t.link;
                        e.target_str = t.target
                    }
                    r.markers_ar.push(e);
                    r.addChild(e)
                }
            };
            r.markerOnMouseOverHandler = function (e) {
                var t = e.target;
                if (t.hasToolTip_bl) {
                    r.showMarkerToolTip(t, t.toolTipLabel_str)
                }
                if (t.type_str == "tooltip") {
                    if (!t.hasHTMLContent_bl) return;
                    if (r.curMarker_do && r.curMarker_do != t) r.curMarker_do.setNormalState();
                    r.lastMarkerId_str = t.markerId;
                    r.curMarker_do = t;
                    clearTimeout(r.hideToolTipWindowId_to);
                    r.showToolTipWindow(t)
                }
            };
            r.markerOnMouseOutHandler = function (e) {
                var t = e.target;
                if (t.hasToolTip_bl) {
                    if (r.markersToolTip_do) {
                        if (r.contains(r.markersToolTip_do)) r.removeChild(r.markersToolTip_do);
                        r.markersToolTip_do.hide()
                    }
                }
                if (t.type_str == "tooltip") {
                    if (!t.hasHTMLContent_bl) {
                        t.setNormalState();
                        return
                    }
                    r.toolTipWindowAddEventsToSetGlobalXAndGlobalY();
                    clearTimeout(r.hideToolTipWindowId_to);
                    r.hideToolTipWindowId_to = setTimeout(r.hideToolTipWindowWithDelay, 300)
                }
            };
            r.markerOnStartHandler = function (t) {
                var n = t.target;
                if (n.type_str == "infowindow") {
                    r.dispatchEvent(e.SHOW_INFO, {
                        text: n.innerHTML_str
                    })
                } else if (n.type_str == "tooltip" && r.isMobile_bl) {
                    if (!n.hasHTMLContent_bl) return;
                    if (r.lastMarkerId_str != n.markerId) r.hideToolTipWindow();
                    r.lastMarkerId_str = n.markerId;
                    r.curMarker_do = n;
                    r.toolTipWindowAddEventsToSetGlobalXAndGlobalY();
                    r.showToolTipWindow(n)
                }
            };
            this.showMarkersFirstTime = function () {
                r.showMarkersFirstTimeId_to = setTimeout(function () {
                    r.showMarkersFirstTimeDone_bl = true;
                    r.positionMarkers()
                }, 2100)
            };
            r.positionMarkers = function (e) {
                var t;
                for (var n = 0; n < r.totalMarkers; n++) {
                    t = r.markers_ar[n];
                    t.finalX = r.finalX + t.offsetX + parseInt(t.originalX * r.currentScale);
                    t.finalY = r.finalY + t.offsetY + parseInt(t.originalY * r.currentScale);
                    if (t.showAfterScale <= r.currentScale) {
                        if (r.showMarkersFirstTimeDone_bl) t.show()
                    } else {
                        t.hide()
                    }
                    if (t.isShowed_bl) {
                        if (e) {
                            TweenMax.killTweensOf(t);
                            TweenMax.to(t, .3, {
                                x: t.finalX,
                                y: t.finalY
                            })
                        } else {
                            TweenMax.killTweensOf(t);
                            t.setX(t.finalX);
                            t.setY(t.finalY)
                        }
                    }
                }
            };
            this.hideMarkers = function () {
                var e;
                for (var t = 0; t < r.totalMarkers; t++) {
                    e = r.markers_ar[t];
                    e.isHiddenFinal_bl = true;
                    e.hide()
                }
            };
            this.showMarkers = function () {
                var e;
                for (var t = 0; t < r.totalMarkers; t++) {
                    e = r.markers_ar[t];
                    e.isHiddenFinal_bl = false;
                    if (e.showAfterScale <= r.currentScale) e.show()
                }
            };
            r.setupMarkersToolTip = function () {
                FWDMarkerToolTip.setPrototype();
                r.markersToolTip_do = new FWDMarkerToolTip(r.toolTipLeft_img, r.toolTipPointer_img, r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str)
            };
            r.setupMarkersToolTipWindows = function () {
                var e;
                for (var t = 0; t < r.totalToolTipsWindows; t++) {
                    FWDMarkerWindowToolTip.setPrototype();
                    e = new FWDMarkerWindowToolTip(n.main_do, r.toolTipPointer_img, r.toolTipDataWindows_ar[t].innerHTML, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str, r.toolTipDataWindows_ar[t].maxWidth);
                    r.toolTipWindows_ar.push(e);
                    n.main_do.addChild(e)
                }
            };
            r.showMarkerToolTip = function (e, t) {
                var n;
                var i;
                var s = r.getX();
                var o = 0;
                var u;
                clearTimeout(r.showMarkerToolTipId_to);
                r.addChild(r.markersToolTip_do);
                r.markersToolTip_do.setLabel(t);
                r.markersToolTip_do.show();
                r.showMarkerToolTipId_to = setTimeout(function () {
                    n = parseInt(e.finalX + (e.width - r.markersToolTip_do.totalWidth) / 2);
                    i = e.finalY - r.markersToolTip_do.totalHeight - r.markerToolTipOffsetY;
                    if (i < 0 || r.controllerPosition_str == FWDController.POSITION_TOP && i < r.controllerHeight + r.controllerOffsetY) {
                        i = e.finalY + e.height + r.markersToolTip_do.pointerHeight + r.markerToolTipOffsetY;
                        r.markersToolTip_do.pointerUp_sdo.setVisible(true);
                        r.markersToolTip_do.pointerDown_sdo.setVisible(false);
                        u = FWDMarkerToolTip.POINTER_UP
                    } else {
                        r.markersToolTip_do.pointerUp_sdo.setVisible(false);
                        r.markersToolTip_do.pointerDown_sdo.setVisible(true);
                        u = FWDMarkerToolTip.POINTER_DOWN
                    }
                    if (n < 0) {
                        o = n;
                        n = 0
                    } else if (r.stageWidth - n - r.markersToolTip_do.totalWidth < 0) {
                        o = -(r.stageWidth - n - r.markersToolTip_do.totalWidth);
                        n = n + r.stageWidth - n - r.markersToolTip_do.totalWidth
                    }
                    r.markersToolTip_do.setX(n);
                    r.markersToolTip_do.setY(i);
                    r.markersToolTip_do.positionPointer(o, u)
                }, 51)
            };
            r.showToolTipWindow = function (e) {
                var t = e.id;
                var n;
                var i;
                var s = r.getX();
                var o = 0;
                var u;
                if (r.markersToolTipWindow_do != r.toolTipWindows_ar[e.id] && r.markersToolTipWindow_do) r.markersToolTipWindow_do.hide();
                for (var a = 0; a < e.id; a++) {
                    objData = r.markersList_ar[a];
                    if (objData.type != "tooltip") t--
                }
                r.markersToolTipWindow_do = r.toolTipWindows_ar[t];
                clearTimeout(r.showToolTipWindoId_to);
                r.showToolTipWindoId_to = setTimeout(function () {
                    n = parseInt(e.finalX + (e.width - r.markersToolTipWindow_do.totalWidth) / 2);
                    i = e.finalY - r.markersToolTipWindow_do.totalHeight - r.markerToolTipOffsetY;
                    if (i < 0) {
                        i = e.finalY + e.height + r.markersToolTipWindow_do.pointerHeight + r.markerToolTipOffsetY;
                        r.markersToolTipWindow_do.pointerUp_sdo.setVisible(true);
                        r.markersToolTipWindow_do.pointerDown_sdo.setVisible(false);
                        u = FWDMarkerWindowToolTip.POINTER_UP
                    } else {
                        i = e.finalY - r.markersToolTipWindow_do.totalHeight - r.markerToolTipOffsetY;
                        r.markersToolTipWindow_do.pointerUp_sdo.setVisible(false);
                        r.markersToolTipWindow_do.pointerDown_sdo.setVisible(true);
                        u = FWDMarkerWindowToolTip.POINTER_DOWN
                    }
                    if (n < 0) {
                        o = n;
                        n = 0
                    } else if (r.stageWidth - n - r.markersToolTipWindow_do.totalWidth < 0) {
                        o = -(r.stageWidth - n - r.markersToolTipWindow_do.totalWidth);
                        n = n + r.stageWidth - n - r.markersToolTipWindow_do.totalWidth
                    }
                    r.markersToolTipWindow_do.setX(n);
                    r.markersToolTipWindow_do.setY(i);
                    r.markersToolTipWindow_do.positionPointer(o, u);
                    r.markersToolTipWindow_do.show()
                }, 51)
            };
            r.toolTipWindowAddEventsToSetGlobalXAndGlobalY = function () {
                if (r.isMobile_bl) {
                    r.addHideToolTipWindowTestWithDelayId_to = setTimeout(function () {
                        if (r.hasPointerEvent_bl) {
                            window.addEventListener("MSPointerDown", r.hideToolTipWindowTest);
                            window.addEventListener("MSPointerMove", r.hideToolTipWindowTest)
                        } else {
                            window.addEventListener("touchstart", r.hideToolTipWindowTest)
                        }
                    }, 50)
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("mousemove", r.hideToolTipWindowTest)
                    } else if (document.attachEvent) {
                        document.detachEvent("onmousemove", r.hideToolTipWindowTest);
                        document.attachEvent("onmousemove", r.hideToolTipWindowTest)
                    }
                }
            };
            r.hideToolTipWindowTest = function (e) {
                var t = FWDUtils.getViewportMouseCoordinates(e);
                r.globalX = t.screenX;
                r.globalY = t.screenY;
                if (e.touches || e.pointerType != e.MSPOINTER_TYPE_MOUSE) r.hideToolTipWindowWithDelay()
            };
            r.hideToolTipWindowWithDelay = function (e) {
                if (!FWDUtils.hitTest(r.markersToolTipWindow_do.text_sdo.screen, r.globalX, r.globalY) && !FWDUtils.hitTest(r.markersToolTipWindow_do.pointerDown_sdo.screen, r.globalX, r.globalY) && !FWDUtils.hitTest(r.markersToolTipWindow_do.pointerUp_sdo.screen, r.globalX, r.globalY) && !FWDUtils.hitTest(r.curMarker_do.screen, r.globalX, r.globalY)) {
                    r.hideToolTipWindow();
                    if (r.isMobile_bl) {
                        clearTimeout(r.addHideToolTipWindowTestWithDelayId_to);
                        if (r.hasPointerEvent_bl) {
                            window.removeEventListener("MSPointerDown", r.hideToolTipWindowTest);
                            window.removeEventListener("MSPointerMove", r.hideToolTipWindowTest)
                        } else {
                            window.removeEventListener("touchstart", r.hideToolTipWindowTest)
                        }
                    } else {
                        if (window.removeEventListener) {
                            window.removeEventListener("mousemove", r.hideToolTipWindowTest)
                        } else if (document.detachEvent) {
                            document.detachEvent("onmousemove", r.hideToolTipWindowTest)
                        }
                    }
                } else {
                    r.hideToolTipWindowId_to = setTimeout(r.hideToolTipWindowWithDelay, 300)
                }
            };
            r.hideToolTipWindow = function () {
                if (!r.markersToolTipWindow_do) return;
                if (r.curMarker_do && !r.isMobile_bl) r.curMarker_do.setNormalState();
                clearTimeout(r.hideToolTipWindowId_to);
                r.markersToolTipWindow_do.hide();
                r.markersToolTipWindow_do.toolTipWindowId = "none"
            };
            r.setupMarkersInfo = function () {
                if (window.addEventListener) {
                    window.addEventListener("mousemove", r.showMarkersInfoPosition);
                    window.addEventListener("mousewheel", r.showMarkersInfoPosition);
                    window.addEventListener("DOMMouseScroll", r.showMarkersInfoPosition)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", r.showMarkersInfoPosition);
                    document.attachEvent("onmousewheel", r.showMarkersInfoPosition)
                }
                r.markersPositionInfo_sdo = new FWDSimpleDisplayObject("div");
                r.markersPositionInfo_sdo.setDisplay("inline-block");
                r.markersPositionInfo_sdo.getStyle().fontSmoothing = "antialiased";
                r.markersPositionInfo_sdo.getStyle().webkitFontSmoothing = "antialiased";
                r.markersPositionInfo_sdo.getStyle().textRendering = "optimizeLegibility";
                r.markersPositionInfo_sdo.getStyle().padding = "6px";
                r.markersPositionInfo_sdo.getStyle().fontFamily = "Arial";
                r.markersPositionInfo_sdo.getStyle().fontSize = "12px";
                r.markersPositionInfo_sdo.getStyle().color = "#000000";
                r.markersPositionInfo_sdo.setBkColor("#FFFFFF");
                r.addChild(r.markersPositionInfo_sdo)
            };
            r.showMarkersInfoPosition = function (e) {
                var t = FWDUtils.getViewportMouseCoordinates(e);
                var n = r.getGlobalX();
                var i = r.getGlobalY();
                var s = t.screenX - n;
                var o = t.screenY - i;
                var u = Math.round((s - r.finalX) * (1 / r.currentScale)) + 1;
                var a = Math.round((o - r.finalY) * (1 / r.currentScale)) + 1;
                var f = s + 10;
                var l = o + 10;
                r.markersPositionInfo_sdo.setInnerHTML("<font color='#FF000'>Left</font>: " + u + "<br><font color='#FF000'>Top</font>:" + a + "<br><font color='#FF000'>Zoom factor</font>:" + parseFloat(r.currentScale).toFixed(2));
                var c = r.markersPositionInfo_sdo.getWidth();
                var h = r.markersPositionInfo_sdo.getHeight();
                if (f + c > r.stageWidth) {
                    f = f - c - 10
                }
                if (l + h > r.stageHeight) {
                    l = l - h - 10
                }
                r.markersPositionInfo_sdo.setX(f);
                r.markersPositionInfo_sdo.setY(l)
            };
            r.setDraggingMode = function (e) {
                r.draggingMode_str = e
            };
            r.disableOrEnablePanOrTouch = function (e) {
                r.isControllerActive_bl = e
            };
            r.panWithButtons = function (e) {
                if (e == "left") {
                    r.finalX -= r.panSpeed * r.panDirectionSign
                } else if (e == "right") {
                    r.finalX += r.panSpeed * r.panDirectionSign
                } else if (e == "down") {
                    r.finalY += r.panSpeed * r.panDirectionSign
                } else if (e == "up") {
                    r.finalY -= r.panSpeed * r.panDirectionSign
                }
                r.checkXAndYBouds();
                r.resizeAndPositionImage();
                r.positionMarkers(false);
                r.updateNavigator()
            };
            r.zoomInOrOutWithScrollBar = function (e) {
                r.currentScale = e * (r.zoomFactor - r.smallestPossibleScale) + r.smallestPossibleScale;
                r.mouseX = r.stageWidth / 2;
                r.mouseY = r.stageHeight / 2;
                r.zoomImage(true)
            };
            r.dispatchScrollBarUpdate = function (t) {
                if (r.currentScale < r.zoomFactor) {
                    r.dispatchEvent(e.SCROLL_BAR_UPDATE, {
                        percent: (r.currentScale - r.smallestPossibleScale) / (r.zoomFactor - r.smallestPossibleScale),
                        animate: t
                    })
                } else {
                    r.dispatchEvent(e.SCROLL_BAR_UPDATE, {
                        percent: 1,
                        animate: t
                    })
                }
            };
            r.zoomInOrOutWithButtons = function (e, t) {
                r.mouseX = r.stageWidth / 2;
                r.mouseY = r.stageHeight / 2;
                if (e > 0) {
                    if (t) {
                        r.currentScale += r.zoomSpeed
                    } else {
                        r.currentScale += r.zoomSpeed / 15
                    }
                    if (r.currentScale > r.zoomFactor) r.currentScale = r.zoomFactor
                } else if (e < 0) {
                    if (t) {
                        r.currentScale -= r.zoomSpeed
                    } else {
                        r.currentScale -= r.zoomSpeed / 15
                    }
                    if (parseFloat(r.currentScale.toFixed(5)) <= parseFloat(r.smallestPossibleScale.toFixed(5))) r.currentScale = r.smallestPossibleScale
                }
                r.dispatchScrollBarUpdate(true, true);
                r.zoomImage(true)
            };
            r.centerImage = function () {
                r.mouseX = r.stageWidth / 2;
                r.mouseY = r.stageHeight / 2;
                r.finalX = Math.round((r.stageWidth - r.finalWidth) / 2);
                r.finalY = Math.round((r.stageHeight - r.finalHeight) / 2)
            };
            r.updateNavigator = function (t) {
                if (!r.isNavigatorShowed_bl) return;
                r.dispatchEvent(e.UPDATE_NAVIGATOR, {
                    percentX: Math.abs(r.finalX / (r.finalWidth - r.stageWidth)),
                    percentY: Math.abs(r.finalY / (r.finalHeight - r.stageHeight)),
                    percentWidth: r.stageWidth / r.finalWidth,
                    percentHeight: r.stageHeight / r.finalHeight,
                    animate: t
                })
            };
            r.hideOrShowNavigator = function () {
                if (r.stageWidth < r.finalWidth || r.stageHeight < r.finalHeight) {
                    r.isNavigatorShowed_bl = true;
                    r.dispatchEvent(e.SHOW_NAVIGATOR)
                } else {
                    r.isNavigatorShowed_bl = false;
                    r.dispatchEvent(e.HIDE_NAVIGATOR)
                }
            };
            r.updateOnNavigatorPan = function (e, t) {
                r.finalX = parseInt(e * (r.stageWidth - r.finalWidth));
                r.finalY = parseInt(t * (r.stageHeight - r.finalHeight));
                r.positionMarkers(true);
                r.resizeAndPositionImage(true)
            };
            r.disableOrEnableMoveButtons = function () {
                if (r.stageHeight < r.finalHeight) {
                    if (!r.areUpAndDownButtonsDisabled_bl) {
                        r.dispatchEvent(e.ENABLE_UP_AND_DOWN_BUTTONS);
                        r.areUpAndDownButtonsDisabled_bl = true
                    }
                } else {
                    if (r.areUpAndDownButtonsDisabled_bl) {
                        r.dispatchEvent(e.DISABLE_UP_AND_DOWN_BUTTONS);
                        r.areUpAndDownButtonsDisabled_bl = false
                    }
                }
                if (r.stageWidth < r.finalWidth) {
                    if (!r.areLeftAndRightButtonsDisabled_bl) {
                        r.dispatchEvent(e.ENABLE_LEFT_AND_RIGHT_BUTTONS);
                        r.areLeftAndRightButtonsDisabled_bl = true
                    }
                } else {
                    if (r.areLeftAndRightButtonsDisabled_bl) {
                        r.dispatchEvent(e.DISABLE_LEFT_AND_RIGHT_BUTTONS);
                        r.areLeftAndRightButtonsDisabled_bl = false
                    }
                }
            };
            r.cleanMainEvents = function () {
                if (r.isMobile_bl) {
                    r.dumy_sdo.screen.removeEventListener("touchstart", r.panStartHandler);
                    r.dumy_sdo.screen.removeEventListener("MSPointerDown", r.panStartHandler);
                    window.removeEventListener("touchmove", r.panMoveHandler);
                    window.removeEventListener("touchend", r.panEndHandler);
                    window.removeEventListener("MSPointerMove", r.panMoveHandler);
                    window.removeEventListener("MSPointerUp", r.panEndHandler);
                    window.removeEventListener("touchstart", r.hideToolTipWindowTest);
                    window.removeEventListener("MSPointerDown", r.hideToolTipWindowTest);
                    window.removeEventListener("MSPointerMove", r.hideToolTipWindowTest);
                    r.dumy_sdo.screen.removeEventListener("gesturestart", r.gestureStartHandler);
                    r.dumy_sdo.screen.removeEventListener("gesturechange", r.gestureChangeHandler);
                    r.dumy_sdo.screen.removeEventListener("touchstart", r.onSecondDown);
                    r.dumy_sdo.screen.removeEventListener("touchstart", r.onFirstDown)
                } else {
                    if (window.removeEventListener) {
                        r.dumy_sdo.screen.removeEventListener("mousedown", r.panStartHandler);
                        window.removeEventListener("mousemove", r.panMoveHandler);
                        window.removeEventListener("mouseup", r.panEndHandler);
                        r.dumy_sdo.screen.removeEventListener("mousewheel", r.mouseWheelHandler);
                        r.dumy_sdo.screen.removeEventListener("DOMMouseScroll", r.mouseWheelHandler);
                        window.removeEventListener("mousemove", r.hideToolTipWindowTest);
                        window.removeEventListener("mousemove", r.showMarkersInfoPosition);
                        window.removeEventListener("mousewheel", r.showMarkersInfoPosition);
                        window.removeEventListener("DOMMouseScroll", r.showMarkersInfoPosition);
                        r.dumy_sdo.screen.removeEventListener("mousedown", r.onSecondDown);
                        r.dumy_sdo.screen.removeEventListener("mousedown", r.onFirstDown)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmousemove", r.panMoveHandler);
                        document.detachEvent("onmouseup", r.panEndHandler);
                        r.dumy_sdo.screen.detachEvent("onmousedown", r.panStartHandler);
                        r.dumy_sdo.screen.detachEvent("onmousewheel", r.mouseWheelHandler);
                        document.detachEvent("onmousemove", r.hideToolTipWindowTest);
                        document.detachEvent("onmousemove", r.showMarkersInfoPosition);
                        document.detachEvent("onmousewheel", r.showMarkersInfoPosition)
                    }
                }
                clearTimeout(r.tweenDone_to);
                clearTimeout(r.removeSmallSDOId_to);
                clearTimeout(r.setAlphaWithDelayId_to);
                clearTimeout(r.hideToolTipWindowId_to);
                clearTimeout(r.addHideToolTipWindowTestWithDelayId_to);
                clearTimeout(r.showToolTipWindoId_to);
                clearTimeout(r.showMarkerToolTipId_to);
                clearTimeout(r.setupMarkersAndToolTipWindowsId_to);
                clearTimeout(r.secondTapId_to);
                clearTimeout(r.enableMarkersId_to);
                clearTimeout(r.showMarkersFirstTimeId_to)
            };
            r.destroy = function () {
                r.cleanMainEvents();
                if (r.smallImage_sdo) {
                    TweenMax.killTweensOf(r.smallImage_sdo);
                    r.smallImage_sdo.destroy()
                }
                if (r.showMarkers_bl) {
                    var s;
                    var o;
                    for (var u = 0; u < r.totalMarkers; u++) {
                        s = r.markers_ar[u];
                        TweenMax.killTweensOf(s);
                        s.destroy()
                    }
                    if (r.markersToolTip_do) r.markersToolTip_do.destroy();
                    for (var u = 0; u < r.totalToolTipsWindows; u++) {
                        o = r.toolTipWindows_ar[u];
                        if (o) o.destroy()
                    }
                }
                r.dumy_sdo.screen.style.cursor = "default";
                r.dumy_sdo.destroy();
                if (r.markersPositionInfo_sdo) {
                    r.markersPositionInfo_sdo.setInnerHTML("");
                    r.markersPositionInfo_sdo.destroy()
                }
                t = null;
                n = null;
                r.toolTipDataWindows_ar = null;
                r.markersList_ar = null;
                r.markersPosition_ar = null;
                r.largeImagesPaths_ar = null;
                r.hider = null;
                r.curMarker_do = null;
                r.dumy_sdo = null;
                r.smallImage_sdo = null;
                r.markersPositionInfo_sdo = null;
                r.handMovePath_str = null;
                r.handGrabPath_str = null;
                r.backgroundColor_str = null;
                r.draggingMode_str = null;
                r.setInnerHTML("");
                i.destroy();
                r = null;
                i = null;
                e.prototype = null
            };
            r.init()
        };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.LARGE_IMAGE_LOAD_ERROR = "largeImageLoadError";
    e.IMAGE_ZOOM_COMPLETE = "zoomComplete";
    e.SCROLL_BAR_UPDATE = "scrollBarUpdate";
    e.PAN_START = "panStart";
    e.PAN = "pan";
    e.UPDATE_NAVIGATOR = "updateNavigator";
    e.SHOW_NAVIGATOR = "showNavigator";
    e.HIDE_NAVIGATOR = "hideNavigator";
    e.SHOW_INFO = "showInfo";
    e.DISABLE_LEFT_AND_RIGHT_BUTTONS = "disableLeftAndRightButtons";
    e.ENABLE_LEFT_AND_RIGHT_BUTTONS = "enableLeftAndRightButtons";
    e.DISABLE_UP_AND_DOWN_BUTTONS = "disableUpAndDownButtons";
    e.ENABLE_UP_AND_DOWN_BUTTONS = "enableUpAndDownButtons";
    e.prototype = null;
    window.FWDImageManager = e
})(window);
(function (e) {
    var t = function () {
            var e = this;
            var n = t.prototype;
            this.init = function () {
                this.setWidth(500);
                this.setBkColor("#FF0000");
                this.getStyle().color = "#000000";
                this.getStyle().padding = "10px"
            };
            this.showText = function (e) {
                this.setInnerHTML(e)
            };
            this.destroy = function () {
                this.init = null;
                this.showText = null;
                this.destroy = null;
                e.setInnerHTML("");
                n.destroy();
                e = null;
                t.prototype = null
            };
            this.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div", "relative")
    };
    t.prototype = null;
    e.FWDInfo = t
})(window);
(function (e) {
    function c(t, n, r) {
        function u() {
            if (s) {
                s.apply(e, arguments);
                if (!o) {
                    delete n[i];
                    s = null
                }
            }
        }
        var i, s = r[0],
            o = t === a;
        r[0] = u;
        i = t.apply(e, r);
        n[i] = {
            args: r,
            created: Date.now(),
            cb: s,
            id: i
        };
        return i
    }
    function h(t, n, r, i, s) {
        function c() {
            if (o.cb) {
                o.cb.apply(e, arguments);
                if (!u) {
                    delete r[i];
                    o.cb = null
                }
            }
        }
        var o = r[i];
        if (!o) {
            return
        }
        var u = t === a;
        n(o.id);
        if (!u) {
            var f = o.args[1];
            var l = Date.now() - o.created;
            if (l < 0) {
                l = 0
            }
            f -= l;
            if (f < 0) {
                f = 0
            }
            o.args[1] = f
        }
        o.args[0] = c;
        o.created = Date.now();
        o.id = t.apply(e, o.args)
    }
    var t = navigator.platform;
    var n = false;
    if (t == "iPad" || t == "iPhone") n = true;
    if (!n) return;
    var r = navigator.userAgent;
    var i = false;
    if (r.indexOf("6") != -1) i = true;
    if (!i) return;
    var s = {};
    var o = {};
    var u = e.setTimeout;
    var a = e.setInterval;
    var f = e.clearTimeout;
    var l = e.clearInterval;
    e.setTimeout = function () {
        return c(u, s, arguments)
    };
    e.setInterval = function () {
        return c(a, o, arguments)
    };
    e.clearTimeout = function (e) {
        var t = s[e];
        if (t) {
            delete s[e];
            f(t.id)
        }
    };
    e.clearInterval = function (e) {
        var t = o[e];
        if (t) {
            delete o[e];
            l(t.id)
        }
    };
    e.addEventListener("scroll", function () {
        var e;
        for (e in s) {
            h(u, f, s, e)
        }
        for (e in o) {
            h(a, l, o, e)
        }
    })
})(window);
(function (e) {
    var t = function (n, r, i, s, o, u) {
            var a = this;
            var f = t.prototype;
            this.mainLightBox_do = null;
            this.lightBoxBackground_sdo = null;
            this.lightBoxGridHolder_do = null;
            this.closeButton_do = null;
            this.mainBackgroundColor_str = r;
            this.holderBackgroundColor_str = i;
            this.lightBoxBackgroundOpacity = s;
            this.lightBoxWidth = o;
            this.lightBoxHeight = u;
            this.setupButtonWithDelayId_to;
            this.isMobile_bl = FWDUtils.isMobile;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            this.closeButtonIsTweening_bl = true;
            this.init = function () {
                a.setupMainContainers()
            };
            this.setupMainContainers = function () {
                var e = FWDUtils.getViewportSize();
                var t = FWDUtils.getScrollOffsets();
                if (a.isMobile_bl && a.hasPointerEvent_bl) a.getStyle().msTouchAction = "none";
                a.setWidth(e.w);
                a.setHeight(e.h);
                a.setX(t.x);
                a.setY(t.y);
                a.lightBoxBackground_sdo = new FWDSimpleDisplayObject("div");
                a.lightBoxBackground_sdo.setResizableSizeAfterParent();
                a.lightBoxBackground_sdo.setBkColor(a.mainBackgroundColor_str);
                a.addChild(a.lightBoxBackground_sdo);
                a.mainLightBox_do = new FWDDisplayObject("div");
                a.mainLightBox_do.setBkColor(a.holderBackgroundColor_str);
                n.stageContainer = a.mainLightBox_do.screen;
                a.addChild(a.mainLightBox_do);
                if (navigator.userAgent.toLowerCase().indexOf("msie 7") == -1) {
                    document.documentElement.appendChild(a.screen)
                } else {
                    document.getElementsByTagName("body")[0].appendChild(a.screen)
                }
                a.lightBoxBackground_sdo.setAlpha(0);
                TweenMax.to(a.lightBoxBackground_sdo, 1, {
                    delay: .1,
                    alpha: a.lightBoxBackgroundOpacity
                });
                a.mainLightBox_do.setWidth(0);
                a.mainLightBox_do.setHeight(0);
                if (a.lightBoxWidth > e.w) {
                    a.finalLightBoxWidth = e.w;
                    a.finalLightBoxHeight = parseInt(a.lightBoxHeight * (e.w / a.lightBoxWidth))
                } else {
                    a.finalLightBoxWidth = a.lightBoxWidth;
                    a.finalLightBoxHeight = a.lightBoxHeight
                }
                a.mainLightBox_do.setX(parseInt(e.w / 2));
                a.mainLightBox_do.setY(parseInt(e.h / 2));
                TweenMax.to(a.mainLightBox_do, .8, {
                    w: a.finalLightBoxWidth,
                    h: a.finalLightBoxHeight,
                    x: parseInt((e.w - a.finalLightBoxWidth) / 2),
                    y: parseInt((e.h - a.finalLightBoxHeight) / 2),
                    delay: .8,
                    ease: Expo.easeInOut
                })
            };
            this.setupCloseButton = function (t, n) {
                var r = FWDUtils.getViewportSize();
                FWDSimpleButton.setPrototype();
                a.closeButton_do = new FWDSimpleButton(t, n);
                a.closeButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, a.closeButtonOnStartHandler);
                a.closeButton_do.getStyle().zIndex = 99999999;
                a.addChild(a.closeButton_do);
                var i = parseInt((r.w + a.finalLightBoxWidth) / 2 - a.closeButton_do.totalWidth / 2);
                var s = parseInt((r.h - a.finalLightBoxHeight) / 2 - a.closeButton_do.totalHeight / 2);
                if (i + a.closeButton_do.totalWidth > r.w) {
                    i = r.w - a.closeButton_do.totalWidth
                }
                if (s < 0) {
                    s = 0
                }
                a.closeButton_do.setX(r.w);
                a.closeButton_do.setY(s);
                TweenMax.to(a.closeButton_do, .9, {
                    x: i,
                    onComplete: a.showCloseButtonComplete,
                    ease: Expo.easeInOut
                });
                if (a.isMobile_bl) {
                    if (!a.hasPointerEvent_bl) {
                        e.addEventListener("touchstart", a.mouseDummyHandler);
                        e.addEventListener("touchmove", a.mouseDummyHandler)
                    }
                } else {
                    if (e.addEventListener) {
                        e.addEventListener("mousewheel", a.mouseDummyHandler);
                        e.addEventListener("DOMMouseScroll", a.mouseDummyHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmousewheel", a.mouseDummyHandler)
                    }
                }
            };
            this.showCloseButtonComplete = function () {
                a.closeButtonIsTweening_bl = false
            };
            this.mouseDummyHandler = function (e) {
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    return false
                }
            };
            this.closeButtonOnStartHandler = function (e) {
                var n = FWDUtils.getViewportSize();
                a.closeButton_do.isDisabled_bl = true;
                TweenMax.to(a.closeButton_do, .9, {
                    x: n.w,
                    ease: Expo.easeInOut
                });
                TweenMax.to(a.mainLightBox_do, .8, {
                    w: 0,
                    h: 0,
                    x: parseInt(n.w / 2),
                    y: parseInt(n.h / 2),
                    delay: .4,
                    ease: Expo.easeInOut
                });
                TweenMax.to(a.lightBoxBackground_sdo, .8, {
                    alpha: 0,
                    delay: .8
                });
                a.lighboxAnimDoneId_to = setTimeout(a.lighboxHideAnimationDone, 1600);
                a.dispatchEvent(t.CLOSE)
            };
            this.lighboxHideAnimationDone = function () {
                a.dispatchEvent(t.HIDE_COMPLETE)
            };
            a.destroy = function () {
                try {
                    if (navigator.userAgent.toLowerCase().indexOf("msie 7") == -1) {
                        document.documentElement.removeChild(a.screen)
                    } else {
                        document.getElementsByTagName("body")[0].removeChild(a.screen)
                    }
                } catch (s) {}
                if (a.isMobile_bl) {
                    if (!a.hasPointerEvent_bl) {
                        e.removeEventListener("touchstart", a.mouseDummyHandler);
                        e.removeEventListener("touchmove", a.mouseDummyHandler)
                    }
                } else {
                    if (e.removeEventListener) {
                        e.removeEventListener("mousewheel", a.mouseDummyHandler);
                        e.removeEventListener("DOMMouseScroll", a.mouseDummyHandler)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmousewheel", a.mouseDummyHandler)
                    }
                }
                clearTimeout(a.lighboxAnimDoneId_to);
                if (a.lightBoxBackground_sdo) {
                    TweenMax.killTweensOf(a.lightBoxBackground_sdo);
                    a.lightBoxBackground_sdo.destroy()
                }
                if (a.lightBoxGridHolder_do) {
                    TweenMax.killTweensOf(a.lightBoxGridHolder_do);
                    a.lightBoxGridHolder_do.destroy()
                }
                if (a.closeButton_do) {
                    TweenMax.killTweensOf(a.closeButton_do);
                    a.closeButton_do.destroy()
                }
                a.mainLightBox_do = null;
                a.lightBoxBackground_sdo = null;
                a.lightBoxGridHolder_do = null;
                a.closeButton_do = null;
                a.mainBackgroundColor_str = null;
                a.holderBackgroundColor_str = null;
                n = null;
                r = null;
                i = null;
                a.setInnerHTML("");
                f.destroy();
                a = null;
                f = null;
                t.prototype = null
            };
            this.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.CLOSE = "ligtBoxClose";
    t.HIDE_COMPLETE = "hideComplete";
    t.prototype = null;
    e.FWDLightBox = t
})(window);
(function (e) {
    var t = function (n, r, i, s, o, u, a, f, l, c, h, p, d) {
            var v = this;
            var m = t.prototype;
            this.n_do;
            this.s_do;
            this.markerId = n;
            this.normalImagePath_str = r;
            this.selectedImagePath_str = i;
            this.type_str = s;
            this.toolTipLabel_str = u;
            this.innerHTML_str;
            this.link_str;
            this.target_str;
            this.regPoint_str = o;
            this.id = a;
            this.toolTipWindowId;
            this.width = c;
            this.height = h;
            this.originalX = f;
            this.originalY = l;
            this.finalX;
            this.finalY;
            this.offsetX;
            this.offsetY;
            this.toolTipWindowMaxWidth;
            this.showAfterScale = p;
            this.hasHTMLContent_bl = d;
            this.isDisabled_bl = false;
            this.hasToolTip_bl = true;
            this.isDisabled_bl = false;
            this.isHiddenFinal_bl = false;
            this.isShowed_bl = true;
            this.isMobile_bl = FWDUtils.isMobile;
            this.hasGif_bl = false;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            v.init = function () {
                v.setOverflow("visible");
                if (v.type_str == "tooltip" || !v.toolTipLabel_str) v.hasToolTip_bl = false;
                if (v.normalImagePath_str.indexOf(".gif") != -1) v.hasGif_bl = true;
                v.setWidth(v.width);
                v.setHeight(v.height);
                if (v.regPoint_str == "center") {
                    v.offsetX = -parseInt(v.width / 2);
                    v.offsetY = -parseInt(v.height / 2)
                } else if (v.regPoint_str == "centertop") {
                    v.offsetX = -parseInt(v.width / 2);
                    v.offsetY = 0
                } else if (v.regPoint_str == "centerbottom") {
                    v.offsetX = -parseInt(v.width / 2);
                    v.offsetY = -v.height
                }
                v.setupMainContainers();
                v.hide()
            };
            v.setupMainContainers = function () {
                v.n_do = new FWDTransformDisplayObject("img");
                v.n_do.setWidth(v.width);
                v.n_do.setHeight(v.height);
                v.n_do.screen.src = v.normalImagePath_str;
                v.s_do = new FWDTransformDisplayObject("img");
                v.s_do.setWidth(v.width);
                v.s_do.setHeight(v.height);
                v.s_do.screen.src = v.selectedImagePath_str;
                if (v.isHtml5_bl) {
                    if (v.regPoint_str == "center") {
                        v.n_do.setTransformOrigin(50, 50);
                        v.s_do.setTransformOrigin(50, 50)
                    } else if (v.regPoint_str == "centertop") {
                        v.n_do.setTransformOrigin(50, 0);
                        v.s_do.setTransformOrigin(50, 0)
                    } else if (v.regPoint_str == "centerbottom") {
                        v.n_do.setTransformOrigin(50, 100);
                        v.s_do.setTransformOrigin(50, 100)
                    }
                }
                if (v.hasGif_bl) {
                    v.addChild(v.s_do);
                    v.addChild(v.n_do)
                } else {
                    v.s_do.setAlpha(0);
                    v.addChild(v.n_do);
                    v.addChild(v.s_do)
                }
                v.setButtonMode(true);
                if (v.isMobile_bl) {
                    if (v.hasPointerEvent_bl) {
                        v.screen.addEventListener("MSPointerDown", v.onMouseDown);
                        v.screen.addEventListener("MSPointerUp", v.onClick);
                        v.screen.addEventListener("MSPointerOver", v.onMouseOver);
                        v.screen.addEventListener("MSPointerOut", v.onMouseOut)
                    } else {
                        v.screen.addEventListener("touchstart", v.onMouseDown)
                    }
                } else if (v.screen.addEventListener) {
                    v.screen.addEventListener("mouseover", v.onMouseOver);
                    v.screen.addEventListener("mouseout", v.onMouseOut);
                    v.screen.addEventListener("mousedown", v.onMouseDown);
                    v.screen.addEventListener("click", v.onClick)
                } else if (v.screen.attachEvent) {
                    v.screen.attachEvent("onmouseover", v.onMouseOver);
                    v.screen.attachEvent("onmouseout", v.onMouseOut);
                    v.screen.attachEvent("onmousedown", v.onMouseDown);
                    v.screen.attachEvent("onclick", v.onClick)
                }
            };
            v.onMouseOver = function (e) {
                if (v.isDisabled_bl) return;
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                    v.dispatchEvent(t.MOUSE_OVER, {
                        e: e
                    });
                    TweenMax.killTweensOf(v.s_do);
                    TweenMax.killTweensOf(v.n_do);
                    if (v.isHtml5_bl) {
                        v.n_do.setScale(1);
                        v.s_do.setScale(1)
                    } else {
                        v.n_do.setWidth(v.width);
                        v.n_do.setHeight(v.height);
                        v.s_do.setWidth(v.width);
                        v.s_do.setHeight(v.height)
                    }
                    if (v.hasGif_bl) {
                        TweenMax.to(v.n_do, .5, {
                            alpha: 0,
                            delay: .1,
                            ease: Expo.easeOut
                        })
                    } else {
                        TweenMax.to(v.s_do, .5, {
                            alpha: 1,
                            delay: .1,
                            ease: Expo.easeOut
                        })
                    }
                }
            };
            v.onMouseOut = function (e) {
                if (v.isDisabled_bl) return;
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                    v.dispatchEvent(t.MOUSE_OUT, {
                        e: e
                    });
                    if (v.type_str != "tooltip" || v.hasPointerEvent_bl) v.setNormalState()
                }
            };
            v.onClick = function (n) {
                if (v.isDisabled_bl) return;
                if (v.type_str == "link") {
                    e.open(v.link_str, v.target_str);
                    v.dispatchEvent(t.MOUSE_OUT, {
                        e: n
                    })
                }
                v.dispatchEvent(t.CLICK, {
                    e: n
                })
            };
            v.onMouseDown = function (n) {
                if (n.preventDefault) n.preventDefault();
                if (v.isDisabled_bl) return;
                if (v.isMobile_bl && !v.hasPointerEvent_bl) {
                    if (v.type_str == "link") {
                        e.open(v.link_str, v.target_str);
                        v.dispatchEvent(t.MOUSE_OUT, {
                            e: n
                        })
                    }
                }
                v.dispatchEvent(t.MOUSE_DOWN, {
                    e: n
                })
            };
            this.setNormalState = function () {
                TweenMax.killTweensOf(v.s_do);
                if (v.hasGif_bl) {
                    TweenMax.to(v.n_do, .5, {
                        alpha: 1,
                        ease: Expo.easeOut
                    })
                } else {
                    TweenMax.to(v.s_do, .5, {
                        alpha: 0,
                        ease: Expo.easeOut
                    })
                }
            };
            v.hide = function () {
                if (!v.isShowed_bl) return;
                TweenMax.killTweensOf(v);
                TweenMax.killTweensOf(v.n_do);
                TweenMax.killTweensOf(v.s_do);
                v.setX(-5e3);
                v.isShowed_bl = false
            };
            v.show = function () {
                if (v.isShowed_bl || v.isHiddenFinal_bl) return;
                TweenMax.killTweensOf(v);
                TweenMax.killTweensOf(v.n_do);
                TweenMax.killTweensOf(v.s_do);
                v.setX(v.finalX);
                v.setY(v.finalY);
                v.isShowed_bl = true;
                if (v.isHtml5_bl) {
                    v.n_do.setScale(0);
                    v.s_do.setScale(0);
                    TweenMax.to(v.n_do, .8, {
                        scale: 1,
                        delay: .1,
                        ease: Elastic.easeOut
                    });
                    TweenMax.to(v.s_do, .8, {
                        scale: 1,
                        delay: .1,
                        ease: Elastic.easeOut
                    })
                } else {
                    v.n_do.setWidth(0);
                    v.n_do.setHeight(0);
                    v.s_do.setWidth(0);
                    v.s_do.setHeight(0);
                    TweenMax.to(v.n_do, .8, {
                        w: v.width,
                        h: v.height,
                        delay: .1,
                        ease: Elastic.easeOut
                    });
                    TweenMax.to(v.s_do, .8, {
                        w: v.width,
                        h: v.height,
                        delay: .1,
                        ease: Elastic.easeOut
                    })
                }
            };
            v.destroy = function () {
                if (v.isMobile_bl) {
                    v.screen.removeEventListener("touchstart", v.onMouseDown)
                } else if (v.screen.addEventListener) {
                    v.screen.removeEventListener("mouseover", v.onMouseOver);
                    v.screen.removeEventListener("mouseout", v.onMouseOut);
                    v.screen.removeEventListener("mousedown", v.onMouseDown);
                    v.screen.removeEventListener("click", v.onClick)
                } else if (v.screen.detachEvent) {
                    v.screen.detachEvent("onmouseover", v.onMouseOver);
                    v.screen.detachEvent("onmouseout", v.onMouseOut);
                    v.screen.detachEvent("onmousedown", v.onMouseDown);
                    v.screen.detachEvent("onclick", v.onClick)
                }
                TweenMax.killTweensOf(v.n_do);
                TweenMax.killTweensOf(v.s_do);
                v.n_do.src = null;
                v.s_do.src = null;
                v.n_do.destroy();
                v.s_do.destroy();
                v.n_do = null;
                v.s_do = null;
                v.markerId = null;
                v.normalImagePath_str = null;
                v.selectedImagePath_str = null;
                v.type_str = null;
                v.toolTipLabel_str = null;
                v.innerHTML_str = null;
                v.link_str = null;
                v.target_str = null;
                v.regPoint_str = null;
                n = null;
                r = null;
                i = null;
                s = null;
                o = null;
                u = null;
                v.setInnerHTML("");
                m.destroy();
                v = null;
                m = null;
                t.prototype = null
            };
            v.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.CLICK = "onClick";
    t.MOUSE_OVER = "onMouseOver";
    t.MOUSE_OUT = "onMouseOut";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDMarker = t
})(window);
(function (e) {
    var t = function (e, n, r, i, s, o, u, a) {
            var f = this;
            var l = t.prototype;
            f.pointerUp_img;
            f.pointerDown_img;
            f.left_sdo = null;
            f.middle_sdo = null;
            f.right_sdo = null;
            f.text_sdo = null;
            f.pointerUp_sdo = null;
            f.pointerDown_sdo = null;
            f.leftImagePath_str = r;
            f.middleImagePath_str = i;
            f.rightImagePath_str = s;
            f.fontColor_str = o;
            f.bottomPointer_str = a;
            f.topPointer_str = u;
            f.pointerPosition_str;
            f.toolTipLabel_str;
            f.marginWidth = e.width;
            f.totalHeight = e.height;
            f.pointerWidth = n.width;
            f.pointerHeight = n.height;
            f.totalWidth;
            f.isMobile_bl = FWDUtils.isMobile;
            f.isShowed_bl = true;
            f.init = function () {
                f.setOverflow("visible");
                f.setWidth(300);
                f.setupMainContainers();
                f.hide()
            };
            f.setupMainContainers = function () {
                var e;
                f.left_sdo = new FWDSimpleDisplayObject("img");
                e = new Image;
                e.src = f.leftImagePath_str;
                f.left_sdo.setScreen(e);
                f.left_sdo.setWidth(f.marginWidth);
                f.left_sdo.setHeight(f.totalHeight);
                f.addChild(f.left_sdo);
                f.middle_sdo = new FWDSimpleDisplayObject("img");
                e = new Image;
                e.src = f.middleImagePath_str;
                f.middle_sdo.setScreen(e);
                f.middle_sdo.setX(f.marginWidth);
                f.middle_sdo.setWidth(f.marginWidth);
                f.middle_sdo.setHeight(f.totalHeight);
                f.addChild(f.middle_sdo);
                f.right_sdo = new FWDSimpleDisplayObject("img");
                e = new Image;
                e.src = f.rightImagePath_str;
                f.right_sdo.setScreen(e);
                f.right_sdo.setWidth(f.marginWidth);
                f.right_sdo.setHeight(f.totalHeight);
                f.addChild(f.right_sdo);
                f.text_sdo = new FWDSimpleDisplayObject("div");
                f.text_sdo.setBackfaceVisibility();
                f.text_sdo.setDisplay("inline-block");
                f.text_sdo.getStyle().fontFamily = "Arial";
                f.text_sdo.getStyle().fontSize = "12px";
                f.text_sdo.setHeight(20);
                f.text_sdo.getStyle().color = f.fontColor_str;
                f.text_sdo.getStyle().fontSmoothing = "antialiased";
                f.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
                f.text_sdo.getStyle().textRendering = "optimizeLegibility";
                f.text_sdo.setX(f.marginWidth);
                if (FWDUtils.isIEAndLessThen9 || FWDUtils.isSafari) {
                    f.text_sdo.setY(parseInt((f.totalHeight - 8) / 2) - 2)
                } else {
                    f.text_sdo.setY(parseInt((f.totalHeight - 8) / 2) - 1)
                }
                f.addChild(f.text_sdo);
                f.pointerUp_img = new Image;
                f.pointerUp_img.src = f.topPointer_str;
                f.pointerUp_sdo = new FWDSimpleDisplayObject("img");
                f.pointerUp_sdo.setScreen(f.pointerUp_img);
                f.pointerUp_sdo.setWidth(f.pointerWidth);
                f.pointerUp_sdo.setHeight(f.pointerHeight);
                f.pointerUp_sdo.setVisible(false);
                f.addChild(f.pointerUp_sdo);
                f.pointerDown_img = new Image;
                f.pointerDown_img.src = f.bottomPointer_str;
                f.pointerDown_sdo = new FWDSimpleDisplayObject("img");
                f.pointerDown_sdo.setScreen(f.pointerDown_img);
                f.pointerDown_sdo.setWidth(f.pointerWidth);
                f.pointerDown_sdo.setHeight(f.pointerHeight);
                f.pointerDown_sdo.setVisible(false);
                f.addChild(f.pointerDown_sdo);
                f.totalHeight += f.pointerHeight
            };
            f.setLabel = function (e) {
                if (f == null) return;
                if (!f.middle_sdo) return;
                f.text_sdo.setInnerHTML(e);
                setTimeout(function () {
                    f.middle_sdo.setWidth(f.text_sdo.screen.offsetWidth);
                    f.right_sdo.setX(f.text_sdo.screen.offsetWidth + f.marginWidth);
                    f.totalWidth = f.marginWidth * 2 + f.text_sdo.screen.offsetWidth
                }, 50)
            };
            f.positionPointer = function (e, n) {
                var r = 0;
                var i = 0;
                if (!e) e = 0;
                r = parseInt((f.totalWidth - f.pointerWidth) / 2) + e;
                if (r < 0) r = 0;
                if (n == t.POINTER_DOWN) {
                    i = f.totalHeight - f.pointerHeight - 1;
                    f.pointerDown_sdo.setX(r);
                    f.pointerDown_sdo.setY(i)
                } else {
                    i = -f.pointerHeight + 1;
                    f.pointerUp_sdo.setX(r);
                    f.pointerUp_sdo.setY(i)
                }
            };
            f.show = function () {
                if (f.isShowed_bl) return;
                TweenMax.to(f, .4, {
                    alpha: 1,
                    delay: .1,
                    ease: Quart.easeOut
                });
                f.isShowed_bl = true
            };
            f.hide = function () {
                if (!f.isShowed_bl) return;
                TweenMax.killTweensOf(f);
                f.setX(-5e3);
                f.setAlpha(0);
                f.isShowed_bl = false
            };
            f.destroy = function () {
                TweenMax.killTweensOf(f);
                f.pointerUp_img = null;
                f.pointerDown_img = null;
                f.left_sdo.destroy();
                f.middle_sdo.destroy();
                f.right_sdo.destroy();
                f.text_sdo.destroy();
                f.pointerDown_sdo.destroy();
                f.leftImagePath_str = null;
                f.middleImagePath_str = null;
                f.rightImagePath_str = null;
                f.fontColor_str = null;
                f.bottomPointer_str = null;
                f.topPointer_str = null;
                f.pointerPosition_str = null;
                f.toolTipLabel_str = null;
                f.left_sdo = null;
                f.middle_sdo = null;
                f.right_sdo = null;
                f.text_sdo = null;
                f.pointerUp_sdo = null;
                f.pointerDown_sdo = null;
                e = null;
                n = null;
                r = null;
                i = null;
                s = null;
                o = null;
                u = null;
                a = null;
                f.setInnerHTML("");
                l.destroy();
                f = null;
                l = null;
                t.prototype = null
            };
            f.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.POINTER_UP = "pointerUp";
    t.POINTER_DOWN = "pointerDown";
    t.CLICK = "onClick";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDMarkerToolTip = t
})(window);
(function (e) {
    var t = function (e, n, r, i, s, o) {
            var u = this;
            var a = t.prototype;
            this.pointerUp_img;
            this.pointerDown_img;
            this.text_sdo = null;
            this.pointerUp_sdo = null;
            this.pointerDown_sdo = null;
            this.bottomPointer_str = s;
            this.topPointer_str = i;
            this.pointerPosition_str;
            this.toolTipLabel_str;
            this.htmlContent_el = r;
            this.totalHeight = 0;
            this.pointerWidth = n.width;
            this.pointerHeight = n.height;
            this.totalWidth;
            this.maxWidth = o;
            this.hideId_to;
            this.isMobile_bl = FWDUtils.isMobile;
            this.isShowed_bl = true;
            this.hasLabel_bl = false;
            u.init = function () {
                u.setOverflow("visible");
                u.setupMainContainers();
                u.setLabel();
                u.setX(-1e3);
                u.hideId_to = setTimeout(u.hide, 1e3)
            };
            u.setupMainContainers = function () {
                u.text_sdo = new FWDSimpleDisplayObject("div");
                u.text_sdo.setBackfaceVisibility();
                u.text_sdo.getStyle().fontSmoothing = "antialiased";
                u.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
                u.text_sdo.getStyle().textRendering = "optimizeLegibility";
                u.addChild(u.text_sdo);
                u.pointerUp_img = new Image;
                u.pointerUp_img.src = u.topPointer_str;
                u.pointerUp_sdo = new FWDSimpleDisplayObject("img");
                u.pointerUp_sdo.setScreen(u.pointerUp_img);
                u.pointerUp_sdo.setWidth(u.pointerWidth);
                u.pointerUp_sdo.setHeight(u.pointerHeight);
                u.pointerUp_sdo.setVisible(false);
                u.addChild(u.pointerUp_sdo);
                u.pointerDown_img = new Image;
                u.pointerDown_img.src = u.bottomPointer_str;
                u.pointerDown_sdo = new FWDSimpleDisplayObject("img");
                u.pointerDown_sdo.setScreen(u.pointerDown_img);
                u.pointerDown_sdo.setWidth(u.pointerWidth);
                u.pointerDown_sdo.setHeight(u.pointerHeight);
                u.pointerDown_sdo.setVisible(false);
                u.addChild(u.pointerDown_sdo)
            };
            u.setLabel = function () {
                if (u == null) return;
                u.maxWidth = o;
                u.text_sdo.setInnerHTML(u.htmlContent_el);
                setTimeout(function () {
                    if (u == null) return;
                    u.totalWidth = u.text_sdo.getWidth();
                    u.totalHeight = u.text_sdo.getHeight() + u.pointerHeight;
                    u.setHeight(u.totalHeight - u.pointerHeight);
                    u.hasLabel_bl = true
                }, 71)
            };
            u.positionPointer = function (e, n) {
                var r = 0;
                var i = 0;
                if (!e) e = 0;
                r = parseInt((u.totalWidth - u.pointerWidth) / 2) + e;
                if (r < 0) r = 0;
                if (n == t.POINTER_DOWN) {
                    i = u.totalHeight - u.pointerHeight - 1;
                    u.pointerDown_sdo.setX(r);
                    u.pointerDown_sdo.setY(i)
                } else {
                    i = -u.pointerHeight + 1;
                    u.pointerUp_sdo.setX(r);
                    u.pointerUp_sdo.setY(i)
                }
            };
            u.show = function () {
                if (u.isShowed_bl || !u.hasLabel_bl) return;
                e.addChild(u);
                if (u.isMobile_bl) {
                    u.setAlpha(1)
                } else {
                    if (FWDUtils.isIEAndLessThen9) {} else {
                        u.setAlpha(0);
                        TweenMax.killTweensOf(u);
                        TweenMax.to(u, .6, {
                            alpha: 1,
                            delay: .1,
                            ease: Quart.easeOut
                        })
                    }
                }
                u.isShowed_bl = true
            };
            u.hide = function () {
                if (!u.isShowed_bl || !u.hasLabel_bl) return;
                TweenMax.killTweensOf(u);
                try {
                    e.removeChild(u)
                } catch (t) {}
                u.isShowed_bl = false
            };
            u.destroy = function () {
                clearTimeout(u.hideId_to);
                TweenMax.killTweensOf(u);
                u.text_sdo.destroy();
                u.pointerUp_sdo.destroy();
                u.pointerDown_sdo.destroy();
                u.text_sdo = null;
                u.pointerUp_sdo = null;
                u.pointerDown_sdo = null;
                u.pointerUp_img = null;
                u.pointerDown_img = null;
                u.bottomPointer_str = null;
                u.topPointer_str = null;
                u.pointerPosition_str = null;
                u.toolTipLabel_str = null;
                e = null;
                n = null;
                i = null;
                s = null;
                u.setInnerHTML("");
                a.destroy();
                u = null;
                a = null;
                t.prototype = null
            };
            u.init()
        };
    t.setPrototype = function () {
        t.prototype = null;
        t.prototype = new FWDDisplayObject("div")
    };
    t.POINTER_UP = "pointerUp";
    t.POINTER_DOWN = "pointerDown";
    t.CLICK = "onClick";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDMarkerWindowToolTip = t
})(window);
(function (e) {
    var t = function (n) {
            var r = this;
            r.init = function () {
                TweenLite.ticker.useRAF(false);
                r.props_obj = n;
                r.isFullScreen_bl = false;
                r.mustHaveHolderDiv_bl = false;
                r.displayType = n.displayType.toLowerCase();
                if (!r.displayType) r.displayType = t.FULL_SCREEN;
                if (r.displayType == t.RESPONSIVE) r.mustHaveHolderDiv_bl = true;
                r.body = document.getElementsByTagName("body")[0];
                if (!r.props_obj) {
                    alert("FWDMegazoom constructor properties object is not defined!");
                    return
                }
                if (!r.props_obj) {
                    alert("FWDMegazoom constructor properties object is not defined!");
                    return
                }
                if (!r.props_obj.parentId) {
                    if (r.mustHaveHolderDiv_bl) {
                        alert("Property parentId is not defined in the FWDMegazoom constructor, self property represents the div id into which the megazoom is added as a child!");
                        return
                    }
                }
                if (r.mustHaveHolderDiv_bl && !FWDUtils.getChildById(r.props_obj.parentId)) {
                    alert("FWDMegazoom holder div is not found, please make sure that the div exsists and the id is correct! " + r.props_obj.parentId);
                    return
                }
                if (!r.props_obj.playListAndSkinId) {
                    alert("The playListAndSkinId property which represents the megazoom playlist id is not defined in the constructor function!");
                    return
                }
                this.rootElement_el = FWDUtils.getChildById(r.props_obj.playListAndSkinId);
                if (r.displayType == t.FULL_SCREEN || r.displayType == t.LIGHTBOX) {
                    if (FWDUtils.isIEAndLessThen9) {
                        r.stageContainer = r.body
                    } else {
                        r.stageContainer = document.documentElement
                    }
                } else {
                    r.stageContainer = FWDUtils.getChildById(r.props_obj.parentId)
                }
                this.customContextMenu = null;
                this.info_do = null;
                this.main_do = null;
                this.preloader_do = null;
                this.navigator_do = null;
                this.controller_do = null;
                this.imageManager_do = null;
                this.descriptionWindow_do = null;
                this.hider = null;
                this.lightBox_do = null;
                this.disable_sdo = null;
                this.backgroundColor_str = r.props_obj.backgroundColor || "transparent";
                this.lightBoxBackgroundColor_str = r.props_obj.lightBoxBackgroundColor || "transparent";
                this.viewportWidth = 0;
                this.viewportHeight = 0;
                this.stageWidth = 0;
                this.stageHeight = 0;
                this.pageXOffset = e.pageXOffset;
                this.pageYOffset = e.pageYOffset;
                this.lastScrollY;
                this.lastScrollX;
                this.lightBoxBackgroundOpacity = r.props_obj.lightBoxBackgroundOpacity || 1;
                this.lightBoxWidth = r.props_obj.lightBoxWidth || 500;
                this.lightBoxHeight = r.props_obj.lightBoxHeight || 400;
                this.finalLightBoxWidth;
                this.finalLightBoxHeight;
                this.resizeHandlerId_to;
                this.resizeHandler2Id_to;
                this.lighboxAnimDoneId_to;
                this.startHiderWithDelayId_to;
                this.initPluginId_to;
                this.activateWithDelayImagemanagerId_to;
                this.hidePreloaderId_to;
                this.centerImageNormalScreenId_to;
                this.orientationChangeId_to;
                this.orintationChangeComplete_bl = true;
                this.isMobile_bl = FWDUtils.isMobile;
                this.hibernate_bl = false;
                if (r.displayType == t.LIGHTBOX) {
                    this.initPluginId_to = setTimeout(function () {
                        r.setupLightBox()
                    }, 50)
                } else {
                    this.initPluginId_to = setTimeout(function () {
                        r.setupMegazoom()
                    }, 50)
                }
                try {
                    r.rootElement_el.parentNode.removeChild(r.rootElement_el)
                } catch (i) {}
            };
            r.setupMegazoom = function () {
                r.setupMainDo();
                r.startResizeHandler();
                r.setupInfo();
                r.setupData();
                if (FWDUtils.hasPointerEvent && FWDUtils.isMobile) e.addEventListener("contextmenu", r.preventContextMenu)
            };
            r.setupMainDo = function () {
                r.main_do = new FWDDisplayObject("div", "relative");
                r.main_do.getStyle().msTouchAction = "none";
                r.main_do.setBackfaceVisibility();
                r.main_do.setBkColor(r.backgroundColor_str);
                if (!FWDUtils.isMobile || FWDUtils.isMobile && FWDUtils.hasPointerEvent) r.main_do.setSelectable(false);
                if (r.displayType == t.FULL_SCREEN) {
                    r.stageContainer.style.overflow = "hidden";
                    r.main_do.getStyle().position = "absolute";
                    document.documentElement.style.overflow = "hidden";
                    r.stageContainer.appendChild(r.main_do.screen)
                } else if (r.displayType == t.LIGHTBOX) {
                    r.main_do.getStyle().zIndex = 99999991;
                    r.main_do.getStyle().position = "absolute";
                    r.stageContainer.appendChild(r.main_do.screen)
                } else {
                    r.stageContainer.appendChild(r.main_do.screen)
                }
            };
            r.preventContextMenu = function (e) {
                e.preventDefault()
            };
            r.setupInfo = function () {
                FWDInfo.setPrototype();
                r.info_do = new FWDInfo
            };
            r.startResizeHandler = function () {
                if (e.addEventListener) {
                    e.addEventListener("resize", r.onResizeHandler);
                    e.addEventListener("scroll", r.onResizeHandler);
                    e.addEventListener("orientationchange", r.orientationChange)
                } else if (e.attachEvent) {
                    e.attachEvent("onresize", r.onResizeHandler);
                    e.attachEvent("onscroll", r.onResizeHandler)
                }
                r.onResizeHandler(true);
                r.resizeHandlerId_to = setTimeout(function () {
                    r.resizeHandler(true)
                }, 500)
            };
            r.stopResizeHandler = function () {
                if (e.removeEventListener) {
                    e.removeEventListener("resize", r.onResizeHandler);
                    e.removeEventListener("scroll", r.onResizeHandler);
                    e.removeEventListener("orientationchange", r.orientationChange)
                } else if (e.detachEvent) {
                    e.detachEvent("onresize", r.onResizeHandler);
                    e.detachEvent("onscroll", r.onResizeHandler)
                }
                clearTimeout(r.resizeHandlerId_to)
            };
            r.onResizeHandler = function (e) {
                r.resizeHandler();
                clearTimeout(r.resizeHandler2Id_to);
                r.resizeHandler2Id_to = setTimeout(function () {
                    r.resizeHandler()
                }, 300)
            };
            r.onScrollHandler = function (e) {
                if (r.hibernate_bl) return;
                if (r.isFullScreen_bl || r.displayType == t.FULL_SCREEN || r.displayType == t.LIGHTBOX) {
                    r.resizeHandler()
                }
            };
            this.orientationChange = function () {
                if (r.displayType == t.FULL_SCREEN || r.isFullScreen_bl) {
                    r.orintationChangeComplete_bl = false;
                    clearTimeout(r.resizeHandlerId_to);
                    clearTimeout(r.resizeHandler2Id_to);
                    clearTimeout(r.orientationChangeId_to);
                    r.orientationChangeId_to = setTimeout(function () {
                        r.orintationChangeComplete_bl = true;
                        r.resizeHandler(true)
                    }, 1e3);
                    r.main_do.setX(0);
                    r.main_do.setWidth(0)
                }
            };
            r.resizeHandler = function (e) {
                if (!r.orintationChangeComplete_bl) return;
                var n = FWDUtils.getScrollOffsets();
                var i = FWDUtils.getViewportSize();
                if (r.viewportWidth == i.w && r.viewportHeight == i.h && r.pageXOffset == n.x && r.pageYOffset == n.y && !e) return;
                r.viewportWidth = i.w;
                r.viewportHeight = i.h;
                r.pageXOffset = n.x;
                r.pageYOffset = n.y;
                if (r.displayType == t.LIGHTBOX && !r.isFullScreen_bl) {
                    if (r.lightBoxWidth > i.w) {
                        r.finalLightBoxWidth = i.w;
                        r.finalLightBoxHeight = parseInt(r.lightBoxHeight * (i.w / r.lightBoxWidth))
                    } else {
                        r.finalLightBoxWidth = r.lightBoxWidth;
                        r.finalLightBoxHeight = r.lightBoxHeight
                    }
                    r.lightBox_do.setWidth(i.w);
                    r.lightBox_do.setHeight(i.h);
                    r.lightBox_do.setX(n.x);
                    r.lightBox_do.setY(n.y);
                    r.lightBox_do.mainLightBox_do.setX(parseInt((i.w - r.finalLightBoxWidth) / 2));
                    r.lightBox_do.mainLightBox_do.setY(parseInt((i.h - r.finalLightBoxHeight) / 2));
                    if (r.lightBox_do.closeButton_do && !r.lightBox_do.closeButtonIsTweening_bl) {
                        var s = parseInt((i.w + r.finalLightBoxWidth) / 2 - r.lightBox_do.closeButton_do.totalWidth / 2);
                        var o = parseInt((i.h - r.finalLightBoxHeight) / 2 - r.lightBox_do.closeButton_do.totalHeight / 2);
                        if (s + r.lightBox_do.closeButton_do.totalWidth > r.viewportWidth) {
                            s = r.viewportWidth - r.lightBox_do.closeButton_do.totalWidth
                        }
                        if (o < 0) {
                            o = 0
                        }
                        r.lightBox_do.closeButton_do.setX(s);
                        r.lightBox_do.closeButton_do.setY(o)
                    }
                    r.main_do.setX(0);
                    r.main_do.setY(0);
                    r.lightBox_do.mainLightBox_do.setWidth(r.finalLightBoxWidth);
                    r.lightBox_do.mainLightBox_do.setHeight(r.finalLightBoxHeight);
                    r.stageWidth = r.finalLightBoxWidth;
                    r.stageHeight = r.finalLightBoxHeight
                } else if (r.isFullScreen_bl || r.displayType == t.FULL_SCREEN) {
                    r.main_do.setX(n.x);
                    r.main_do.setY(n.y);
                    r.stageWidth = i.w;
                    r.stageHeight = i.h
                } else {
                    r.main_do.setX(0);
                    r.main_do.setY(0);
                    r.stageWidth = r.stageContainer.offsetWidth;
                    r.stageHeight = r.stageContainer.offsetHeight
                }
                r.main_do.setWidth(r.stageWidth);
                r.main_do.setHeight(r.stageHeight);
                if (r.preloader_do) r.preloader_do.positionAndResize();
                if (r.controller_do) r.controller_do.resizeAndPosition();
                if (r.imageManager_do) r.imageManager_do.resizeAndPosition(false);
                if (r.navigator_do) r.navigator_do.resizeAndPosition();
                if (r.descriptionWindow_do && r.descriptionWindow_do.isShowed_bl) r.descriptionWindow_do.resizeAndPosition()
            };
            r.setupLightBox = function () {
                FWDLightBox.setPrototype();
                r.lightBox_do = new FWDLightBox(r, r.lightBoxBackgroundColor_str, r.backgroundColor_str, r.lightBoxBackgroundOpacity, r.lightBoxWidth, r.lightBoxHeight);
                r.lightBox_do.getStyle().zIndex = 9999999;
                r.lightBox_do.addListener(FWDLightBox.CLOSE, r.lightBoxCloseHandler);
                r.lightBox_do.addListener(FWDLightBox.HIDE_COMPLETE, r.lightBoxHideCompleteHandler);
                r.lighboxAnimDoneId_to = setTimeout(r.setupMegazoom, 1800)
            };
            r.lightBoxCloseHandler = function () {
                r.stopResizeHandler();
                if (r.data) r.data.stopToLoad()
            };
            r.lightBoxHideCompleteHandler = function () {
                if (r.dispatchEvent) r.dispatchEvent(t.CLOSE_LIGHTBOX);
                r.destroy()
            };
            r.setupContextMenu = function () {
                FWDContextMenu.setPrototype();
                r.customContextMenu = new FWDContextMenu(r, r.data);
                r.customContextMenu.addListener(FWDController.PAN, r.contextMenuPanHandler);
                r.customContextMenu.addListener(FWDController.ZOOM_IN, r.contextMenuZoomInHandler);
                r.customContextMenu.addListener(FWDController.ZOOM_OUT, r.contextMenuZoomOutHandler);
                r.customContextMenu.addListener(FWDController.HIDE_MARKERS, r.controllerHideMarkers);
                r.customContextMenu.addListener(FWDController.SHOW_MARKERS, r.controllerShowMarkers);
                r.customContextMenu.addListener(FWDController.SHOW_INFO, r.contextMenuShowInfoWindow);
                r.customContextMenu.addListener(FWDController.GO_FULL_SCREEN, r.controllerGoFullScreen);
                r.customContextMenu.addListener(FWDController.GO_NORMAL_SCREEN, r.controllerGoNormalScreen);
                r.customContextMenu.addListener(FWDController.HIDE_CONTROLLER, r.contextMenuHideController);
                r.customContextMenu.addListener(FWDController.SHOW_CONTROLLER, r.contextMenuShowController)
            };
            this.contextMenuPanHandler = function (e) {
                if (e.dir == "left") {
                    r.controller_do.moveLeftButtonStartHandler(e.e)
                } else if (e.dir == "right") {
                    r.controller_do.moveRightButtonStartHandler(e.e)
                } else if (e.dir == "up") {
                    r.controller_do.moveUpButtonStartHandler(e.e)
                } else if (e.dir == "down") {
                    r.controller_do.moveDownButtonStartHandler(e.e)
                }
            };
            this.contextMenuGoToNextImageHandler = function (e) {
                r.controller_do.nextButtonStartHandler(e)
            };
            this.contextMenuGoToPrevImageHandler = function (e) {
                r.controller_do.prevButtonStartHandler(e)
            };
            this.contextMenuZoomInHandler = function (e) {
                r.controller_do.zoomInStartHandler(e)
            };
            this.contextMenuZoomOutHandler = function (e) {
                r.controller_do.zoomOutStartHandler(e)
            };
            this.contextMenuShowInfoWindow = function (e) {
                r.main_do.addChild(r.descriptionWindow_do);
                r.descriptionWindow_do.hide(false, true);
                r.descriptionWindow_do.show(r.data.infoText_str)
            };
            this.contextMenuHideController = function () {
                r.controller_do.setHideOrShowControllerAndToolTipState(1)
            };
            this.contextMenuShowController = function () {
                r.controller_do.setHideOrShowControllerAndToolTipState(0)
            };
            r.setupData = function () {
                FWDData.setPrototype();
                r.data = new FWDData(r.props_obj, r.rootElement_el);
                r.data.addListener(FWDData.LIGHBOX_CLOSE_BUTTON_LOADED, r.onLightboxCloseButtonLoadComplete);
                r.data.addListener(FWDData.PRELOADER_LOAD_DONE, r.onPreloaderLoadDone);
                r.data.addListener(FWDData.LOAD_ERROR, r.dataLoadError);
                r.data.addListener(FWDData.SKIN_PROGRESS, r.dataSkinProgressHandler);
                r.data.addListener(FWDData.IMAGES_PROGRESS, r.dataImagesProgressHandler);
                r.data.addListener(FWDData.LOAD_DONE, r.dataLoadComplete);
                r.data.addListener(FWDData.IMAGES_LOAD_COMPLETE, r.dataImageLoadComplete)
            };
            r.onLightboxCloseButtonLoadComplete = function () {
                if (r.displayType == t.LIGHTBOX) r.lightBox_do.setupCloseButton(r.data.mainLightboxCloseButtonN_img, r.data.mainLightboxCloseButtonS_img)
            };
            r.onPreloaderLoadDone = function () {
                r.setupPreloader()
            };
            r.dataLoadError = function (e, t) {
                r.main_do.addChild(r.info_do);
                r.info_do.showText(e.text)
            };
            r.dataSkinProgressHandler = function (e) {
                r.preloader_do.updateText("Loading skin...")
            };
            r.dataImagesProgressHandler = function (e) {
                r.preloader_do.updateText(r.data.preloaderText_str)
            };
            r.dataLoadComplete = function (e) {
                r.main_do.addChild(r.preloader_do);
                if (!r.isMobile_bl) r.setupContextMenu()
            };
            r.dataImageLoadComplete = function () {
                r.hidePreloaderId_to = setTimeout(function () {
                    r.preloader_do.hide(true)
                }, 500);
                r.setupImageManager();
                r.setupController();
                if (r.data.showNavigator_bl) r.setupNavigator();
                r.main_do.addChild(r.preloader_do);
                if (r.data.hideController_bl) {
                    r.setupHider();
                    r.controller_do.setupHider(r.hider);
                    r.imageManager_do.setupHider(r.hider);
                    if (r.navigator_do) r.navigator_do.setupHider(r.hider);
                    r.startHiderWithDelayId_to = setTimeout(function () {
                        r.hider.start()
                    }, r.data.hideControllerDelay)
                }
                if (r.customContextMenu) r.customContextMenu.isActive_bl = true;
                if (r.navigator_do) r.navigator_do.activate();
                r.setupDisableContainer();
                r.setupDescriptionWindow()
            };
            r.setupPreloader = function () {
                FWDPreloader.setPrototype();
                r.preloader_do = new FWDPreloader(r, r.data.mainPreloader_img, 50, 45, 30, 50, r.data.preloaderFontColor_str, r.data.preloaderBackgroundColor_str);
                r.preloader_do.addListener(FWDPreloader.HIDE_COMPLETE, r.onPreloaderHideCompleteHandler);
                r.preloader_do.positionAndResize();
                r.preloader_do.hide(false);
                r.preloader_do.show(true);
                r.preloader_do.start();
                r.main_do.addChild(r.preloader_do)
            };
            r.onPreloaderHideCompleteHandler = function () {
                r.main_do.removeChild(r.preloader_do);
                r.preloader_do.destroy();
                r.preloader_do = null
            };
            r.setupHider = function () {
                FWDHider.setPrototype();
                r.hider = new FWDHider(r.data.isMobile_bl, r.main_do, r.data.hideControllerDelay)
            };
            this.setupController = function () {
                FWDController.setPrototype();
                r.controller_do = new FWDController(r.data, r);
                r.controller_do.addListener(FWDController.MOUSE_DOWN, r.controllerOnMouseDownHandler);
                r.controller_do.addListener(FWDController.PAN, r.controllerOnPanHandler);
                r.controller_do.addListener(FWDController.DISABLE_PAN_OR_MOVE, r.disablePanOrMoveHandler);
                r.controller_do.addListener(FWDController.ENABLE_PAN_OR_MOVE, r.enablePanOrMoveHandler);
                r.controller_do.addListener(FWDController.SCROLL_BAR_UPDATE, r.controllerScrollBarUpdateHandler);
                r.controller_do.addListener(FWDController.ZOOM_WITH_BUTTONS, r.controllerZoomHandler);
                r.controller_do.addListener(FWDController.SHOW_INFO, r.controllerShowInfoHandler);
                r.controller_do.addListener(FWDController.GO_FULL_SCREEN, r.controllerGoFullScreen);
                r.controller_do.addListener(FWDController.GO_NORMAL_SCREEN, r.controllerGoNormalScreen);
                r.controller_do.addListener(FWDController.HIDE_MARKERS, r.controllerHideMarkers);
                r.controller_do.addListener(FWDController.SHOW_MARKERS, r.controllerShowMarkers);
                r.controller_do.addListener(FWDController.HIDE_CONTROLLER, r.controllerHideHandler);
                r.controller_do.addListener(FWDController.SHOW_CONTROLLER, r.controllerShowHandler);
                if (r.controller_do) r.controller_do.resizeAndPosition();
                r.main_do.addChild(r.controller_do)
            };
            this.controllerOnMouseDownHandler = function () {
                r.imageManager_do.hideToolTipWindow()
            };
            this.controllerOnPanHandler = function (e) {
                r.imageManager_do.panWithButtons(e.dir)
            };
            this.disablePanOrMoveHandler = function () {
                r.imageManager_do.disableOrEnablePanOrTouch(true)
            };
            this.enablePanOrMoveHandler = function () {
                r.imageManager_do.disableOrEnablePanOrTouch(false)
            };
            this.controllerScrollBarUpdateHandler = function (e) {
                r.imageManager_do.zoomInOrOutWithScrollBar(e.percent)
            };
            this.controllerZoomHandler = function (e) {
                r.imageManager_do.zoomInOrOutWithButtons(e.dir, e.withPause)
            };
            this.controllerShowInfoHandler = function () {
                r.main_do.addChild(r.descriptionWindow_do);
                r.descriptionWindow_do.hide(false, true);
                r.descriptionWindow_do.show(r.data.infoText_str)
            };
            this.controllerGoFullScreen = function () {
                if (r.isFullScreen_bl) return;
                r.goFullScreen();
                r.controller_do.setFullScreenButtonState(0);
                if (r.customContextMenu) r.customContextMenu.updateFullScreenButton(1);
                if (document.addEventListener) {
                    document.addEventListener("fullscreenchange", r.onFullScreenChange);
                    document.addEventListener("mozfullscreenchange", r.onFullScreenChange);
                    document.addEventListener("webkitfullscreenchange", r.onFullScreenChange)
                }
            };
            this.controllerGoNormalScreen = function () {
                if (!r.isFullScreen_bl) return;
                r.goNormalScreen();
                r.imageManager_do.centerImage();
                r.controller_do.setFullScreenButtonState(1);
                if (r.customContextMenu) r.customContextMenu.updateFullScreenButton(0);
                if (document.removeEventListener) {
                    document.removeEventListener("fullscreenchange", r.onFullScreenChange);
                    document.removeEventListener("mozfullscreenchange", r.onFullScreenChange);
                    document.removeEventListener("webkitfullscreenchange", r.onFullScreenChange)
                }
            };
            this.controllerHideMarkers = function () {
                if (r.customContextMenu) r.customContextMenu.updateHideOrShowMarkersButton(1);
                r.controller_do.setHideOrShowButtonAndToolTipState(1);
                r.imageManager_do.hideMarkers()
            };
            this.controllerShowMarkers = function () {
                if (r.customContextMenu) r.customContextMenu.updateHideOrShowMarkersButton(0);
                r.controller_do.setHideOrShowButtonAndToolTipState(0);
                r.imageManager_do.showMarkers()
            };
            this.onFullScreenChange = function (e) {
                if (!(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen)) {
                    if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel2_str);
                    r.controller_do.setFullScreenButtonState(1);
                    if (r.customContextMenu) r.customContextMenu.updateFullScreenButton(0);
                    r.controllerGoNormalScreen();
                    r.isFullScreen_bl = false
                }
            };
            this.controllerHideHandler = function () {
                if (r.customContextMenu) r.customContextMenu.startHideOrShowControllerHandler(1)
            };
            this.controllerShowHandler = function () {
                if (r.customContextMenu) r.customContextMenu.startHideOrShowControllerHandler(0)
            };
            r.setupImageManager = function (e) {
                FWDImageManager.setPrototype();
                r.imageManager_do = new FWDImageManager(r.data, r);
                r.imageManager_do.addListener(FWDImageManager.LARGE_IMAGE_LOAD_ERROR, r.imageManagerLoadError);
                r.imageManager_do.addListener(FWDImageManager.SCROLL_BAR_UPDATE, r.imageManagerScrollBarUpdate);
                r.imageManager_do.addListener(FWDImageManager.SHOW_NAVIGATOR, r.imageManagerShowNavigatorHandler);
                r.imageManager_do.addListener(FWDImageManager.HIDE_NAVIGATOR, r.imageManagerHideNavigatorHandler);
                r.imageManager_do.addListener(FWDImageManager.UPDATE_NAVIGATOR, r.imageManagerUpdateNavigatorHandler);
                r.imageManager_do.addListener(FWDImageManager.SHOW_INFO, r.imageManagerShowInfoHandler);
                r.imageManager_do.addListener(FWDImageManager.DISABLE_LEFT_AND_RIGHT_BUTTONS, r.disableLeftAndRightHandler);
                r.imageManager_do.addListener(FWDImageManager.ENABLE_LEFT_AND_RIGHT_BUTTONS, r.enableLeftAndRightHandler);
                r.imageManager_do.addListener(FWDImageManager.DISABLE_UP_AND_DOWN_BUTTONS, r.disableUpAndDownHandler);
                r.imageManager_do.addListener(FWDImageManager.ENABLE_UP_AND_DOWN_BUTTONS, r.enableUpAndDownHandler);
                r.main_do.addChild(r.imageManager_do)
            };
            r.imageManagerLoadError = function (e) {
                r.main_do.addChild(r.info_do);
                r.info_do.showText(e.error)
            };
            r.imageManagerScrollBarUpdate = function (e) {
                r.controller_do.updateScrollBar(e.percent, e.animate)
            };
            r.imageManagerShowNavigatorHandler = function () {
                r.navigator_do.show(true)
            };
            r.imageManagerHideNavigatorHandler = function () {
                r.navigator_do.hide(true)
            };
            r.imageManagerUpdateNavigatorHandler = function (e) {
                r.navigator_do.update(e.percentX, e.percentY, e.percentWidth, e.percentHeight, e.animate)
            };
            r.imageManagerShowInfoHandler = function (e) {
                r.main_do.addChild(r.descriptionWindow_do);
                r.descriptionWindow_do.hide(false, true);
                r.descriptionWindow_do.show(e.text)
            };
            r.disableLeftAndRightHandler = function () {
                r.controller_do.disableLeftAndRightButtons();
                if (r.customContextMenu) r.customContextMenu.disableLeftAndRightButtons()
            };
            r.enableLeftAndRightHandler = function () {
                r.controller_do.enableLeftAndRightButtons();
                if (r.customContextMenu) r.customContextMenu.enableLeftAndRightButtons()
            };
            r.disableUpAndDownHandler = function () {
                r.controller_do.disableUpAndDownButtons();
                if (r.customContextMenu) r.customContextMenu.disableUpAndDownButtons()
            };
            r.enableUpAndDownHandler = function () {
                r.controller_do.enableUpAndDownButtons();
                if (r.customContextMenu) r.customContextMenu.enableUpAndDownButtons()
            };
            r.setupNavigator = function () {
                FWDNavigator.setPrototype();
                r.navigator_do = new FWDNavigator(r, r.data);
                r.navigator_do.addListener(FWDNavigator.PAN_START, r.navigatorOnPanStartHandler);
                r.navigator_do.addListener(FWDNavigator.PAN_END, r.navigatorOnPanEndHandler);
                r.navigator_do.addListener(FWDNavigator.PAN, r.navigatorPanHandler);
                r.main_do.addChild(r.navigator_do)
            };
            r.navigatorOnPanStartHandler = function () {
                r.imageManager_do.hideToolTipWindow();
                if (!r.isMobile_bl) r.disableAll()
            };
            r.navigatorOnPanEndHandler = function () {
                if (!r.isMobile_bl) r.enableAll()
            };
            r.navigatorPanHandler = function (e) {
                r.imageManager_do.updateOnNavigatorPan(e.percentX, e.percentY)
            };
            r.setupDescriptionWindow = function () {
                FWDDescriptionWindow.setPrototype();
                r.descriptionWindow_do = new FWDDescriptionWindow(r, r.data);
                r.descriptionWindow_do.addListener(FWDDescriptionWindow.SHOW_START, r.descWindowShowStartHandler);
                r.descriptionWindow_do.addListener(FWDDescriptionWindow.HIDE_COMPLETE, r.descWindowHideComplteHandler)
            };
            r.descWindowShowStartHandler = function () {
                if (r.customContextMenu) r.customContextMenu.disable()
            };
            r.descWindowHideComplteHandler = function () {
                if (r.customContextMenu) r.customContextMenu.enable();
                r.main_do.removeChild(r.descriptionWindow_do)
            };
            this.setupDisableContainer = function () {
                r.disable_sdo = new FWDSimpleDisplayObject("div");
                r.disable_sdo.screen.style.cursor = "url(" + r.data.handGrabPath_str + "), default";
                if (FWDUtils.isIE || FWDUtils.isChrome) {
                    r.disable_sdo.setBkColor("#000000");
                    r.disable_sdo.setAlpha(1e-4)
                }
                r.main_do.addChild(r.disable_sdo)
            };
            this.disableAll = function () {
                r.disable_sdo.setWidth(r.stageWidth + 3e3);
                r.disable_sdo.setHeight(r.stageHeight + 3e3)
            };
            this.enableAll = function () {
                r.disable_sdo.setWidth(0);
                r.disable_sdo.setWidth(0)
            };
            r.goFullScreen = function () {
                var e = FWDUtils.getScrollOffsets();
                r.lastScrollX = e.x;
                r.lastScrollY = e.y;
                if (document.documentElement.requestFullScreen) {
                    document.documentElement.requestFullScreen()
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen()
                } else if (document.documentElement.webkitRequestFullScreen) {
                    document.documentElement.webkitRequestFullScreen()
                } else if (document.documentElement.msieRequestFullScreen) {
                    document.documentElement.msieRequestFullScreen()
                }
                r.main_do.getStyle().position = "absolute";
                r.body.style.overflow = "hidden";
                document.documentElement.style.overflow = "hidden";
                if (FWDUtils.isIEAndLessThen9) {
                    r.body.appendChild(r.main_do.screen)
                } else {
                    document.documentElement.appendChild(r.main_do.screen)
                }
                r.main_do.getStyle().zIndex = 100000001;
                r.isFullScreen_bl = true;
                r.resizeHandler(true)
            };
            r.goNormalScreen = function () {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                } else if (document.msieCancelFullScreen) {
                    document.msieCancelFullScreen()
                }
                r.addMainDoToTheOriginalParent();
                r.isFullScreen_bl = false;
                r.resizeHandler(true);
                r.centerImageNormalScreenId_to = setTimeout(function () {
                    r.imageManager_do.resizeAndPosition(true, false)
                }, 50)
            };
            r.addMainDoToTheOriginalParent = function () {
                if (r.displayType != t.FULL_SCREEN) {
                    if (FWDUtils.isIEAndLessThen9) {
                        document.documentElement.style.overflow = "auto";
                        this.body.style.overflow = "auto";
                        this.body.style.visibility = "visible"
                    } else {
                        document.documentElement.style.overflow = "visible";
                        r.body.style.overflow = "visible";
                        r.body.style.display = "inline"
                    }
                }
                if (r.displayType == t.FULL_SCREEN) {
                    if (FWDUtils.isIEAndLessThen9) {
                        r.body.appendChild(r.main_do.screen)
                    } else {
                        document.documentElement.appendChild(r.main_do.screen)
                    }
                } else if (r.displayType == t.LIGHTBOX) {
                    r.stageContainer.appendChild(r.main_do.screen)
                } else {
                    r.main_do.getStyle().position = "relative";
                    r.stageContainer.appendChild(r.main_do.screen)
                }
                r.main_do.getStyle().zIndex = 0;
                e.scrollTo(r.lastScrollX, r.lastScrollY)
            };
            r.cleanMainEvents = function () {
                if (e.removeEventListener) {
                    e.removeEventListener("resize", r.onResizeHandler);
                    e.removeEventListener("scroll", r.onResizeHandler);
                    document.removeEventListener("fullscreenchange", r.onFullScreenChange);
                    document.removeEventListener("mozfullscreenchange", r.onFullScreenChange);
                    document.removeEventListener("webkitfullscreenchange", r.onFullScreenChange)
                } else if (e.detachEvent) {
                    e.detachEvent("onresize", r.onResizeHandler);
                    e.detachEvent("onscroll", r.onResizeHandler)
                }
                if (r.isMobile_bl) {
                    e.removeEventListener("contextmenu", r.preventContextMenu)
                }
                clearTimeout(r.resizeHandlerId_to);
                clearTimeout(r.resizeHandler2Id_to);
                clearTimeout(r.lighboxAnimDoneId_to);
                clearTimeout(r.startHiderWithDelayId_to);
                clearTimeout(r.initPluginId_to);
                clearTimeout(r.activateWithDelayImagemanagerId_to);
                clearTimeout(r.hidePreloaderId_to);
                clearTimeout(r.centerImageNormalScreenId_to)
            };
            r.destroy = function () {
                r.cleanMainEvents();
                if (r.data) r.data.destroy();
                if (r.lightBox_do) r.lightBox_do.destroy();
                if (r.preloader_do) r.preloader_do.destroy();
                if (r.customContextMenu) r.customContextMenu.destroy();
                if (r.info_do) r.info_do.destroy();
                if (r.imageManager_do) {
                    TweenMax.killTweensOf(r.imageManager_do);
                    r.imageManager_do.destroy()
                }
                if (r.controller_do) r.controller_do.destroy();
                if (r.navigator_do) r.navigator_do.destroy();
                if (r.hider) r.hider.destroy();
                if (r.descriptionWindow_do) r.descriptionWindow_do.destroy();
                try {
                    r.main_do.screen.parentNode.removeChild(r.main_do.screen)
                } catch (e) {}
                if (r.main_do) {
                    r.main_do.setInnerHTML("");
                    r.main_do.destroy()
                }
                r.data = null;
                r.lightBox_do = null;
                r.customContextMenu = null;
                r.preloader_do = null;
                r.hider = null;
                r.info_do = null;
                r.main_do = null;
                r.imageManager_do = null;
                r.navigator_do = null;
                r = null
            };
            r.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDEventDispatcher
    };
    t.FULL_SCREEN = "fullscreen";
    t.LIGHTBOX = "lightbox";
    t.RESPONSIVE = "responsive";
    t.CLOSE_LIGHTBOX = "closeLightBox";
    t.CLOSE_LIGHTBOX = "closeLightBox";
    e.FWDMegazoom = t
})(window);
(window._gsQueue || (window._gsQueue = [])).push(function () {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = [].slice,
            i = function (e, t, r) {
                n.call(this, e, t, r);
                this._cycle = 0;
                this._yoyo = this.vars.yoyo === true;
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._dirty = true
            },
            s = function (e) {
                return e.jquery || e.length && e[0] && e[0].nodeType && e[0].style
            },
            o = i.prototype = n.to({}, .1, {}),
            u = [];
        i.version = "1.9.7";
        o.constructor = i;
        o.kill()._gc = false;
        i.killTweensOf = i.killDelayedCallsTo = n.killTweensOf;
        i.getTweensOf = n.getTweensOf;
        i.ticker = n.ticker;
        o.invalidate = function () {
            this._yoyo = this.vars.yoyo === true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return n.prototype.invalidate.call(this)
        };
        o.updateTo = function (e, t) {
            var r = this.ratio,
                i;
            if (t && this.timeline && this._startTime < this._timeline._time) {
                this._startTime = this._timeline._time;
                this._uncache(false);
                if (this._gc) {
                    this._enabled(true, false)
                } else {
                    this._timeline.insert(this, this._startTime - this._delay)
                }
            }
            for (i in e) {
                this.vars[i] = e[i]
            }
            if (this._initted) {
                if (t) {
                    this._initted = false
                } else {
                    if (this._notifyPluginsOfEnabled && this._firstPT) {
                        n._onPluginEvent("_onDisable", this)
                    }
                    if (this._time / this._duration > .998) {
                        var s = this._time;
                        this.render(0, true, false);
                        this._initted = false;
                        this.render(s, true, false)
                    } else if (this._time > 0) {
                        this._initted = false;
                        this._init();
                        var o = 1 / (1 - r),
                            u = this._firstPT,
                            a;
                        while (u) {
                            a = u.s + u.c;
                            u.c *= o;
                            u.s = a - u.c;
                            u = u._next
                        }
                    }
                }
            }
            return this
        };
        o.render = function (e, t, n) {
            var r = !this._dirty ? this._totalDuration : this.totalDuration(),
                i = this._time,
                s = this._totalTime,
                o = this._cycle,
                a, f, l, c, h, p, d;
            if (e >= r) {
                this._totalTime = r;
                this._cycle = this._repeat;
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = 0;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0
                } else {
                    this._time = this._duration;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1
                }
                if (!this._reversed) {
                    a = true;
                    f = "onComplete"
                }
                if (this._duration === 0) {
                    if (e === 0 || this._rawPrevTime < 0) if (this._rawPrevTime !== e) {
                        n = true;
                        if (this._rawPrevTime > 0) {
                            f = "onReverseComplete";
                            if (t) {
                                e = -1
                            }
                        }
                    }
                    this._rawPrevTime = e
                }
            } else if (e < 1e-7) {
                this._totalTime = this._time = this._cycle = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (s !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                    f = "onReverseComplete";
                    a = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (this._duration === 0) {
                        if (this._rawPrevTime >= 0) {
                            n = true
                        }
                        this._rawPrevTime = e
                    }
                } else if (!this._initted) {
                    n = true
                }
            } else {
                this._totalTime = this._time = e;
                if (this._repeat !== 0) {
                    c = this._duration + this._repeatDelay;
                    this._cycle = this._totalTime / c >> 0;
                    if (this._cycle !== 0) if (this._cycle === this._totalTime / c) {
                        this._cycle--
                    }
                    this._time = this._totalTime - this._cycle * c;
                    if (this._yoyo) if ((this._cycle & 1) !== 0) {
                        this._time = this._duration - this._time
                    }
                    if (this._time > this._duration) {
                        this._time = this._duration
                    } else if (this._time < 0) {
                        this._time = 0
                    }
                }
                if (this._easeType) {
                    h = this._time / this._duration;
                    p = this._easeType;
                    d = this._easePower;
                    if (p === 1 || p === 3 && h >= .5) {
                        h = 1 - h
                    }
                    if (p === 3) {
                        h *= 2
                    }
                    if (d === 1) {
                        h *= h
                    } else if (d === 2) {
                        h *= h * h
                    } else if (d === 3) {
                        h *= h * h * h
                    } else if (d === 4) {
                        h *= h * h * h * h
                    }
                    if (p === 1) {
                        this.ratio = 1 - h
                    } else if (p === 2) {
                        this.ratio = h
                    } else if (this._time / this._duration < .5) {
                        this.ratio = h / 2
                    } else {
                        this.ratio = 1 - h / 2
                    }
                } else {
                    this.ratio = this._ease.getRatio(this._time / this._duration)
                }
            }
            if (i === this._time && !n) {
                if (s !== this._totalTime) if (this._onUpdate) if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)
                }
                return
            } else if (!this._initted) {
                this._init();
                if (!this._initted) {
                    return
                }
                if (this._time && !a) {
                    this.ratio = this._ease.getRatio(this._time / this._duration)
                } else if (a && this._ease._calcEnd) {
                    this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1)
                }
            }
            if (!this._active) if (!this._paused) {
                this._active = true
            }
            if (s === 0) {
                if (this._startAt) {
                    if (e >= 0) {
                        this._startAt.render(e, t, n)
                    } else if (!f) {
                        f = "_dummyGS"
                    }
                }
                if (this.vars.onStart) if (this._totalTime !== 0 || this._duration === 0) if (!t) {
                    this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)
                }
            }
            l = this._firstPT;
            while (l) {
                if (l.f) {
                    l.t[l.p](l.c * this.ratio + l.s)
                } else {
                    var v = l.c * this.ratio + l.s;
                    if (l.p == "x") {
                        l.t.setX(v)
                    } else if (l.p == "y") {
                        l.t.setY(v)
                    } else if (l.p == "z") {
                        l.t.setZ(v)
                    } else if (l.p == "w") {
                        l.t.setWidth(v)
                    } else if (l.p == "h") {
                        l.t.setHeight(v)
                    } else if (l.p == "alpha") {
                        l.t.setAlpha(v)
                    } else if (l.p == "scale") {
                        l.t.setScale(v)
                    } else {
                        l.t[l.p] = v
                    }
                }
                l = l._next
            }
            if (this._onUpdate) {
                if (e < 0) if (this._startAt) {
                    this._startAt.render(e, t, n)
                }
                if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)
                }
            }
            if (this._cycle !== o) if (!t) if (!this._gc) if (this.vars.onRepeat) {
                this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)
            }
            if (f) if (!this._gc) {
                if (e < 0 && this._startAt && !this._onUpdate) {
                    this._startAt.render(e, t, n)
                }
                if (a) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false)
                    }
                    this._active = false
                }
                if (!t && this.vars[f]) {
                    this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || u)
                }
            }
        };
        i.to = function (e, t, n) {
            return new i(e, t, n)
        };
        i.from = function (e, t, n) {
            n.runBackwards = true;
            n.immediateRender = n.immediateRender != false;
            return new i(e, t, n)
        };
        i.fromTo = function (e, t, n, r) {
            r.startAt = n;
            r.immediateRender = r.immediateRender != false && n.immediateRender != false;
            return new i(e, t, r)
        };
        i.staggerTo = i.allTo = function (e, t, o, a, f, l, c) {
            a = a || 0;
            var h = o.delay || 0,
                p = [],
                d = function () {
                    if (o.onComplete) {
                        o.onComplete.apply(o.onCompleteScope || this, o.onCompleteParams || u)
                    }
                    f.apply(c || this, l || u)
                },
                v, m, g, y;
            if (!(e instanceof Array)) {
                if (typeof e === "string") {
                    e = n.selector(e) || e
                }
                if (s(e)) {
                    e = r.call(e, 0)
                }
            }
            v = e.length;
            for (g = 0; g < v; g++) {
                m = {};
                for (y in o) {
                    m[y] = o[y]
                }
                m.delay = h;
                if (g === v - 1 && f) {
                    m.onComplete = d
                }
                p[g] = new i(e[g], t, m);
                h += a
            }
            return p
        };
        i.staggerFrom = i.allFrom = function (e, t, n, r, s, o, u) {
            n.runBackwards = true;
            n.immediateRender = n.immediateRender != false;
            return i.staggerTo(e, t, n, r, s, o, u)
        };
        i.staggerFromTo = i.allFromTo = function (e, t, n, r, s, o, u, a) {
            r.startAt = n;
            r.immediateRender = r.immediateRender != false && n.immediateRender != false;
            return i.staggerTo(e, t, r, s, o, u, a)
        };
        i.delayedCall = function (e, t, n, r, s) {
            return new i(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: r,
                immediateRender: false,
                useFrames: s,
                overwrite: 0
            })
        };
        i.set = function (e, t) {
            return new i(e, 0, t)
        };
        i.isTweening = function (e) {
            var t = n.getTweensOf(e),
                r = t.length,
                i;
            while (--r > -1) {
                i = t[r];
                if (i._active || i._startTime === i._timeline._time && i._timeline._active) {
                    return true
                }
            }
            return false
        };
        var a = function (e, t) {
                var r = [],
                    i = 0,
                    s = e._first;
                while (s) {
                    if (s instanceof n) {
                        r[i++] = s
                    } else {
                        if (t) {
                            r[i++] = s
                        }
                        r = r.concat(a(s, t));
                        i = r.length
                    }
                    s = s._next
                }
                return r
            },
            f = i.getAllTweens = function (t) {
                return a(e._rootTimeline, t).concat(a(e._rootFramesTimeline, t))
            };
        i.killAll = function (e, n, r, i) {
            if (n == null) {
                n = true
            }
            if (r == null) {
                r = true
            }
            var s = f(i != false),
                o = s.length,
                u = n && r && i,
                a, l, c;
            for (c = 0; c < o; c++) {
                l = s[c];
                if (u || l instanceof t || (a = l.target === l.vars.onComplete) && r || n && !a) {
                    if (e) {
                        l.totalTime(l.totalDuration())
                    } else {
                        l._enabled(false, false)
                    }
                }
            }
        };
        i.killChildTweensOf = function (e, t) {
            if (e == null) {
                return
            }
            var o = n._tweenLookup,
                u, a, f, l, c;
            if (typeof e === "string") {
                e = n.selector(e) || e
            }
            if (s(e)) {
                e = r(e, 0)
            }
            if (e instanceof Array) {
                l = e.length;
                while (--l > -1) {
                    i.killChildTweensOf(e[l], t)
                }
                return
            }
            u = [];
            for (f in o) {
                a = o[f].target.parentNode;
                while (a) {
                    if (a === e) {
                        u = u.concat(o[f].tweens)
                    }
                    a = a.parentNode
                }
            }
            c = u.length;
            for (l = 0; l < c; l++) {
                if (t) {
                    u[l].totalTime(u[l].totalDuration())
                }
                u[l]._enabled(false, false)
            }
        };
        var l = function (e, n, r, i) {
                if (n === undefined) {
                    n = true
                }
                if (r === undefined) {
                    r = true
                }
                var s = f(i),
                    o = n && r && i,
                    u = s.length,
                    a, l;
                while (--u > -1) {
                    l = s[u];
                    if (o || l instanceof t || (a = l.target === l.vars.onComplete) && r || n && !a) {
                        l.paused(e)
                    }
                }
            };
        i.pauseAll = function (e, t, n) {
            l(true, e, t, n)
        };
        i.resumeAll = function (e, t, n) {
            l(false, e, t, n)
        };
        o.progress = function (e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), false)
        };
        o.totalProgress = function (e) {
            return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * e, false)
        };
        o.time = function (e, t) {
            if (!arguments.length) {
                return this._time
            }
            if (this._dirty) {
                this.totalDuration()
            }
            if (e > this._duration) {
                e = this._duration
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                e = this._duration - e + this._cycle * (this._duration + this._repeatDelay)
            } else if (this._repeat !== 0) {
                e += this._cycle * (this._duration + this._repeatDelay)
            }
            return this.totalTime(e, t)
        };
        o.duration = function (t) {
            if (!arguments.length) {
                return this._duration
            }
            return e.prototype.duration.call(this, t)
        };
        o.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
                    this._dirty = false
                }
                return this._totalDuration
            }
            return this._repeat === -1 ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
        };
        o.repeat = function (e) {
            if (!arguments.length) {
                return this._repeat
            }
            this._repeat = e;
            return this._uncache(true)
        };
        o.repeatDelay = function (e) {
            if (!arguments.length) {
                return this._repeatDelay
            }
            this._repeatDelay = e;
            return this._uncache(true)
        };
        o.yoyo = function (e) {
            if (!arguments.length) {
                return this._yoyo
            }
            this._yoyo = e;
            return this
        };
        return i
    }, true);
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = function (e) {
                t.call(this, e);
                this._labels = {};
                this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
                this.smoothChildTiming = this.vars.smoothChildTiming === true;
                this._sortChildren = true;
                this._onUpdate = this.vars.onUpdate;
                var n = this.vars,
                    r = i.length,
                    s, o;
                while (--r > -1) {
                    o = n[i[r]];
                    if (o) {
                        s = o.length;
                        while (--s > -1) {
                            if (o[s] === "{self}") {
                                o = n[i[r]] = o.concat();
                                o[s] = this
                            }
                        }
                    }
                }
                if (n.tweens instanceof Array) {
                    this.add(n.tweens, 0, n.align, n.stagger)
                }
            },
            i = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
            s = [],
            o = function (e) {
                var t = {},
                    n;
                for (n in e) {
                    t[n] = e[n]
                }
                return t
            },
            u = s.slice,
            a = r.prototype = new t;
        r.version = "1.9.7";
        a.constructor = r;
        a.kill()._gc = false;
        a.to = function (e, t, r, i) {
            return t ? this.add(new n(e, t, r), i) : this.set(e, r, i)
        };
        a.from = function (e, t, r, i) {
            return this.add(n.from(e, t, r), i)
        };
        a.fromTo = function (e, t, r, i, s) {
            return t ? this.add(n.fromTo(e, t, r, i), s) : this.set(e, i, s)
        };
        a.staggerTo = function (e, t, i, s, a, f, l, c) {
            var h = new r({
                onComplete: f,
                onCompleteParams: l,
                onCompleteScope: c
            }),
                p;
            if (typeof e === "string") {
                e = n.selector(e) || e
            }
            if (!(e instanceof Array) && e.length && e[0] && e[0].nodeType && e[0].style) {
                e = u.call(e, 0)
            }
            s = s || 0;
            for (p = 0; p < e.length; p++) {
                if (i.startAt) {
                    i.startAt = o(i.startAt)
                }
                h.to(e[p], t, o(i), p * s)
            }
            return this.add(h, a)
        };
        a.staggerFrom = function (e, t, n, r, i, s, o, u) {
            n.immediateRender = n.immediateRender != false;
            n.runBackwards = true;
            return this.staggerTo(e, t, n, r, i, s, o, u)
        };
        a.staggerFromTo = function (e, t, n, r, i, s, o, u, a) {
            r.startAt = n;
            r.immediateRender = r.immediateRender != false && n.immediateRender != false;
            return this.staggerTo(e, t, r, i, s, o, u, a)
        };
        a.call = function (e, t, r, i) {
            return this.add(n.delayedCall(0, e, t, r), i)
        };
        a.set = function (e, t, r) {
            r = this._parseTimeOrLabel(r, 0, true);
            if (t.immediateRender == null) {
                t.immediateRender = r === this._time && !this._paused
            }
            return this.add(new n(e, 0, t), r)
        };
        r.exportRoot = function (e, t) {
            e = e || {};
            if (e.smoothChildTiming == null) {
                e.smoothChildTiming = true
            }
            var i = new r(e),
                s = i._timeline,
                o, u;
            if (t == null) {
                t = true
            }
            s._remove(i, true);
            i._startTime = 0;
            i._rawPrevTime = i._time = i._totalTime = s._time;
            o = s._first;
            while (o) {
                u = o._next;
                if (!t || !(o instanceof n && o.target === o.vars.onComplete)) {
                    i.add(o, o._startTime - o._delay)
                }
                o = u
            }
            s.add(i, 0);
            return i
        };
        a.add = function (i, s, o, u) {
            var a, f, l, c, h;
            if (typeof s !== "number") {
                s = this._parseTimeOrLabel(s, 0, true, i)
            }
            if (!(i instanceof e)) {
                if (i instanceof Array) {
                    o = o || "normal";
                    u = u || 0;
                    a = s;
                    f = i.length;
                    for (l = 0; l < f; l++) {
                        if ((c = i[l]) instanceof Array) {
                            c = new r({
                                tweens: c
                            })
                        }
                        this.add(c, a);
                        if (typeof c !== "string" && typeof c !== "function") {
                            if (o === "sequence") {
                                a = c._startTime + c.totalDuration() / c._timeScale
                            } else if (o === "start") {
                                c._startTime -= c.delay()
                            }
                        }
                        a += u
                    }
                    return this._uncache(true)
                } else if (typeof i === "string") {
                    return this.addLabel(i, s)
                } else if (typeof i === "function") {
                    i = n.delayedCall(0, i)
                } else {
                    throw "Cannot add " + i + " into the timeline; it is neither a tween, timeline, function, nor a string."
                }
            }
            t.prototype.add.call(this, i, s);
            if (this._gc) if (!this._paused) if (this._time === this._duration) if (this._time < this.duration()) {
                h = this;
                while (h._gc && h._timeline) {
                    if (h._timeline.smoothChildTiming) {
                        h.totalTime(h._totalTime, true)
                    } else {
                        h._enabled(true, false)
                    }
                    h = h._timeline
                }
            }
            return this
        };
        a.remove = function (t) {
            if (t instanceof e) {
                return this._remove(t, false)
            } else if (t instanceof Array) {
                var n = t.length;
                while (--n > -1) {
                    this.remove(t[n])
                }
                return this
            } else if (typeof t === "string") {
                return this.removeLabel(t)
            }
            return this.kill(null, t)
        };
        a.append = function (e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, true, e))
        };
        a.insert = a.insertMultiple = function (e, t, n, r) {
            return this.add(e, t || 0, n, r)
        };
        a.appendMultiple = function (e, t, n, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, true, e), n, r)
        };
        a.addLabel = function (e, t) {
            this._labels[e] = this._parseTimeOrLabel(t);
            return this
        };
        a.removeLabel = function (e) {
            delete this._labels[e];
            return this
        };
        a.getLabelTime = function (e) {
            return this._labels[e] != null ? this._labels[e] : -1
        };
        a._parseTimeOrLabel = function (t, n, r, i) {
            var s;
            if (i instanceof e && i.timeline === this) {
                this.remove(i)
            } else if (i instanceof Array) {
                s = i.length;
                while (--s > -1) {
                    if (i[s] instanceof e && i[s].timeline === this) {
                        this.remove(i[s])
                    }
                }
            }
            if (typeof n === "string") {
                return this._parseTimeOrLabel(n, r && typeof t === "number" && this._labels[n] == null ? t - this.duration() : 0, r)
            }
            n = n || 0;
            if (typeof t === "string" && (isNaN(t) || this._labels[t] != null)) {
                s = t.indexOf("=");
                if (s === -1) {
                    if (this._labels[t] == null) {
                        return r ? this._labels[t] = this.duration() + n : n
                    }
                    return this._labels[t] + n
                }
                n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1));
                t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, r) : this.duration()
            } else if (t == null) {
                t = this.duration()
            }
            return Number(t) + n
        };
        a.seek = function (e, t) {
            return this.totalTime(typeof e === "number" ? e : this._parseTimeOrLabel(e), t !== false)
        };
        a.stop = function () {
            return this.paused(true)
        };
        a.gotoAndPlay = function (e, t) {
            return this.play(e, t)
        };
        a.gotoAndStop = function (e, t) {
            return this.pause(e, t)
        };
        a.render = function (e, t, n) {
            if (this._gc) {
                this._enabled(true, false)
            }
            this._active = !this._paused;
            var r = !this._dirty ? this._totalDuration : this.totalDuration(),
                i = this._time,
                o = this._startTime,
                u = this._timeScale,
                a = this._paused,
                f, l, c, h, p;
            if (e >= r) {
                this._totalTime = this._time = r;
                if (!this._reversed) if (!this._hasPausedChild()) {
                    l = true;
                    h = "onComplete";
                    if (this._duration === 0) if (e === 0 || this._rawPrevTime < 0) if (this._rawPrevTime !== e && this._first) {
                        p = true;
                        if (this._rawPrevTime > 0) {
                            h = "onReverseComplete"
                        }
                    }
                }
                this._rawPrevTime = e;
                e = r + 1e-6
            } else if (e < 1e-7) {
                this._totalTime = this._time = 0;
                if (i !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                    h = "onReverseComplete";
                    l = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (this._duration === 0) if (this._rawPrevTime >= 0 && this._first) {
                        p = true
                    }
                } else if (!this._initted) {
                    p = true
                }
                this._rawPrevTime = e;
                e = 0
            } else {
                this._totalTime = this._time = this._rawPrevTime = e
            }
            if ((this._time === i || !this._first) && !n && !p) {
                return
            } else if (!this._initted) {
                this._initted = true
            }
            if (i === 0) if (this.vars.onStart) if (this._time !== 0) if (!t) {
                this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)
            }
            if (this._time >= i) {
                f = this._first;
                while (f) {
                    c = f._next;
                    if (this._paused && !a) {
                        break
                    } else if (f._active || f._startTime <= this._time && !f._paused && !f._gc) {
                        if (!f._reversed) {
                            f.render((e - f._startTime) * f._timeScale, t, n)
                        } else {
                            f.render((!f._dirty ? f._totalDuration : f.totalDuration()) - (e - f._startTime) * f._timeScale, t, n)
                        }
                    }
                    f = c
                }
            } else {
                f = this._last;
                while (f) {
                    c = f._prev;
                    if (this._paused && !a) {
                        break
                    } else if (f._active || f._startTime <= i && !f._paused && !f._gc) {
                        if (!f._reversed) {
                            f.render((e - f._startTime) * f._timeScale, t, n)
                        } else {
                            f.render((!f._dirty ? f._totalDuration : f.totalDuration()) - (e - f._startTime) * f._timeScale, t, n)
                        }
                    }
                    f = c
                }
            }
            if (this._onUpdate) if (!t) {
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)
            }
            if (h) if (!this._gc) if (o === this._startTime || u !== this._timeScale) if (this._time === 0 || r >= this.totalDuration()) {
                if (l) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false)
                    }
                    this._active = false
                }
                if (!t && this.vars[h]) {
                    this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || s)
                }
            }
        };
        a._hasPausedChild = function () {
            var e = this._first;
            while (e) {
                if (e._paused || e instanceof r && e._hasPausedChild()) {
                    return true
                }
                e = e._next
            }
            return false
        };
        a.getChildren = function (e, t, r, i) {
            i = i || -9999999999;
            var s = [],
                o = this._first,
                u = 0;
            while (o) {
                if (o._startTime < i) {} else if (o instanceof n) {
                    if (t !== false) {
                        s[u++] = o
                    }
                } else {
                    if (r !== false) {
                        s[u++] = o
                    }
                    if (e !== false) {
                        s = s.concat(o.getChildren(true, t, r));
                        u = s.length
                    }
                }
                o = o._next
            }
            return s
        };
        a.getTweensOf = function (e, t) {
            var r = n.getTweensOf(e),
                i = r.length,
                s = [],
                o = 0;
            while (--i > -1) {
                if (r[i].timeline === this || t && this._contains(r[i])) {
                    s[o++] = r[i]
                }
            }
            return s
        };
        a._contains = function (e) {
            var t = e.timeline;
            while (t) {
                if (t === this) {
                    return true
                }
                t = t.timeline
            }
            return false
        };
        a.shiftChildren = function (e, t, n) {
            n = n || 0;
            var r = this._first,
                i = this._labels,
                s;
            while (r) {
                if (r._startTime >= n) {
                    r._startTime += e
                }
                r = r._next
            }
            if (t) {
                for (s in i) {
                    if (i[s] >= n) {
                        i[s] += e
                    }
                }
            }
            return this._uncache(true)
        };
        a._kill = function (e, t) {
            if (!e && !t) {
                return this._enabled(false, false)
            }
            var n = !t ? this.getChildren(true, true, false) : this.getTweensOf(t),
                r = n.length,
                i = false;
            while (--r > -1) {
                if (n[r]._kill(e, t)) {
                    i = true
                }
            }
            return i
        };
        a.clear = function (e) {
            var t = this.getChildren(false, true, true),
                n = t.length;
            this._time = this._totalTime = 0;
            while (--n > -1) {
                t[n]._enabled(false, false)
            }
            if (e !== false) {
                this._labels = {}
            }
            return this._uncache(true)
        };
        a.invalidate = function () {
            var e = this._first;
            while (e) {
                e.invalidate();
                e = e._next
            }
            return this
        };
        a._enabled = function (e, n) {
            if (e === this._gc) {
                var r = this._first;
                while (r) {
                    r._enabled(e, true);
                    r = r._next
                }
            }
            return t.prototype._enabled.call(this, e, n)
        };
        a.progress = function (e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * e, false)
        };
        a.duration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    this.totalDuration()
                }
                return this._duration
            }
            if (this.duration() !== 0 && e !== 0) {
                this.timeScale(this._duration / e)
            }
            return this
        };
        a.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    var t = 0,
                        n = this._last,
                        r = 999999999999,
                        i, s;
                    while (n) {
                        i = n._prev;
                        if (n._dirty) {
                            n.totalDuration()
                        }
                        if (n._startTime > r && this._sortChildren && !n._paused) {
                            this.add(n, n._startTime - n._delay)
                        } else {
                            r = n._startTime
                        }
                        if (n._startTime < 0 && !n._paused) {
                            t -= n._startTime;
                            if (this._timeline.smoothChildTiming) {
                                this._startTime += n._startTime / this._timeScale
                            }
                            this.shiftChildren(-n._startTime, false, -9999999999);
                            r = 0
                        }
                        s = n._startTime + n._totalDuration / n._timeScale;
                        if (s > t) {
                            t = s
                        }
                        n = i
                    }
                    this._duration = this._totalDuration = t;
                    this._dirty = false
                }
                return this._totalDuration
            }
            if (this.totalDuration() !== 0) if (e !== 0) {
                this.timeScale(this._totalDuration / e)
            }
            return this
        };
        a.usesFrames = function () {
            var t = this._timeline;
            while (t._timeline) {
                t = t._timeline
            }
            return t === e._rootFramesTimeline
        };
        a.rawTime = function () {
            return this._paused || this._totalTime !== 0 && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        };
        return r
    }, true);
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, n) {
        var r = function (t) {
                e.call(this, t);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._cycle = 0;
                this._yoyo = this.vars.yoyo === true;
                this._dirty = true
            },
            i = [],
            s = new n(null, null, 1, 0),
            o = function (e) {
                while (e) {
                    if (e._paused) {
                        return true
                    }
                    e = e._timeline
                }
                return false
            },
            u = r.prototype = new e;
        u.constructor = r;
        u.kill()._gc = false;
        r.version = "1.9.7";
        u.invalidate = function () {
            this._yoyo = this.vars.yoyo === true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return e.prototype.invalidate.call(this)
        };
        u.addCallback = function (e, n, r, i) {
            return this.add(t.delayedCall(0, e, r, i), n)
        };
        u.removeCallback = function (e, t) {
            if (t == null) {
                this._kill(null, e)
            } else {
                var n = this.getTweensOf(e, false),
                    r = n.length,
                    i = this._parseTimeOrLabel(t);
                while (--r > -1) {
                    if (n[r]._startTime === i) {
                        n[r]._enabled(false, false)
                    }
                }
            }
            return this
        };
        u.tweenTo = function (e, n) {
            n = n || {};
            var r = {
                ease: s,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: false
            },
                o, u;
            for (o in n) {
                r[o] = n[o]
            }
            r.time = this._parseTimeOrLabel(e);
            u = new t(this, Math.abs(Number(r.time) - this._time) / this._timeScale || .001, r);
            r.onStart = function () {
                u.target.paused(true);
                if (u.vars.time !== u.target.time()) {
                    u.duration(Math.abs(u.vars.time - u.target.time()) / u.target._timeScale)
                }
                if (n.onStart) {
                    n.onStart.apply(n.onStartScope || u, n.onStartParams || i)
                }
            };
            return u
        };
        u.tweenFromTo = function (e, t, n) {
            n = n || {};
            e = this._parseTimeOrLabel(e);
            n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                onCompleteScope: this
            };
            n.immediateRender = n.immediateRender !== false;
            var r = this.tweenTo(t, n);
            return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
        };
        u.render = function (e, t, n) {
            if (this._gc) {
                this._enabled(true, false)
            }
            this._active = !this._paused;
            var r = !this._dirty ? this._totalDuration : this.totalDuration(),
                s = this._duration,
                o = this._time,
                u = this._totalTime,
                a = this._startTime,
                f = this._timeScale,
                l = this._rawPrevTime,
                c = this._paused,
                h = this._cycle,
                p, d, v, m, g, y;
            if (e >= r) {
                if (!this._locked) {
                    this._totalTime = r;
                    this._cycle = this._repeat
                }
                if (!this._reversed) if (!this._hasPausedChild()) {
                    d = true;
                    m = "onComplete";
                    if (s === 0) if (e === 0 || this._rawPrevTime < 0) if (this._rawPrevTime !== e && this._first) {
                        g = true;
                        if (this._rawPrevTime > 0) {
                            m = "onReverseComplete"
                        }
                    }
                }
                this._rawPrevTime = e;
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = e = 0
                } else {
                    this._time = s;
                    e = s + 1e-6
                }
            } else if (e < 1e-7) {
                if (!this._locked) {
                    this._totalTime = this._cycle = 0
                }
                this._time = 0;
                if (o !== 0 || s === 0 && this._rawPrevTime > 0 && !this._locked) {
                    m = "onReverseComplete";
                    d = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (s === 0) if (this._rawPrevTime >= 0 && this._first) {
                        g = true
                    }
                } else if (!this._initted) {
                    g = true
                }
                this._rawPrevTime = e;
                e = 0
            } else {
                this._time = this._rawPrevTime = e;
                if (!this._locked) {
                    this._totalTime = e;
                    if (this._repeat !== 0) {
                        y = s + this._repeatDelay;
                        this._cycle = this._totalTime / y >> 0;
                        if (this._cycle !== 0) if (this._cycle === this._totalTime / y) {
                            this._cycle--
                        }
                        this._time = this._totalTime - this._cycle * y;
                        if (this._yoyo) if ((this._cycle & 1) !== 0) {
                            this._time = s - this._time
                        }
                        if (this._time > s) {
                            this._time = s;
                            e = s + 1e-6
                        } else if (this._time < 0) {
                            this._time = e = 0
                        } else {
                            e = this._time
                        }
                    }
                }
            }
            if (this._cycle !== h) if (!this._locked) {
                var b = this._yoyo && (h & 1) !== 0,
                    w = b === (this._yoyo && (this._cycle & 1) !== 0),
                    E = this._totalTime,
                    S = this._cycle,
                    x = this._rawPrevTime,
                    T = this._time;
                this._totalTime = h * s;
                if (this._cycle < h) {
                    b = !b
                } else {
                    this._totalTime += s
                }
                this._time = o;
                this._rawPrevTime = s === 0 ? l - 1e-5 : l;
                this._cycle = h;
                this._locked = true;
                o = b ? 0 : s;
                this.render(o, t, s === 0);
                if (!t) if (!this._gc) {
                    if (this.vars.onRepeat) {
                        this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || i)
                    }
                }
                if (w) {
                    o = b ? s + 1e-6 : -1e-6;
                    this.render(o, true, false)
                }
                this._time = T;
                this._totalTime = E;
                this._cycle = S;
                this._rawPrevTime = x;
                this._locked = false
            }
            if ((this._time === o || !this._first) && !n && !g) {
                if (u !== this._totalTime) if (this._onUpdate) if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || i)
                }
                return
            } else if (!this._initted) {
                this._initted = true
            }
            if (u === 0) if (this.vars.onStart) if (this._totalTime !== 0) if (!t) {
                this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || i)
            }
            if (this._time >= o) {
                p = this._first;
                while (p) {
                    v = p._next;
                    if (this._paused && !c) {
                        break
                    } else if (p._active || p._startTime <= this._time && !p._paused && !p._gc) {
                        if (!p._reversed) {
                            p.render((e - p._startTime) * p._timeScale, t, n)
                        } else {
                            p.render((!p._dirty ? p._totalDuration : p.totalDuration()) - (e - p._startTime) * p._timeScale, t, n)
                        }
                    }
                    p = v
                }
            } else {
                p = this._last;
                while (p) {
                    v = p._prev;
                    if (this._paused && !c) {
                        break
                    } else if (p._active || p._startTime <= o && !p._paused && !p._gc) {
                        if (!p._reversed) {
                            p.render((e - p._startTime) * p._timeScale, t, n)
                        } else {
                            p.render((!p._dirty ? p._totalDuration : p.totalDuration()) - (e - p._startTime) * p._timeScale, t, n)
                        }
                    }
                    p = v
                }
            }
            if (this._onUpdate) if (!t) {
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || i)
            }
            if (m) if (!this._locked) if (!this._gc) if (a === this._startTime || f !== this._timeScale) if (this._time === 0 || r >= this.totalDuration()) {
                if (d) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false)
                    }
                    this._active = false
                }
                if (!t && this.vars[m]) {
                    this.vars[m].apply(this.vars[m + "Scope"] || this, this.vars[m + "Params"] || i)
                }
            }
        };
        u.getActive = function (e, t, n) {
            if (e == null) {
                e = true
            }
            if (t == null) {
                t = true
            }
            if (n == null) {
                n = false
            }
            var r = [],
                i = this.getChildren(e, t, n),
                s = 0,
                u = i.length,
                a, f;
            for (a = 0; a < u; a++) {
                f = i[a];
                if (!f._paused) if (f._timeline._time >= f._startTime) if (f._timeline._time < f._startTime + f._totalDuration / f._timeScale) if (!o(f._timeline)) {
                    r[s++] = f
                }
            }
            return r
        };
        u.getLabelAfter = function (e) {
            if (!e) if (e !== 0) {
                e = this._time
            }
            var t = this.getLabelsArray(),
                n = t.length,
                r;
            for (r = 0; r < n; r++) {
                if (t[r].time > e) {
                    return t[r].name
                }
            }
            return null
        };
        u.getLabelBefore = function (e) {
            if (e == null) {
                e = this._time
            }
            var t = this.getLabelsArray(),
                n = t.length;
            while (--n > -1) {
                if (t[n].time < e) {
                    return t[n].name
                }
            }
            return null
        };
        u.getLabelsArray = function () {
            var e = [],
                t = 0,
                n;
            for (n in this._labels) {
                e[t++] = {
                    time: this._labels[n],
                    name: n
                }
            }
            e.sort(function (e, t) {
                return e.time - t.time
            });
            return e
        };
        u.progress = function (e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), false)
        };
        u.totalProgress = function (e) {
            return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * e, false)
        };
        u.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    e.prototype.totalDuration.call(this);
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat
                }
                return this._totalDuration
            }
            return this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
        };
        u.time = function (e, t) {
            if (!arguments.length) {
                return this._time
            }
            if (this._dirty) {
                this.totalDuration()
            }
            if (e > this._duration) {
                e = this._duration
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                e = this._duration - e + this._cycle * (this._duration + this._repeatDelay)
            } else if (this._repeat !== 0) {
                e += this._cycle * (this._duration + this._repeatDelay)
            }
            return this.totalTime(e, t)
        };
        u.repeat = function (e) {
            if (!arguments.length) {
                return this._repeat
            }
            this._repeat = e;
            return this._uncache(true)
        };
        u.repeatDelay = function (e) {
            if (!arguments.length) {
                return this._repeatDelay
            }
            this._repeatDelay = e;
            return this._uncache(true)
        };
        u.yoyo = function (e) {
            if (!arguments.length) {
                return this._yoyo
            }
            this._yoyo = e;
            return this
        };
        u.currentLabel = function (e) {
            if (!arguments.length) {
                return this.getLabelBefore(this._time + 1e-8)
            }
            return this.seek(e, true)
        };
        return r
    }, true);
    (function () {
        var e = 180 / Math.PI,
            t = Math.PI / 180,
            n = [],
            r = [],
            i = [],
            s = {},
            o = function (e, t, n, r) {
                this.a = e;
                this.b = t;
                this.c = n;
                this.d = r;
                this.da = r - e;
                this.ca = n - e;
                this.ba = t - e
            },
            u = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            a = function (e, t, n, r) {
                var i = {
                    a: e
                },
                    s = {},
                    o = {},
                    u = {
                        c: r
                    },
                    a = (e + t) / 2,
                    f = (t + n) / 2,
                    l = (n + r) / 2,
                    c = (a + f) / 2,
                    h = (f + l) / 2,
                    p = (h - c) / 8;
                i.b = a + (e - a) / 4;
                s.b = c + p;
                i.c = s.a = (i.b + s.b) / 2;
                s.c = o.a = (c + h) / 2;
                o.b = h - p;
                u.b = l + (r - l) / 4;
                o.c = u.a = (o.b + u.b) / 2;
                return [i, s, o, u]
            },
            f = function (e, t, s, o, u) {
                var f = e.length - 1,
                    l = 0,
                    c = e[0].a,
                    h, p, d, v, m, g, y, b, w, E, S, x, T;
                for (h = 0; h < f; h++) {
                    m = e[l];
                    p = m.a;
                    d = m.d;
                    v = e[l + 1].d;
                    if (u) {
                        S = n[h];
                        x = r[h];
                        T = (x + S) * t * .25 / (o ? .5 : i[h] || .5);
                        g = d - (d - p) * (o ? t * .5 : S !== 0 ? T / S : 0);
                        y = d + (v - d) * (o ? t * .5 : x !== 0 ? T / x : 0);
                        b = d - (g + ((y - g) * (S * 3 / (S + x) + .5) / 4 || 0))
                    } else {
                        g = d - (d - p) * t * .5;
                        y = d + (v - d) * t * .5;
                        b = d - (g + y) / 2
                    }
                    g += b;
                    y += b;
                    m.c = w = g;
                    if (h !== 0) {
                        m.b = c
                    } else {
                        m.b = c = m.a + (m.c - m.a) * .6
                    }
                    m.da = d - p;
                    m.ca = w - p;
                    m.ba = c - p;
                    if (s) {
                        E = a(p, c, w, d);
                        e.splice(l, 1, E[0], E[1], E[2], E[3]);
                        l += 4
                    } else {
                        l++
                    }
                    c = y
                }
                m = e[l];
                m.b = c;
                m.c = c + (m.d - c) * .4;
                m.da = m.d - m.a;
                m.ca = m.c - m.a;
                m.ba = c - m.a;
                if (s) {
                    E = a(m.a, c, m.c, m.d);
                    e.splice(l, 1, E[0], E[1], E[2], E[3])
                }
            },
            l = function (e, t, i, s) {
                var u = [],
                    a, f, l, c, h, p;
                if (s) {
                    e = [s].concat(e);
                    f = e.length;
                    while (--f > -1) {
                        if (typeof (p = e[f][t]) === "string") if (p.charAt(1) === "=") {
                            e[f][t] = s[t] + Number(p.charAt(0) + p.substr(2))
                        }
                    }
                }
                a = e.length - 2;
                if (a < 0) {
                    u[0] = new o(e[0][t], 0, 0, e[a < -1 ? 0 : 1][t]);
                    return u
                }
                for (f = 0; f < a; f++) {
                    l = e[f][t];
                    c = e[f + 1][t];
                    u[f] = new o(l, 0, 0, c);
                    if (i) {
                        h = e[f + 2][t];
                        n[f] = (n[f] || 0) + (c - l) * (c - l);
                        r[f] = (r[f] || 0) + (h - c) * (h - c)
                    }
                }
                u[f] = new o(e[f][t], 0, 0, e[f + 1][t]);
                return u
            },
            c = function (e, t, o, a, c, h) {
                var p = {},
                    d = [],
                    v = h || e[0],
                    m, g, y, b, w, E, S, x;
                c = typeof c === "string" ? "," + c + "," : u;
                if (t == null) {
                    t = 1
                }
                for (g in e[0]) {
                    d.push(g)
                }
                if (e.length > 1) {
                    x = e[e.length - 1];
                    S = true;
                    m = d.length;
                    while (--m > -1) {
                        g = d[m];
                        if (Math.abs(v[g] - x[g]) > .05) {
                            S = false;
                            break
                        }
                    }
                    if (S) {
                        e = e.concat();
                        if (h) {
                            e.unshift(h)
                        }
                        e.push(e[1]);
                        h = e[e.length - 3]
                    }
                }
                n.length = r.length = i.length = 0;
                m = d.length;
                while (--m > -1) {
                    g = d[m];
                    s[g] = c.indexOf("," + g + ",") !== -1;
                    p[g] = l(e, g, s[g], h)
                }
                m = n.length;
                while (--m > -1) {
                    n[m] = Math.sqrt(n[m]);
                    r[m] = Math.sqrt(r[m])
                }
                if (!a) {
                    m = d.length;
                    while (--m > -1) {
                        if (s[g]) {
                            y = p[d[m]];
                            E = y.length - 1;
                            for (b = 0; b < E; b++) {
                                w = y[b + 1].da / r[b] + y[b].da / n[b];
                                i[b] = (i[b] || 0) + w * w
                            }
                        }
                    }
                    m = i.length;
                    while (--m > -1) {
                        i[m] = Math.sqrt(i[m])
                    }
                }
                m = d.length;
                b = o ? 4 : 1;
                while (--m > -1) {
                    g = d[m];
                    y = p[g];
                    f(y, t, o, a, s[g]);
                    if (S) {
                        y.splice(0, b);
                        y.splice(y.length - b, b)
                    }
                }
                return p
            },
            h = function (e, t, n) {
                t = t || "soft";
                var r = {},
                    i = t === "cubic" ? 3 : 2,
                    s = t === "soft",
                    u = [],
                    a, f, l, c, h, p, d, v, m, g, y;
                if (s && n) {
                    e = [n].concat(e)
                }
                if (e == null || e.length < i + 1) {
                    throw "invalid Bezier data"
                }
                for (m in e[0]) {
                    u.push(m)
                }
                p = u.length;
                while (--p > -1) {
                    m = u[p];
                    r[m] = h = [];
                    g = 0;
                    v = e.length;
                    for (d = 0; d < v; d++) {
                        a = n == null ? e[d][m] : typeof (y = e[d][m]) === "string" && y.charAt(1) === "=" ? n[m] + Number(y.charAt(0) + y.substr(2)) : Number(y);
                        if (s) if (d > 1) if (d < v - 1) {
                            h[g++] = (a + h[g - 2]) / 2
                        }
                        h[g++] = a
                    }
                    v = g - i + 1;
                    g = 0;
                    for (d = 0; d < v; d += i) {
                        a = h[d];
                        f = h[d + 1];
                        l = h[d + 2];
                        c = i === 2 ? 0 : h[d + 3];
                        h[g++] = y = i === 3 ? new o(a, f, l, c) : new o(a, (2 * f + a) / 3, (2 * f + l) / 3, l)
                    }
                    h.length = g
                }
                return r
            },
            p = function (e, t, n) {
                var r = 1 / n,
                    i = e.length,
                    s, o, u, a, f, l, c, h, p, d, v;
                while (--i > -1) {
                    d = e[i];
                    u = d.a;
                    a = d.d - u;
                    f = d.c - u;
                    l = d.b - u;
                    s = o = 0;
                    for (h = 1; h <= n; h++) {
                        c = r * h;
                        p = 1 - c;
                        s = o - (o = (c * c * a + 3 * p * (c * f + p * l)) * c);
                        v = i * n + h - 1;
                        t[v] = (t[v] || 0) + s * s
                    }
                }
            },
            d = function (e, t) {
                t = t >> 0 || 6;
                var n = [],
                    r = [],
                    i = 0,
                    s = 0,
                    o = t - 1,
                    u = [],
                    a = [],
                    f, l, c, h;
                for (f in e) {
                    p(e[f], n, t)
                }
                c = n.length;
                for (l = 0; l < c; l++) {
                    i += Math.sqrt(n[l]);
                    h = l % t;
                    a[h] = i;
                    if (h === o) {
                        s += i;
                        h = l / t >> 0;
                        u[h] = a;
                        r[h] = s;
                        i = 0;
                        a = []
                    }
                }
                return {
                    length: s,
                    lengths: r,
                    segments: u
                }
            },
            v = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                global: true,
                init: function (e, t, n) {
                    this._target = e;
                    if (t instanceof Array) {
                        t = {
                            values: t
                        }
                    }
                    this._func = {};
                    this._round = {};
                    this._props = [];
                    this._timeRes = t.timeResolution == null ? 6 : parseInt(t.timeResolution, 10);
                    var r = t.values || [],
                        i = {},
                        s = r[0],
                        o = t.autoRotate || n.vars.orientToBezier,
                        u, a, f, l, p;
                    this._autoRotate = o ? o instanceof Array ? o : [
                        ["x", "y", "rotation", o === true ? 0 : Number(o) || 0]
                    ] : null;
                    for (u in s) {
                        this._props.push(u)
                    }
                    f = this._props.length;
                    while (--f > -1) {
                        u = this._props[f];
                        this._overwriteProps.push(u);
                        a = this._func[u] = typeof e[u] === "function";
                        i[u] = !a ? parseFloat(e[u]) : e[u.indexOf("set") || typeof e["get" + u.substr(3)] !== "function" ? u : "get" + u.substr(3)]();
                        if (!p) if (i[u] !== r[0][u]) {
                            p = i
                        }
                    }
                    this._beziers = t.type !== "cubic" && t.type !== "quadratic" && t.type !== "soft" ? c(r, isNaN(t.curviness) ? 1 : t.curviness, false, t.type === "thruBasic", t.correlate, p) : h(r, t.type, i);
                    this._segCount = this._beziers[u].length;
                    if (this._timeRes) {
                        var v = d(this._beziers, this._timeRes);
                        this._length = v.length;
                        this._lengths = v.lengths;
                        this._segments = v.segments;
                        this._l1 = this._li = this._s1 = this._si = 0;
                        this._l2 = this._lengths[0];
                        this._curSeg = this._segments[0];
                        this._s2 = this._curSeg[0];
                        this._prec = 1 / this._curSeg.length
                    }
                    if (o = this._autoRotate) {
                        if (!(o[0] instanceof Array)) {
                            this._autoRotate = o = [o]
                        }
                        f = o.length;
                        while (--f > -1) {
                            for (l = 0; l < 3; l++) {
                                u = o[f][l];
                                this._func[u] = typeof e[u] === "function" ? e[u.indexOf("set") || typeof e["get" + u.substr(3)] !== "function" ? u : "get" + u.substr(3)] : false
                            }
                        }
                    }
                    return true
                },
                set: function (t) {
                    var n = this._segCount,
                        r = this._func,
                        i = this._target,
                        s, o, u, a, f, l, c, h, p, d;
                    if (!this._timeRes) {
                        s = t < 0 ? 0 : t >= 1 ? n - 1 : n * t >> 0;
                        l = (t - s * (1 / n)) * n
                    } else {
                        p = this._lengths;
                        d = this._curSeg;
                        t *= this._length;
                        u = this._li;
                        if (t > this._l2 && u < n - 1) {
                            h = n - 1;
                            while (u < h && (this._l2 = p[++u]) <= t) {}
                            this._l1 = p[u - 1];
                            this._li = u;
                            this._curSeg = d = this._segments[u];
                            this._s2 = d[this._s1 = this._si = 0]
                        } else if (t < this._l1 && u > 0) {
                            while (u > 0 && (this._l1 = p[--u]) >= t) {}
                            if (u === 0 && t < this._l1) {
                                this._l1 = 0
                            } else {
                                u++
                            }
                            this._l2 = p[u];
                            this._li = u;
                            this._curSeg = d = this._segments[u];
                            this._s1 = d[(this._si = d.length - 1) - 1] || 0;
                            this._s2 = d[this._si]
                        }
                        s = u;
                        t -= this._l1;
                        u = this._si;
                        if (t > this._s2 && u < d.length - 1) {
                            h = d.length - 1;
                            while (u < h && (this._s2 = d[++u]) <= t) {}
                            this._s1 = d[u - 1];
                            this._si = u
                        } else if (t < this._s1 && u > 0) {
                            while (u > 0 && (this._s1 = d[--u]) >= t) {}
                            if (u === 0 && t < this._s1) {
                                this._s1 = 0
                            } else {
                                u++
                            }
                            this._s2 = d[u];
                            this._si = u
                        }
                        l = (u + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                    }
                    o = 1 - l;
                    u = this._props.length;
                    while (--u > -1) {
                        a = this._props[u];
                        f = this._beziers[a][s];
                        c = (l * l * f.da + 3 * o * (l * f.ca + o * f.ba)) * l + f.a;
                        if (this._round[a]) {
                            c = c + (c > 0 ? .5 : -.5) >> 0
                        }
                        if (r[a]) {
                            i[a](c)
                        } else {
                            if (a == "x") {
                                i.setX(c)
                            } else if (a == "y") {
                                i.setY(c)
                            } else if (a == "z") {
                                i.setZ(c)
                            } else if (a == "angleX") {
                                i.setAngleX(c)
                            } else if (a == "angleY") {
                                i.setAngleY(c)
                            } else if (a == "angleZ") {
                                i.setAngleZ(c)
                            } else if (a == "w") {
                                i.setWidth(c)
                            } else if (a == "h") {
                                i.setHeight(c)
                            } else if (a == "alpha") {
                                i.setAlpha(c)
                            } else if (a == "scale") {
                                i.setScale2(c)
                            } else {
                                i[a] = c
                            }
                        }
                    }
                    if (this._autoRotate) {
                        var v = this._autoRotate,
                            m, g, y, b, w, E, S;
                        u = v.length;
                        while (--u > -1) {
                            a = v[u][2];
                            E = v[u][3] || 0;
                            S = v[u][4] === true ? 1 : e;
                            f = this._beziers[v[u][0]];
                            m = this._beziers[v[u][1]];
                            if (f && m) {
                                f = f[s];
                                m = m[s];
                                g = f.a + (f.b - f.a) * l;
                                b = f.b + (f.c - f.b) * l;
                                g += (b - g) * l;
                                b += (f.c + (f.d - f.c) * l - b) * l;
                                y = m.a + (m.b - m.a) * l;
                                w = m.b + (m.c - m.b) * l;
                                y += (w - y) * l;
                                w += (m.c + (m.d - m.c) * l - w) * l;
                                c = Math.atan2(w - y, b - g) * S + E;
                                if (r[a]) {
                                    i[a](c)
                                } else {
                                    i[a] = c
                                }
                            }
                        }
                    }
                }
            }),
            m = v.prototype;
        v.bezierThrough = c;
        v.cubicToQuadratic = a;
        v._autoCSS = true;
        v.quadraticToCubic = function (e, t, n) {
            return new o(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
        };
        v._cssRegister = function () {
            var e = window._gsDefine.globals.CSSPlugin;
            if (!e) {
                return
            }
            var n = e._internals,
                r = n._parseToProxy,
                i = n._setPluginRatio,
                s = n.CSSPropTween;
            n._registerComplexSpecialProp("bezier", {
                parser: function (e, n, o, u, a, f) {
                    if (n instanceof Array) {
                        n = {
                            values: n
                        }
                    }
                    f = new v;
                    var l = n.values,
                        c = l.length - 1,
                        h = [],
                        p = {},
                        d, m, g;
                    if (c < 0) {
                        return a
                    }
                    for (d = 0; d <= c; d++) {
                        g = r(e, l[d], u, a, f, c !== d);
                        h[d] = g.end
                    }
                    for (m in n) {
                        p[m] = n[m]
                    }
                    p.values = h;
                    a = new s(e, "bezier", 0, 0, g.pt, 2);
                    a.data = g;
                    a.plugin = f;
                    a.setRatio = i;
                    if (p.autoRotate === 0) {
                        p.autoRotate = true
                    }
                    if (p.autoRotate && !(p.autoRotate instanceof Array)) {
                        d = p.autoRotate === true ? 0 : Number(p.autoRotate) * t;
                        p.autoRotate = g.end.left != null ? [
                            ["left", "top", "rotation", d, true]
                        ] : g.end.x != null ? [
                            ["x", "y", "rotation", d, true]
                        ] : false
                    }
                    if (p.autoRotate) {
                        if (!u._transform) {
                            u._enableTransforms(false)
                        }
                        g.autoRotate = u._target._gsTransform
                    }
                    f._onInitTween(g.proxy, p, u._tween);
                    return a
                }
            })
        };
        m._roundProps = function (e, t) {
            var n = this._overwriteProps,
                r = n.length;
            while (--r > -1) {
                if (e[n[r]] || e.bezier || e.bezierThrough) {
                    this._round[n[r]] = t
                }
            }
        };
        m._kill = function (e) {
            var t = this._props,
                n, r;
            for (n in this._beziers) {
                if (n in e) {
                    delete this._beziers[n];
                    delete this._func[n];
                    r = t.length;
                    while (--r > -1) {
                        if (t[r] === n) {
                            t.splice(r, 1)
                        }
                    }
                }
            }
            return this._super._kill.call(this, e)
        }
    })();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
        var n = function () {
                e.call(this, "css");
                this._overwriteProps.length = 0
            },
            r, i, s, o, u = {},
            a = n.prototype = new e("css");
        a.constructor = n;
        n.version = "1.9.7";
        n.API = 2;
        n.defaultTransformPerspective = 0;
        a = "px";
        n.suffixMap = {
            top: a,
            right: a,
            bottom: a,
            left: a,
            width: a,
            height: a,
            fontSize: a,
            padding: a,
            margin: a,
            perspective: a
        };
        var f = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            l = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            c = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            h = /[^\d\-\.]/g,
            p = /(?:\d|\-|\+|=|#|\.)*/g,
            d = /opacity *= *([^)]*)/,
            v = /opacity:([^;]*)/,
            m = /alpha\(opacity *=.+?\)/i,
            g = /^(rgb|hsl)/,
            y = /([A-Z])/g,
            b = /-([a-z])/gi,
            w = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            E = function (e, t) {
                return t.toUpperCase()
            },
            S = /(?:Left|Right|Width)/i,
            x = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            T = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            N = /,(?=[^\)]*(?:\(|$))/gi,
            C = Math.PI / 180,
            k = 180 / Math.PI,
            L = {},
            A = document,
            O = A.createElement("div"),
            M = A.createElement("img"),
            _ = n._internals = {
                _specialProps: u
            },
            D = navigator.userAgent,
            P, H, B, j, F, I, q = function () {
                var e = D.indexOf("Android"),
                    t = A.createElement("div"),
                    n;
                B = D.indexOf("Safari") !== -1 && D.indexOf("Chrome") === -1 && (e === -1 || Number(D.substr(e + 8, 1)) > 3);
                F = B && Number(D.substr(D.indexOf("Version/") + 8, 1)) < 6;
                j = D.indexOf("Firefox") !== -1;
                /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(D);
                I = parseFloat(RegExp.$1);
                t.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
                n = t.getElementsByTagName("a")[0];
                return n ? /^0.55/.test(n.style.opacity) : false
            }(),
            R = function (e) {
                return d.test(typeof e === "string" ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            U = function (e) {
                if (window.console) {
                    console.log(e)
                }
            },
            z = "",
            W = "",
            X = function (e, t) {
                t = t || O;
                var n = t.style,
                    r, i;
                if (n[e] !== undefined) {
                    return e
                }
                e = e.charAt(0).toUpperCase() + e.substr(1);
                r = ["O", "Moz", "ms", "Ms", "Webkit"];
                i = 5;
                while (--i > -1 && n[r[i] + e] === undefined) {}
                if (i >= 0) {
                    W = i === 3 ? "ms" : r[i];
                    z = "-" + W.toLowerCase() + "-";
                    return W + e
                }
                return null
            },
            V = A.defaultView ? A.defaultView.getComputedStyle : function () {},
            $ = n.getStyle = function (e, t, n, r, i) {
                var s;
                if (!q) if (t === "opacity") {
                    return R(e)
                }
                if (!r && e.style[t]) {
                    s = e.style[t]
                } else if (n = n || V(e, null)) {
                    e = n.getPropertyValue(t.replace(y, "-$1").toLowerCase());
                    s = e || n.length ? e : n[t]
                } else if (e.currentStyle) {
                    n = e.currentStyle;
                    s = n[t]
                }
                return i != null && (!s || s === "none" || s === "auto" || s === "auto auto") ? i : s
            },
            J = function (e, t, n, r, i) {
                if (r === "px" || !r) {
                    return n
                }
                if (r === "auto" || !n) {
                    return 0
                }
                var s = S.test(t),
                    o = e,
                    u = O.style,
                    a = n < 0,
                    f;
                if (a) {
                    n = -n
                }
                if (r === "%" && t.indexOf("border") !== -1) {
                    f = n / 100 * (s ? e.clientWidth : e.clientHeight)
                } else {
                    u.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;";
                    if (r === "%" || !o.appendChild) {
                        o = e.parentNode || A.body;
                        u[s ? "width" : "height"] = n + r
                    } else {
                        u[s ? "borderLeftWidth" : "borderTopWidth"] = n + r
                    }
                    o.appendChild(O);
                    f = parseFloat(O[s ? "offsetWidth" : "offsetHeight"]);
                    o.removeChild(O);
                    if (f === 0 && !i) {
                        f = J(e, t, n, r, true)
                    }
                }
                return a ? -f : f
            },
            K = function (e, t, n) {
                if ($(e, "position", n) !== "absolute") {
                    return 0
                }
                var r = t === "left" ? "Left" : "Top",
                    i = $(e, "margin" + r, n);
                return e["offset" + r] - (J(e, t, parseFloat(i), i.replace(p, "")) || 0)
            },
            Q = function (e, t) {
                var n = {},
                    r, i;
                if (t = t || V(e, null)) {
                    if (r = t.length) {
                        while (--r > -1) {
                            n[t[r].replace(b, E)] = t.getPropertyValue(t[r])
                        }
                    } else {
                        for (r in t) {
                            n[r] = t[r]
                        }
                    }
                } else if (t = e.currentStyle || e.style) {
                    for (r in t) {
                        n[r.replace(b, E)] = t[r]
                    }
                }
                if (!q) {
                    n.opacity = R(e)
                }
                i = Nt(e, t, false);
                n.rotation = i.rotation * k;
                n.skewX = i.skewX * k;
                n.scaleX = i.scaleX;
                n.scaleY = i.scaleY;
                n.x = i.x;
                n.y = i.y;
                if (Tt) {
                    n.z = i.z;
                    n.rotationX = i.rotationX * k;
                    n.rotationY = i.rotationY * k;
                    n.scaleZ = i.scaleZ
                }
                if (n.filters) {
                    delete n.filters
                }
                return n
            },
            G = function (e, t, n, r, i) {
                var s = {},
                    o = e.style,
                    u, a, f;
                for (a in n) {
                    if (a !== "cssText") if (a !== "length") if (isNaN(a)) if (t[a] !== (u = n[a]) || i && i[a]) if (a.indexOf("Origin") === -1) if (typeof u === "number" || typeof u === "string") {
                        s[a] = u === "auto" && (a === "left" || a === "top") ? K(e, a) : (u === "" || u === "auto" || u === "none") && typeof t[a] === "string" && t[a].replace(h, "") !== "" ? 0 : u;
                        if (o[a] !== undefined) {
                            f = new ht(o, a, o[a], f)
                        }
                    }
                }
                if (r) {
                    for (a in r) {
                        if (a !== "className") {
                            s[a] = r[a]
                        }
                    }
                }
                return {
                    difs: s,
                    firstMPT: f
                }
            },
            Y = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            Z = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            et = function (e, t, n) {
                var r = parseFloat(t === "width" ? e.offsetWidth : e.offsetHeight),
                    i = Y[t],
                    s = i.length;
                n = n || V(e, null);
                while (--s > -1) {
                    r -= parseFloat($(e, "padding" + i[s], n, true)) || 0;
                    r -= parseFloat($(e, "border" + i[s] + "Width", n, true)) || 0
                }
                return r
            },
            tt = function (e, t) {
                if (e == null || e === "" || e === "auto" || e === "auto auto") {
                    e = "0 0"
                }
                var n = e.split(" "),
                    r = e.indexOf("left") !== -1 ? "0%" : e.indexOf("right") !== -1 ? "100%" : n[0],
                    i = e.indexOf("top") !== -1 ? "0%" : e.indexOf("bottom") !== -1 ? "100%" : n[1];
                if (i == null) {
                    i = "0"
                } else if (i === "center") {
                    i = "50%"
                }
                if (r === "center" || isNaN(parseFloat(r))) {
                    r = "50%"
                }
                if (t) {
                    t.oxp = r.indexOf("%") !== -1;
                    t.oyp = i.indexOf("%") !== -1;
                    t.oxr = r.charAt(1) === "=";
                    t.oyr = i.charAt(1) === "=";
                    t.ox = parseFloat(r.replace(h, ""));
                    t.oy = parseFloat(i.replace(h, ""))
                }
                return r + " " + i + (n.length > 2 ? " " + n[2] : "")
            },
            nt = function (e, t) {
                return typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
            },
            rt = function (e, t) {
                return e == null ? t : typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
            },
            it = function (e, t, n, r) {
                var i = 1e-6,
                    s, o, u, a;
                if (e == null) {
                    a = t
                } else if (typeof e === "number") {
                    a = e * C
                } else {
                    s = Math.PI * 2;
                    o = e.split("_");
                    u = Number(o[0].replace(h, "")) * (e.indexOf("rad") === -1 ? C : 1) - (e.charAt(1) === "=" ? 0 : t);
                    if (o.length) {
                        if (r) {
                            r[n] = t + u
                        }
                        if (e.indexOf("short") !== -1) {
                            u = u % s;
                            if (u !== u % (s / 2)) {
                                u = u < 0 ? u + s : u - s
                            }
                        }
                        if (e.indexOf("_cw") !== -1 && u < 0) {
                            u = (u + s * 9999999999) % s - (u / s | 0) * s
                        } else if (e.indexOf("ccw") !== -1 && u > 0) {
                            u = (u - s * 9999999999) % s - (u / s | 0) * s
                        }
                    }
                    a = t + u
                }
                if (a < i && a > -i) {
                    a = 0
                }
                return a
            },
            st = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ot = function (e, t, n) {
                e = e < 0 ? e + 1 : e > 1 ? e - 1 : e;
                return (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * 255 + .5 | 0
            },
            ut = function (e) {
                var t, n, r, i, s, o;
                if (!e || e === "") {
                    return st.black
                }
                if (typeof e === "number") {
                    return [e >> 16, e >> 8 & 255, e & 255]
                }
                if (e.charAt(e.length - 1) === ",") {
                    e = e.substr(0, e.length - 1)
                }
                if (st[e]) {
                    return st[e]
                }
                if (e.charAt(0) === "#") {
                    if (e.length === 4) {
                        t = e.charAt(1), n = e.charAt(2), r = e.charAt(3);
                        e = "#" + t + t + n + n + r + r
                    }
                    e = parseInt(e.substr(1), 16);
                    return [e >> 16, e >> 8 & 255, e & 255]
                }
                if (e.substr(0, 3) === "hsl") {
                    e = e.match(f);
                    i = Number(e[0]) % 360 / 360;
                    s = Number(e[1]) / 100;
                    o = Number(e[2]) / 100;
                    n = o <= .5 ? o * (s + 1) : o + s - o * s;
                    t = o * 2 - n;
                    if (e.length > 3) {
                        e[3] = Number(e[3])
                    }
                    e[0] = ot(i + 1 / 3, t, n);
                    e[1] = ot(i, t, n);
                    e[2] = ot(i - 1 / 3, t, n);
                    return e
                }
                e = e.match(f) || st.transparent;
                e[0] = Number(e[0]);
                e[1] = Number(e[1]);
                e[2] = Number(e[2]);
                if (e.length > 3) {
                    e[3] = Number(e[3])
                }
                return e
            },
            at = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (a in st) {
            at += "|" + a + "\\b"
        }
        at = new RegExp(at + ")", "gi");
        var ft = function (e, t, n, r) {
                if (e == null) {
                    return function (e) {
                        return e
                    }
                }
                var i = t ? (e.match(at) || [""])[0] : "",
                    s = e.split(i).join("").match(c) || [],
                    o = e.substr(0, e.indexOf(s[0])),
                    u = e.charAt(e.length - 1) === ")" ? ")" : "",
                    a = e.indexOf(" ") !== -1 ? " " : ",",
                    l = s.length,
                    h = l > 0 ? s[0].replace(f, "") : "",
                    p;
                if (!l) {
                    return function (e) {
                        return e
                    }
                }
                if (t) {
                    p = function (e) {
                        var t, f, d, v;
                        if (typeof e === "number") {
                            e += h
                        } else if (r && N.test(e)) {
                            v = e.replace(N, "|").split("|");
                            for (d = 0; d < v.length; d++) {
                                v[d] = p(v[d])
                            }
                            return v.join(",")
                        }
                        t = (e.match(at) || [i])[0];
                        f = e.split(t).join("").match(c) || [];
                        d = f.length;
                        if (l > d--) {
                            while (++d < l) {
                                f[d] = n ? f[(d - 1) / 2 | 0] : s[d]
                            }
                        }
                        return o + f.join(a) + a + t + u + (e.indexOf("inset") !== -1 ? " inset" : "")
                    };
                    return p
                }
                p = function (e) {
                    var t, i, f;
                    if (typeof e === "number") {
                        e += h
                    } else if (r && N.test(e)) {
                        i = e.replace(N, "|").split("|");
                        for (f = 0; f < i.length; f++) {
                            i[f] = p(i[f])
                        }
                        return i.join(",")
                    }
                    t = e.match(c) || [];
                    f = t.length;
                    if (l > f--) {
                        while (++f < l) {
                            t[f] = n ? t[(f - 1) / 2 | 0] : s[f]
                        }
                    }
                    return o + t.join(a) + u
                };
                return p
            },
            lt = function (e) {
                e = e.split(",");
                return function (t, n, r, i, s, o, u) {
                    var a = (n + "").split(" "),
                        f;
                    u = {};
                    for (f = 0; f < 4; f++) {
                        u[e[f]] = a[f] = a[f] || a[(f - 1) / 2 >> 0]
                    }
                    return i.parse(t, u, s, o)
                }
            },
            ct = _._setPluginRatio = function (e) {
                this.plugin.setRatio(e);
                var t = this.data,
                    n = t.proxy,
                    r = t.firstMPT,
                    i = 1e-6,
                    s, o, u, a;
                while (r) {
                    s = n[r.v];
                    if (r.r) {
                        s = s > 0 ? s + .5 | 0 : s - .5 | 0
                    } else if (s < i && s > -i) {
                        s = 0
                    }
                    r.t[r.p] = s;
                    r = r._next
                }
                if (t.autoRotate) {
                    t.autoRotate.rotation = n.rotation
                }
                if (e === 1) {
                    r = t.firstMPT;
                    while (r) {
                        o = r.t;
                        if (!o.type) {
                            o.e = o.s + o.xs0
                        } else if (o.type === 1) {
                            a = o.xs0 + o.s + o.xs1;
                            for (u = 1; u < o.l; u++) {
                                a += o["xn" + u] + o["xs" + (u + 1)]
                            }
                            o.e = a
                        }
                        r = r._next
                    }
                }
            },
            ht = function (e, t, n, r, i) {
                this.t = e;
                this.p = t;
                this.v = n;
                this.r = i;
                if (r) {
                    r._prev = this;
                    this._next = r
                }
            },
            pt = _._parseToProxy = function (e, t, n, r, i, s) {
                var o = r,
                    u = {},
                    a = {},
                    f = n._transform,
                    l = L,
                    c, h, p, d, v;
                n._transform = null;
                L = t;
                r = v = n.parse(e, t, r, i);
                L = l;
                if (s) {
                    n._transform = f;
                    if (o) {
                        o._prev = null;
                        if (o._prev) {
                            o._prev._next = null
                        }
                    }
                }
                while (r && r !== o) {
                    if (r.type <= 1) {
                        h = r.p;
                        a[h] = r.s + r.c;
                        u[h] = r.s;
                        if (!s) {
                            d = new ht(r, "s", h, d, r.r);
                            r.c = 0
                        }
                        if (r.type === 1) {
                            c = r.l;
                            while (--c > 0) {
                                p = "xn" + c;
                                h = r.p + "_" + p;
                                a[h] = r.data[p];
                                u[h] = r[p];
                                if (!s) {
                                    d = new ht(r, p, h, d, r.rxp[p])
                                }
                            }
                        }
                    }
                    r = r._next
                }
                return {
                    proxy: u,
                    end: a,
                    firstMPT: d,
                    pt: v
                }
            },
            dt = _.CSSPropTween = function (e, t, n, i, s, u, a, f, l, c, h) {
                this.t = e;
                this.p = t;
                this.s = n;
                this.c = i;
                this.n = a || "css_" + t;
                if (!(e instanceof dt)) {
                    o.push(this.n)
                }
                this.r = f;
                this.type = u || 0;
                if (l) {
                    this.pr = l;
                    r = true
                }
                this.b = c === undefined ? n : c;
                this.e = h === undefined ? n + i : h;
                if (s) {
                    this._next = s;
                    s._prev = this
                }
            },
            vt = n.parseComplex = function (e, t, n, r, i, s, o, u, a, c) {
                n = n || s || "";
                o = new dt(e, t, 0, 0, o, c ? 2 : 1, null, false, u, n, r);
                r += "";
                var h = n.split(", ").join(",").split(" "),
                    p = r.split(", ").join(",").split(" "),
                    d = h.length,
                    v = P !== false,
                    m, y, b, w, E, S, x, T, C, k, L, A;
                if (r.indexOf(",") !== -1 || n.indexOf(",") !== -1) {
                    h = h.join(" ").replace(N, ", ").split(" ");
                    p = p.join(" ").replace(N, ", ").split(" ");
                    d = h.length
                }
                if (d !== p.length) {
                    h = (s || "").split(" ");
                    d = h.length
                }
                o.plugin = a;
                o.setRatio = c;
                for (m = 0; m < d; m++) {
                    w = h[m];
                    E = p[m];
                    T = parseFloat(w);
                    if (T || T === 0) {
                        o.appendXtra("", T, nt(E, T), E.replace(l, ""), v && E.indexOf("px") !== -1, true)
                    } else if (i && (w.charAt(0) === "#" || st[w] || g.test(w))) {
                        A = E.charAt(E.length - 1) === "," ? ")," : ")";
                        w = ut(w);
                        E = ut(E);
                        C = w.length + E.length > 6;
                        if (C && !q && E[3] === 0) {
                            o["xs" + o.l] += o.l ? " transparent" : "transparent";
                            o.e = o.e.split(p[m]).join("transparent")
                        } else {
                            if (!q) {
                                C = false
                            }
                            o.appendXtra(C ? "rgba(" : "rgb(", w[0], E[0] - w[0], ",", true, true).appendXtra("", w[1], E[1] - w[1], ",", true).appendXtra("", w[2], E[2] - w[2], C ? "," : A, true);
                            if (C) {
                                w = w.length < 4 ? 1 : w[3];
                                o.appendXtra("", w, (E.length < 4 ? 1 : E[3]) - w, A, false)
                            }
                        }
                    } else {
                        S = w.match(f);
                        if (!S) {
                            o["xs" + o.l] += o.l ? " " + w : w
                        } else {
                            x = E.match(l);
                            if (!x || x.length !== S.length) {
                                return o
                            }
                            b = 0;
                            for (y = 0; y < S.length; y++) {
                                L = S[y];
                                k = w.indexOf(L, b);
                                o.appendXtra(w.substr(b, k - b), Number(L), nt(x[y], L), "", v && w.substr(k + L.length, 2) === "px", y === 0);
                                b = k + L.length
                            }
                            o["xs" + o.l] += w.substr(b)
                        }
                    }
                }
                if (r.indexOf("=") !== -1) if (o.data) {
                    A = o.xs0 + o.data.s;
                    for (m = 1; m < o.l; m++) {
                        A += o["xs" + m] + o.data["xn" + m]
                    }
                    o.e = A + o["xs" + m]
                }
                if (!o.l) {
                    o.type = -1;
                    o.xs0 = o.e
                }
                return o.xfirst || o
            },
            mt = 9;
        a = dt.prototype;
        a.l = a.pr = 0;
        while (--mt > 0) {
            a["xn" + mt] = 0;
            a["xs" + mt] = ""
        }
        a.xs0 = "";
        a._next = a._prev = a.xfirst = a.data = a.plugin = a.setRatio = a.rxp = null;
        a.appendXtra = function (e, t, n, r, i, s) {
            var o = this,
                u = o.l;
            o["xs" + u] += s && u ? " " + e : e || "";
            if (!n) if (u !== 0 && !o.plugin) {
                o["xs" + u] += t + (r || "");
                return o
            }
            o.l++;
            o.type = o.setRatio ? 2 : 1;
            o["xs" + o.l] = r || "";
            if (u > 0) {
                o.data["xn" + u] = t + n;
                o.rxp["xn" + u] = i;
                o["xn" + u] = t;
                if (!o.plugin) {
                    o.xfirst = new dt(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr);
                    o.xfirst.xs0 = 0
                }
                return o
            }
            o.data = {
                s: t + n
            };
            o.rxp = {};
            o.s = t;
            o.c = n;
            o.r = i;
            return o
        };
        var gt = function (e, t) {
                t = t || {};
                this.p = t.prefix ? X(e) || e : e;
                u[e] = u[this.p] = this;
                this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi);
                if (t.parser) {
                    this.parse = t.parser
                }
                this.clrs = t.color;
                this.multi = t.multi;
                this.keyword = t.keyword;
                this.dflt = t.defaultValue;
                this.pr = t.priority || 0
            },
            yt = _._registerComplexSpecialProp = function (e, t, n) {
                if (typeof t !== "object") {
                    t = {
                        parser: n
                    }
                }
                var r = e.split(","),
                    i = t.defaultValue,
                    s, o;
                n = n || [i];
                for (s = 0; s < r.length; s++) {
                    t.prefix = s === 0 && t.prefix;
                    t.defaultValue = n[s] || i;
                    o = new gt(r[s], t)
                }
            },
            bt = function (e) {
                if (!u[e]) {
                    var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                    yt(e, {
                        parser: function (e, n, r, i, s, o, a) {
                            var f = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                            if (!f) {
                                U("Error: " + t + " js file not loaded.");
                                return s
                            }
                            f._cssRegister();
                            return u[r].parse(e, n, r, i, s, o, a)
                        }
                    })
                }
            };
        a = gt.prototype;
        a.parseComplex = function (e, t, n, r, i, s) {
            var o = this.keyword,
                u, a, f, l, c, h;
            if (this.multi) if (N.test(n) || N.test(t)) {
                a = t.replace(N, "|").split("|");
                f = n.replace(N, "|").split("|")
            } else if (o) {
                a = [t];
                f = [n]
            }
            if (f) {
                l = f.length > a.length ? f.length : a.length;
                for (u = 0; u < l; u++) {
                    t = a[u] = a[u] || this.dflt;
                    n = f[u] = f[u] || this.dflt;
                    if (o) {
                        c = t.indexOf(o);
                        h = n.indexOf(o);
                        if (c !== h) {
                            n = h === -1 ? f : a;
                            n[u] += " " + o
                        }
                    }
                }
                t = a.join(", ");
                n = f.join(", ")
            }
            return vt(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
        };
        a.parse = function (e, t, n, r, i, o, u) {
            return this.parseComplex(e.style, this.format($(e, this.p, s, false, this.dflt)), this.format(t), i, o)
        };
        n.registerSpecialProp = function (e, t, n) {
            yt(e, {
                parser: function (e, r, i, s, o, u, a) {
                    var f = new dt(e, i, 0, 0, o, 2, i, false, n);
                    f.plugin = u;
                    f.setRatio = t(e, r, s._tween, i);
                    return f
                },
                priority: n
            })
        };
        var wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            Et = X("transform"),
            St = z + "transform",
            xt = X("transformOrigin"),
            Tt = X("perspective") !== null,
            Nt = function (e, t, r) {
                var i = r ? e._gsTransform || {
                    skewY: 0
                } : {
                    skewY: 0
                },
                    s = i.scaleX < 0,
                    o = 2e-5,
                    u = 1e5,
                    a = -Math.PI + 1e-4,
                    f = Math.PI - 1e-4,
                    l = Tt ? parseFloat($(e, xt, t, false, "0 0 0").split(" ")[2]) || i.zOrigin || 0 : 0,
                    c, h, p, d, v, m, g, y, b, w, E, S, T;
                if (Et) {
                    c = $(e, St, t, true)
                } else if (e.currentStyle) {
                    c = e.currentStyle.filter.match(x);
                    if (c && c.length === 4) {
                        c = [c[0].substr(4), Number(c[2].substr(4)), Number(c[1].substr(4)), c[3].substr(4), i.x || 0, i.y || 0].join(",")
                    } else if (i.x != null) {
                        return i
                    } else {
                        c = ""
                    }
                }
                h = (c || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
                p = h.length;
                while (--p > -1) {
                    d = Number(h[p]);
                    h[p] = (v = d - (d |= 0)) ? (v * u + (v < 0 ? -.5 : .5) | 0) / u + d : d
                }
                if (h.length === 16) {
                    var N = h[8],
                        C = h[9],
                        k = h[10],
                        L = h[12],
                        A = h[13],
                        O = h[14];

                    if (i.zOrigin) {
                        O = -i.zOrigin;
                        L = N * O - h[12];
                        A = C * O - h[13];
                        O = k * O + i.zOrigin - h[14]
                    }
                    if (!r || i.rotationX == null) {
                        var M = h[0],
                            _ = h[1],
                            D = h[2],
                            P = h[3],
                            H = h[4],
                            B = h[5],
                            j = h[6],
                            F = h[7],
                            I = h[11],
                            q = i.rotationX = Math.atan2(j, k),
                            R = q < a || q > f,
                            U, z, W, X, V, J, K;
                        if (q) {
                            X = Math.cos(-q);
                            V = Math.sin(-q);
                            U = H * X + N * V;
                            z = B * X + C * V;
                            W = j * X + k * V;
                            N = H * -V + N * X;
                            C = B * -V + C * X;
                            k = j * -V + k * X;
                            I = F * -V + I * X;
                            H = U;
                            B = z;
                            j = W
                        }
                        q = i.rotationY = Math.atan2(N, M);
                        if (q) {
                            J = q < a || q > f;
                            X = Math.cos(-q);
                            V = Math.sin(-q);
                            U = M * X - N * V;
                            z = _ * X - C * V;
                            W = D * X - k * V;
                            C = _ * V + C * X;
                            k = D * V + k * X;
                            I = P * V + I * X;
                            M = U;
                            _ = z;
                            D = W
                        }
                        q = i.rotation = Math.atan2(_, B);
                        if (q) {
                            K = q < a || q > f;
                            X = Math.cos(-q);
                            V = Math.sin(-q);
                            M = M * X + H * V;
                            z = _ * X + B * V;
                            B = _ * -V + B * X;
                            j = D * -V + j * X;
                            _ = z
                        }
                        if (K && R) {
                            i.rotation = i.rotationX = 0
                        } else if (K && J) {
                            i.rotation = i.rotationY = 0
                        } else if (J && R) {
                            i.rotationY = i.rotationX = 0
                        }
                        i.scaleX = (Math.sqrt(M * M + _ * _) * u + .5 | 0) / u;
                        i.scaleY = (Math.sqrt(B * B + C * C) * u + .5 | 0) / u;
                        i.scaleZ = (Math.sqrt(j * j + k * k) * u + .5 | 0) / u;
                        i.skewX = 0;
                        i.perspective = I ? 1 / (I < 0 ? -I : I) : 0;
                        i.x = L;
                        i.y = A;
                        i.z = O
                    }
                } else if ((!Tt || h.length === 0 || i.x !== h[4] || i.y !== h[5] || !i.rotationX && !i.rotationY) && !(i.x !== undefined && $(e, "display", t) === "none")) {
                    var Q = h.length >= 6,
                        G = Q ? h[0] : 1,
                        Y = h[1] || 0,
                        Z = h[2] || 0,
                        et = Q ? h[3] : 1;
                    i.x = h[4] || 0;
                    i.y = h[5] || 0;
                    m = Math.sqrt(G * G + Y * Y);
                    g = Math.sqrt(et * et + Z * Z);
                    y = G || Y ? Math.atan2(Y, G) : i.rotation || 0;
                    b = Z || et ? Math.atan2(Z, et) + y : i.skewX || 0;
                    w = m - Math.abs(i.scaleX || 0);
                    E = g - Math.abs(i.scaleY || 0);
                    if (Math.abs(b) > Math.PI / 2 && Math.abs(b) < Math.PI * 1.5) {
                        if (s) {
                            m *= -1;
                            b += y <= 0 ? Math.PI : -Math.PI;
                            y += y <= 0 ? Math.PI : -Math.PI
                        } else {
                            g *= -1;
                            b += b <= 0 ? Math.PI : -Math.PI
                        }
                    }
                    S = (y - i.rotation) % Math.PI;
                    T = (b - i.skewX) % Math.PI;
                    if (i.skewX === undefined || w > o || w < -o || E > o || E < -o || S > a && S < f && S * u | 0 !== 0 || T > a && T < f && T * u | 0 !== 0) {
                        i.scaleX = m;
                        i.scaleY = g;
                        i.rotation = y;
                        i.skewX = b
                    }
                    if (Tt) {
                        i.rotationX = i.rotationY = i.z = 0;
                        i.perspective = parseFloat(n.defaultTransformPerspective) || 0;
                        i.scaleZ = 1
                    }
                }
                i.zOrigin = l;
                for (p in i) {
                    if (i[p] < o) if (i[p] > -o) {
                        i[p] = 0
                    }
                }
                if (r) {
                    e._gsTransform = i
                }
                return i
            },
            Ct = function (e) {
                var t = this.data,
                    n = -t.rotation,
                    r = n + t.skewX,
                    i = 1e5,
                    s = (Math.cos(n) * t.scaleX * i | 0) / i,
                    o = (Math.sin(n) * t.scaleX * i | 0) / i,
                    u = (Math.sin(r) * -t.scaleY * i | 0) / i,
                    a = (Math.cos(r) * t.scaleY * i | 0) / i,
                    f = this.t.style,
                    l = this.t.currentStyle,
                    c, h;
                if (!l) {
                    return
                }
                h = o;
                o = -u;
                u = -h;
                c = l.filter;
                f.filter = "";
                var v = this.t.offsetWidth,
                    m = this.t.offsetHeight,
                    g = l.position !== "absolute",
                    y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + o + ", M21=" + u + ", M22=" + a,
                    b = t.x,
                    w = t.y,
                    E, S;
                if (t.ox != null) {
                    E = (t.oxp ? v * t.ox * .01 : t.ox) - v / 2;
                    S = (t.oyp ? m * t.oy * .01 : t.oy) - m / 2;
                    b += E - (E * s + S * o);
                    w += S - (E * u + S * a)
                }
                if (!g) {
                    var x = I < 8 ? 1 : -1,
                        N, C, k;
                    E = t.ieOffsetX || 0;
                    S = t.ieOffsetY || 0;
                    t.ieOffsetX = Math.round((v - ((s < 0 ? -s : s) * v + (o < 0 ? -o : o) * m)) / 2 + b);
                    t.ieOffsetY = Math.round((m - ((a < 0 ? -a : a) * m + (u < 0 ? -u : u) * v)) / 2 + w);
                    for (mt = 0; mt < 4; mt++) {
                        C = Z[mt];
                        N = l[C];
                        h = N.indexOf("px") !== -1 ? parseFloat(N) : J(this.t, C, parseFloat(N), N.replace(p, "")) || 0;
                        if (h !== t[C]) {
                            k = mt < 2 ? -t.ieOffsetX : -t.ieOffsetY
                        } else {
                            k = mt < 2 ? E - t.ieOffsetX : S - t.ieOffsetY
                        }
                        f[C] = (t[C] = Math.round(h - k * (mt === 0 || mt === 2 ? 1 : x))) + "px"
                    }
                    y += ", sizingMethod='auto expand')"
                } else {
                    E = v / 2;
                    S = m / 2;
                    y += ", Dx=" + (E - (E * s + S * o) + b) + ", Dy=" + (S - (E * u + S * a) + w) + ")"
                }
                if (c.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
                    f.filter = c.replace(T, y)
                } else {
                    f.filter = y + " " + c
                }
                if (e === 0 || e === 1) if (s === 1) if (o === 0) if (u === 0) if (a === 1) if (!g || y.indexOf("Dx=0, Dy=0") !== -1) if (!d.test(c) || parseFloat(RegExp.$1) === 100) if (c.indexOf("gradient(") === -1) {
                    f.removeAttribute("filter")
                }
            },
            kt = function (e) {
                var t = this.data,
                    n = this.t.style,
                    r = t.perspective,
                    i = t.scaleX,
                    s = 0,
                    o = 0,
                    u = 0,
                    a = 0,
                    f = t.scaleY,
                    l = 0,
                    c = 0,
                    h = 0,
                    p = 0,
                    d = t.scaleZ,
                    v = 0,
                    m = 0,
                    g = 0,
                    y = r ? -1 / r : 0,
                    b = t.rotation,
                    w = t.zOrigin,
                    E = 1e5,
                    S, x, T, N, C, k, L, A, O;
                if (j) {
                    L = n.top ? "top" : n.bottom ? "bottom" : parseFloat($(this.t, "top", null, false)) ? "bottom" : "top";
                    T = $(this.t, L, null, false);
                    A = parseFloat(T) || 0;
                    O = T.substr((A + "").length) || "px";
                    t._ffFix = !t._ffFix;
                    n[L] = (t._ffFix ? A + .05 : A - .05) + O
                }
                if (b || t.skewX) {
                    T = i * Math.cos(b);
                    N = f * Math.sin(b);
                    b -= t.skewX;
                    s = i * -Math.sin(b);
                    f = f * Math.cos(b);
                    i = T;
                    a = N
                }
                b = t.rotationY;
                if (b) {
                    S = Math.cos(b);
                    x = Math.sin(b);
                    T = i * S;
                    N = a * S;
                    C = d * -x;
                    k = y * -x;
                    o = i * x;
                    l = a * x;
                    d = d * S;
                    y *= S;
                    i = T;
                    a = N;
                    h = C;
                    m = k
                }
                b = t.rotationX;
                if (b) {
                    S = Math.cos(b);
                    x = Math.sin(b);
                    T = s * S + o * x;
                    N = f * S + l * x;
                    C = p * S + d * x;
                    k = g * S + y * x;
                    o = s * -x + o * S;
                    l = f * -x + l * S;
                    d = p * -x + d * S;
                    y = g * -x + y * S;
                    s = T;
                    f = N;
                    p = C;
                    g = k
                }
                if (w) {
                    v -= w;
                    u = o * v;
                    c = l * v;
                    v = d * v + w
                }
                u = (T = (u += t.x) - (u |= 0)) ? (T * E + (T < 0 ? -.5 : .5) | 0) / E + u : u;
                c = (T = (c += t.y) - (c |= 0)) ? (T * E + (T < 0 ? -.5 : .5) | 0) / E + c : c;
                v = (T = (v += t.z) - (v |= 0)) ? (T * E + (T < 0 ? -.5 : .5) | 0) / E + v : v;
                n[Et] = "matrix3d(" + [(i * E | 0) / E, (a * E | 0) / E, (h * E | 0) / E, (m * E | 0) / E, (s * E | 0) / E, (f * E | 0) / E, (p * E | 0) / E, (g * E | 0) / E, (o * E | 0) / E, (l * E | 0) / E, (d * E | 0) / E, (y * E | 0) / E, u, c, v, r ? 1 + -v / r : 1].join(",") + ")"
            },
            Lt = function (e) {
                var t = this.data,
                    n = this.t,
                    r = n.style,
                    i, s, o, u, a, f, l, c, h;
                if (j) {
                    i = r.top ? "top" : r.bottom ? "bottom" : parseFloat($(n, "top", null, false)) ? "bottom" : "top";
                    s = $(n, i, null, false);
                    o = parseFloat(s) || 0;
                    u = s.substr((o + "").length) || "px";
                    t._ffFix = !t._ffFix;
                    r[i] = (t._ffFix ? o + .05 : o - .05) + u
                }
                if (!t.rotation && !t.skewX) {
                    r[Et] = "matrix(" + t.scaleX + ",0,0," + t.scaleY + "," + t.x + "," + t.y + ")"
                } else {
                    a = t.rotation;
                    f = a - t.skewX;
                    l = 1e5;
                    c = t.scaleX * l;
                    h = t.scaleY * l;
                    r[Et] = "matrix(" + (Math.cos(a) * c | 0) / l + "," + (Math.sin(a) * c | 0) / l + "," + (Math.sin(f) * -h | 0) / l + "," + (Math.cos(f) * h | 0) / l + "," + t.x + "," + t.y + ")"
                }
            };
        yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
            parser: function (e, t, n, r, i, o, u) {
                if (r._transform) {
                    return i
                }
                var a = r._transform = Nt(e, s, true),
                    f = e.style,
                    l = 1e-6,
                    c = wt.length,
                    h = u,
                    p = {},
                    d, v, m, g, y, b, w;
                if (typeof h.transform === "string" && Et) {
                    m = f.cssText;
                    f[Et] = h.transform;
                    f.display = "block";
                    d = Nt(e, null, false);
                    f.cssText = m
                } else if (typeof h === "object") {
                    d = {
                        scaleX: rt(h.scaleX != null ? h.scaleX : h.scale, a.scaleX),
                        scaleY: rt(h.scaleY != null ? h.scaleY : h.scale, a.scaleY),
                        scaleZ: rt(h.scaleZ != null ? h.scaleZ : h.scale, a.scaleZ),
                        x: rt(h.x, a.x),
                        y: rt(h.y, a.y),
                        z: rt(h.z, a.z),
                        perspective: rt(h.transformPerspective, a.perspective)
                    };
                    w = h.directionalRotation;
                    if (w != null) {
                        if (typeof w === "object") {
                            for (m in w) {
                                h[m] = w[m]
                            }
                        } else {
                            h.rotation = w
                        }
                    }
                    d.rotation = it("rotation" in h ? h.rotation : "shortRotation" in h ? h.shortRotation + "_short" : "rotationZ" in h ? h.rotationZ : a.rotation * k, a.rotation, "rotation", p);
                    if (Tt) {
                        d.rotationX = it("rotationX" in h ? h.rotationX : "shortRotationX" in h ? h.shortRotationX + "_short" : a.rotationX * k || 0, a.rotationX, "rotationX", p);
                        d.rotationY = it("rotationY" in h ? h.rotationY : "shortRotationY" in h ? h.shortRotationY + "_short" : a.rotationY * k || 0, a.rotationY, "rotationY", p)
                    }
                    d.skewX = h.skewX == null ? a.skewX : it(h.skewX, a.skewX);
                    d.skewY = h.skewY == null ? a.skewY : it(h.skewY, a.skewY);
                    if (v = d.skewY - a.skewY) {
                        d.skewX += v;
                        d.rotation += v
                    }
                }
                y = a.z || a.rotationX || a.rotationY || d.z || d.rotationX || d.rotationY || d.perspective;
                if (!y && h.scale != null) {
                    d.scaleZ = 1
                }
                while (--c > -1) {
                    n = wt[c];
                    g = d[n] - a[n];
                    if (g > l || g < -l || L[n] != null) {
                        b = true;
                        i = new dt(a, n, a[n], g, i);
                        if (n in p) {
                            i.e = p[n]
                        }
                        i.xs0 = 0;
                        i.plugin = o;
                        r._overwriteProps.push(i.n)
                    }
                }
                g = h.transformOrigin;
                if (g || Tt && y && a.zOrigin) {
                    if (Et) {
                        b = true;
                        g = (g || $(e, n, s, false, "50% 50%")) + "";
                        n = xt;
                        i = new dt(f, n, 0, 0, i, -1, "css_transformOrigin");
                        i.b = f[n];
                        i.plugin = o;
                        if (Tt) {
                            m = a.zOrigin;
                            g = g.split(" ");
                            a.zOrigin = (g.length > 2 ? parseFloat(g[2]) : m) || 0;
                            i.xs0 = i.e = f[n] = g[0] + " " + (g[1] || "50%") + " 0px";
                            i = new dt(a, "zOrigin", 0, 0, i, -1, i.n);
                            i.b = m;
                            i.xs0 = i.e = a.zOrigin
                        } else {
                            i.xs0 = i.e = f[n] = g
                        }
                    } else {
                        tt(g + "", a)
                    }
                }
                if (b) {
                    r._transformType = y || this._transformType === 3 ? 3 : 2
                }
                return i
            },
            prefix: true
        });
        yt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: true,
            color: true,
            multi: true,
            keyword: "inset"
        });
        yt("borderRadius", {
            defaultValue: "0px",
            parser: function (e, t, n, r, o, u) {
                t = this.format(t);
                var a = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    f = e.style,
                    l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N;
                y = parseFloat(e.offsetWidth);
                b = parseFloat(e.offsetHeight);
                l = t.split(" ");
                for (c = 0; c < a.length; c++) {
                    if (this.p.indexOf("border")) {
                        a[c] = X(a[c])
                    }
                    d = p = $(e, a[c], s, false, "0px");
                    if (d.indexOf(" ") !== -1) {
                        p = d.split(" ");
                        d = p[0];
                        p = p[1]
                    }
                    v = h = l[c];
                    m = parseFloat(d);
                    E = d.substr((m + "").length);
                    S = v.charAt(1) === "=";
                    if (S) {
                        g = parseInt(v.charAt(0) + "1", 10);
                        v = v.substr(2);
                        g *= parseFloat(v);
                        w = v.substr((g + "").length - (g < 0 ? 1 : 0)) || ""
                    } else {
                        g = parseFloat(v);
                        w = v.substr((g + "").length)
                    }
                    if (w === "") {
                        w = i[n] || E
                    }
                    if (w !== E) {
                        x = J(e, "borderLeft", m, E);
                        T = J(e, "borderTop", m, E);
                        if (w === "%") {
                            d = x / y * 100 + "%";
                            p = T / b * 100 + "%"
                        } else if (w === "em") {
                            N = J(e, "borderLeft", 1, "em");
                            d = x / N + "em";
                            p = T / N + "em"
                        } else {
                            d = x + "px";
                            p = T + "px"
                        }
                        if (S) {
                            v = parseFloat(d) + g + w;
                            h = parseFloat(p) + g + w
                        }
                    }
                    o = vt(f, a[c], d + " " + p, v + " " + h, false, "0px", o)
                }
                return o
            },
            prefix: true,
            formatter: ft("0px 0px 0px 0px", false, true)
        });
        yt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (e, t, n, r, i, o) {
                var u = "background-position",
                    a = s || V(e, null),
                    f = this.format((a ? I ? a.getPropertyValue(u + "-x") + " " + a.getPropertyValue(u + "-y") : a.getPropertyValue(u) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                    l = this.format(t),
                    c, h, p, d, v, m;
                if (f.indexOf("%") !== -1 !== (l.indexOf("%") !== -1)) {
                    m = $(e, "backgroundImage").replace(w, "");
                    if (m && m !== "none") {
                        c = f.split(" ");
                        h = l.split(" ");
                        M.setAttribute("src", m);
                        p = 2;
                        while (--p > -1) {
                            f = c[p];
                            d = f.indexOf("%") !== -1;
                            if (d !== (h[p].indexOf("%") !== -1)) {
                                v = p === 0 ? e.offsetWidth - M.width : e.offsetHeight - M.height;
                                c[p] = d ? parseFloat(f) / 100 * v + "px" : parseFloat(f) / v * 100 + "%"
                            }
                        }
                        f = c.join(" ")
                    }
                }
                return this.parseComplex(e.style, f, l, i, o)
            },
            formatter: tt
        });
        yt("backgroundSize", {
            defaultValue: "0 0",
            formatter: tt
        });
        yt("perspective", {
            defaultValue: "0px",
            prefix: true
        });
        yt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: true
        });
        yt("transformStyle", {
            prefix: true
        });
        yt("backfaceVisibility", {
            prefix: true
        });
        yt("margin", {
            parser: lt("marginTop,marginRight,marginBottom,marginLeft")
        });
        yt("padding", {
            parser: lt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        yt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (e, t, n, r, i, o) {
                var u, a, f;
                if (I < 9) {
                    a = e.currentStyle;
                    f = I < 8 ? " " : ",";
                    u = "rect(" + a.clipTop + f + a.clipRight + f + a.clipBottom + f + a.clipLeft + ")";
                    t = this.format(t).split(",").join(f)
                } else {
                    u = this.format($(e, this.p, s, false, this.dflt));
                    t = this.format(t)
                }
                return this.parseComplex(e.style, u, t, i, o)
            }
        });
        yt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: true,
            multi: true
        });
        yt("autoRound,strictUnits", {
            parser: function (e, t, n, r, i) {
                return i
            }
        });
        yt("border", {
            defaultValue: "0px solid #000",
            parser: function (e, t, n, r, i, o) {
                return this.parseComplex(e.style, this.format($(e, "borderTopWidth", s, false, "0px") + " " + $(e, "borderTopStyle", s, false, "solid") + " " + $(e, "borderTopColor", s, false, "#000")), this.format(t), i, o)
            },
            color: true,
            formatter: function (e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(at) || ["#000"])[0]
            }
        });
        yt("float,cssFloat,styleFloat", {
            parser: function (e, t, n, r, i, s) {
                var o = e.style,
                    u = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new dt(o, u, 0, 0, i, -1, n, false, 0, o[u], t)
            }
        });
        var At = function (e) {
                var t = this.t,
                    n = t.filter,
                    r = this.s + this.c * e | 0,
                    i;
                if (r === 100) {
                    if (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1) {
                        t.removeAttribute("filter");
                        i = !$(this.data, "filter")
                    } else {
                        t.filter = n.replace(m, "");
                        i = true
                    }
                }
                if (!i) {
                    if (this.xn1) {
                        t.filter = n = n || "alpha(opacity=100)"
                    }
                    if (n.indexOf("opacity") === -1) {
                        t.filter += " alpha(opacity=" + r + ")"
                    } else {
                        t.filter = n.replace(d, "opacity=" + r)
                    }
                }
            };
        yt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (e, t, n, r, i, o) {
                var u = parseFloat($(e, "opacity", s, false, "1")),
                    a = e.style,
                    f;
                t = parseFloat(t);
                if (n === "autoAlpha") {
                    f = $(e, "visibility", s);
                    if (u === 1 && f === "hidden" && t !== 0) {
                        u = 0
                    }
                    i = new dt(a, "visibility", 0, 0, i, -1, null, false, 0, u !== 0 ? "visible" : "hidden", t === 0 ? "hidden" : "visible");
                    i.xs0 = "visible";
                    r._overwriteProps.push(i.n)
                }
                if (q) {
                    i = new dt(a, "opacity", u, t - u, i)
                } else {
                    i = new dt(a, "opacity", u * 100, (t - u) * 100, i);
                    i.xn1 = n === "autoAlpha" ? 1 : 0;
                    a.zoom = 1;
                    i.type = 2;
                    i.b = "alpha(opacity=" + i.s + ")";
                    i.e = "alpha(opacity=" + (i.s + i.c) + ")";
                    i.data = e;
                    i.plugin = o;
                    i.setRatio = At
                }
                return i
            }
        });
        var Ot = function (e, t) {
                if (t) {
                    if (e.removeProperty) {
                        e.removeProperty(t.replace(y, "-$1").toLowerCase())
                    } else {
                        e.removeAttribute(t)
                    }
                }
            },
            Mt = function (e) {
                this.t._gsClassPT = this;
                if (e === 1 || e === 0) {
                    this.t.className = e === 0 ? this.b : this.e;
                    var t = this.data,
                        n = this.t.style;
                    while (t) {
                        if (!t.v) {
                            Ot(n, t.p)
                        } else {
                            n[t.p] = t.v
                        }
                        t = t._next
                    }
                    if (e === 1 && this.t._gsClassPT === this) {
                        this.t._gsClassPT = null
                    }
                } else if (this.t.className !== this.e) {
                    this.t.className = this.e
                }
            };
        yt("className", {
            parser: function (e, t, n, i, o, u, a) {
                var f = e.className,
                    l = e.style.cssText,
                    c, h, p, d, v;
                o = i._classNamePT = new dt(e, n, 0, 0, o, 2);
                o.setRatio = Mt;
                o.pr = -11;
                r = true;
                o.b = f;
                h = Q(e, s);
                p = e._gsClassPT;
                if (p) {
                    d = {};
                    v = p.data;
                    while (v) {
                        d[v.p] = 1;
                        v = v._next
                    }
                    p.setRatio(1)
                }
                e._gsClassPT = o;
                o.e = t.charAt(1) !== "=" ? t : f.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + (t.charAt(0) === "+" ? " " + t.substr(2) : "");
                if (i._tween._duration) {
                    e.className = o.e;
                    c = G(e, h, Q(e), a, d);
                    e.className = f;
                    o.data = c.firstMPT;
                    e.style.cssText = l;
                    o = o.xfirst = i.parse(e, c.difs, o, u)
                }
                return o
            }
        });
        var _t = function (e) {
                if (e === 1 || e === 0) if (this.data._totalTime === this.data._totalDuration) {
                    var t = this.e === "all",
                        n = this.t.style,
                        r = t ? n.cssText.split(";") : this.e.split(","),
                        i = r.length,
                        s = u.transform.parse,
                        o;
                    while (--i > -1) {
                        o = r[i];
                        if (t) {
                            o = o.substr(0, o.indexOf(":")).split(" ").join("")
                        }
                        if (u[o]) {
                            o = u[o].parse === s ? Et : u[o].p
                        }
                        Ot(n, o)
                    }
                }
            };
        yt("clearProps", {
            parser: function (e, t, n, i, s) {
                s = new dt(e, n, 0, 0, s, 2);
                s.setRatio = _t;
                s.e = t;
                s.pr = -10;
                s.data = i._tween;
                r = true;
                return s
            }
        });
        a = "bezier,throwProps,physicsProps,physics2D".split(",");
        mt = a.length;
        while (mt--) {
            bt(a[mt])
        }
        a = n.prototype;
        a._firstPT = null;
        a._onInitTween = function (e, t, u) {
            if (!e.nodeType) {
                return false
            }
            this._target = e;
            this._tween = u;
            this._vars = t;
            P = t.autoRound;
            r = false;
            i = t.suffixMap || n.suffixMap;
            s = V(e, "");
            o = this._overwriteProps;
            var a = e.style,
                f, l, c, h, p, d, m, g, y;
            if (H) if (a.zIndex === "") {
                f = $(e, "zIndex", s);
                if (f === "auto" || f === "") {
                    a.zIndex = 0
                }
            }
            if (typeof t === "string") {
                h = a.cssText;
                f = Q(e, s);
                a.cssText = h + ";" + t;
                f = G(e, f, Q(e)).difs;
                if (!q && v.test(t)) {
                    f.opacity = parseFloat(RegExp.$1)
                }
                t = f;
                a.cssText = h
            }
            this._firstPT = l = this.parse(e, t, null);
            if (this._transformType) {
                y = this._transformType === 3;
                if (!Et) {
                    a.zoom = 1
                } else if (B) {
                    H = true;
                    if (a.zIndex === "") {
                        m = $(e, "zIndex", s);
                        if (m === "auto" || m === "") {
                            a.zIndex = 0
                        }
                    }
                    if (F) {
                        a.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden")
                    }
                }
                c = l;
                while (c && c._next) {
                    c = c._next
                }
                g = new dt(e, "transform", 0, 0, null, 2);
                this._linkCSSP(g, null, c);
                g.setRatio = y && Tt ? kt : Et ? Lt : Ct;
                g.data = this._transform || Nt(e, s, true);
                o.pop()
            }
            if (r) {
                while (l) {
                    d = l._next;
                    c = h;
                    while (c && c.pr > l.pr) {
                        c = c._next
                    }
                    if (l._prev = c ? c._prev : p) {
                        l._prev._next = l
                    } else {
                        h = l
                    }
                    if (l._next = c) {
                        c._prev = l
                    } else {
                        p = l
                    }
                    l = d
                }
                this._firstPT = h
            }
            return true
        };
        a.parse = function (e, t, n, r) {
            var o = e.style,
                a, f, l, c, h, d, v, m, y, b;
            for (a in t) {
                d = t[a];
                f = u[a];
                if (f) {
                    n = f.parse(e, d, a, this, n, r, t)
                } else {
                    h = $(e, a, s) + "";
                    y = typeof d === "string";
                    if (a === "color" || a === "fill" || a === "stroke" || a.indexOf("Color") !== -1 || y && g.test(d)) {
                        if (!y) {
                            d = ut(d);
                            d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"
                        }
                        n = vt(o, a, h, d, true, "transparent", n, 0, r)
                    } else if (y && (d.indexOf(" ") !== -1 || d.indexOf(",") !== -1)) {
                        n = vt(o, a, h, d, true, null, n, 0, r)
                    } else {
                        l = parseFloat(h);
                        v = l || l === 0 ? h.substr((l + "").length) : "";
                        if (h === "" || h === "auto") {
                            if (a === "width" || a === "height") {
                                l = et(e, a, s);
                                v = "px"
                            } else if (a === "left" || a === "top") {
                                l = K(e, a, s);
                                v = "px"
                            } else {
                                l = a !== "opacity" ? 0 : 1;
                                v = ""
                            }
                        }
                        b = y && d.charAt(1) === "=";
                        if (b) {
                            c = parseInt(d.charAt(0) + "1", 10);
                            d = d.substr(2);
                            c *= parseFloat(d);
                            m = d.replace(p, "")
                        } else {
                            c = parseFloat(d);
                            m = y ? d.substr((c + "").length) || "" : ""
                        }
                        if (m === "") {
                            m = i[a] || v
                        }
                        d = c || c === 0 ? (b ? c + l : c) + m : t[a];
                        if (v !== m) if (m !== "") if (c || c === 0) if (l || l === 0) {
                            l = J(e, a, l, v);
                            if (m === "%") {
                                l /= J(e, a, 100, "%") / 100;
                                if (l > 100) {

                                    l = 100
                                }
                                if (t.strictUnits !== true) {
                                    h = l + "%"
                                }
                            } else if (m === "em") {
                                l /= J(e, a, 1, "em")
                            } else {
                                c = J(e, a, c, m);
                                m = "px"
                            }
                            if (b) if (c || c === 0) {
                                d = c + l + m
                            }
                        }
                        if (b) {
                            c += l
                        }
                        if ((l || l === 0) && (c || c === 0)) {
                            n = new dt(o, a, l, c - l, n, 0, "css_" + a, P !== false && (m === "px" || a === "zIndex"), 0, h, d);
                            n.xs0 = m
                        } else if (o[a] === undefined || !d && (d + "" === "NaN" || d == null)) {
                            U("invalid " + a + " tween value: " + t[a])
                        } else {
                            n = new dt(o, a, c || l || 0, 0, n, -1, "css_" + a, false, 0, h, d);
                            n.xs0 = d === "none" && (a === "display" || a.indexOf("Style") !== -1) ? h : d
                        }
                    }
                }
                if (r) if (n && !n.plugin) {
                    n.plugin = r
                }
            }
            return n
        };
        a.setRatio = function (e) {
            var t = this._firstPT,
                n = 1e-6,
                r, i, s;
            if (e === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
                while (t) {
                    if (t.type !== 2) {
                        t.t[t.p] = t.e
                    } else {
                        t.setRatio(e)
                    }
                    t = t._next
                }
            } else if (e || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -1e-6) {
                while (t) {
                    r = t.c * e + t.s;
                    if (t.r) {
                        r = r > 0 ? r + .5 | 0 : r - .5 | 0
                    } else if (r < n) if (r > -n) {
                        r = 0
                    }
                    if (!t.type) {
                        t.t[t.p] = r + t.xs0
                    } else if (t.type === 1) {
                        s = t.l;
                        if (s === 2) {
                            t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2
                        } else if (s === 3) {
                            t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3
                        } else if (s === 4) {
                            t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4
                        } else if (s === 5) {
                            t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5
                        } else {
                            i = t.xs0 + r + t.xs1;
                            for (s = 1; s < t.l; s++) {
                                i += t["xn" + s] + t["xs" + (s + 1)]
                            }
                            t.t[t.p] = i
                        }
                    } else if (t.type === -1) {
                        t.t[t.p] = t.xs0
                    } else if (t.setRatio) {
                        t.setRatio(e)
                    }
                    t = t._next
                }
            } else {
                while (t) {
                    if (t.type !== 2) {
                        t.t[t.p] = t.b
                    } else {
                        t.setRatio(e)
                    }
                    t = t._next
                }
            }
        };
        a._enableTransforms = function (e) {
            this._transformType = e || this._transformType === 3 ? 3 : 2
        };
        a._linkCSSP = function (e, t, n, r) {
            if (e) {
                if (t) {
                    t._prev = e
                }
                if (e._next) {
                    e._next._prev = e._prev
                }
                if (n) {
                    n._next = e
                } else if (!r && this._firstPT === null) {
                    this._firstPT = e
                }
                if (e._prev) {
                    e._prev._next = e._next
                } else if (this._firstPT === e) {
                    this._firstPT = e._next
                }
                e._next = t;
                e._prev = n
            }
            return e
        };
        a._kill = function (t) {
            var n = t,
                r, i, s;
            if (t.css_autoAlpha || t.css_alpha) {
                n = {};
                for (i in t) {
                    n[i] = t[i]
                }
                n.css_opacity = 1;
                if (n.css_autoAlpha) {
                    n.css_visibility = 1
                }
            }
            if (t.css_className && (r = this._classNamePT)) {
                s = r.xfirst;
                if (s && s._prev) {
                    this._linkCSSP(s._prev, r._next, s._prev._prev)
                } else if (s === this._firstPT) {
                    this._firstPT = r._next
                }
                if (r._next) {
                    this._linkCSSP(r._next, r._next._next, s._prev)
                }
                this._classNamePT = null
            }
            return e.prototype._kill.call(this, n)
        };
        var Dt = function (e, t, n) {
                var r, i, s, o;
                if (e.slice) {
                    i = e.length;
                    while (--i > -1) {
                        Dt(e[i], t, n)
                    }
                    return
                }
                r = e.childNodes;
                i = r.length;
                while (--i > -1) {
                    s = r[i];
                    o = s.type;
                    if (s.style) {
                        t.push(Q(s));
                        if (n) {
                            n.push(s)
                        }
                    }
                    if ((o === 1 || o === 9 || o === 11) && s.childNodes.length) {
                        Dt(s, t, n)
                    }
                }
            };
        n.cascadeTo = function (e, n, r) {
            var i = t.to(e, n, r),
                s = [i],
                o = [],
                u = [],
                a = [],
                f = t._internals.reservedProps,
                l, c, h;
            e = i._targets || i.target;
            Dt(e, o, a);
            i.render(n, true);
            Dt(e, u);
            i.render(0, true);
            i._enabled(true);
            l = a.length;
            while (--l > -1) {
                c = G(a[l], o[l], u[l]);
                if (c.firstMPT) {
                    c = c.difs;
                    for (h in r) {
                        if (f[h]) {
                            c[h] = r[h]
                        }
                    }
                    s.push(t.to(a[l], n, c))
                }
            }
            return s
        };
        e.activate([n]);
        return n
    }, true);
    (function () {
        var e = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function (e, t, n) {
                this._tween = n;
                return true
            }
        }),
            t = e.prototype;
        t._onInitAllProps = function () {
            var e = this._tween,
                t = e.vars.roundProps instanceof Array ? e.vars.roundProps : e.vars.roundProps.split(","),
                n = t.length,
                r = {},
                i = e._propLookup.roundProps,
                s, o, u;
            while (--n > -1) {
                r[t[n]] = 1
            }
            n = t.length;
            while (--n > -1) {
                s = t[n];
                o = e._firstPT;
                while (o) {
                    u = o._next;
                    if (o.pg) {
                        o.t._roundProps(r, true)
                    } else if (o.n === s) {
                        this._add(o.t, s, o.s, o.c);
                        if (u) {
                            u._prev = o._prev
                        }
                        if (o._prev) {
                            o._prev._next = u
                        } else if (e._firstPT === o) {
                            e._firstPT = u
                        }
                        o._next = o._prev = null;
                        e._propLookup[s] = i
                    }
                    o = u
                }
            }
            return false
        };
        t._add = function (e, t, n, r) {
            this._addTween(e, t, n, n + r, t, true);
            this._overwriteProps.push(t)
        }
    })();
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function (e, t, n) {
            var r;
            if (typeof e.setAttribute !== "function") {
                return false
            }
            this._target = e;
            this._proxy = {};
            for (r in t) {
                this._addTween(this._proxy, r, parseFloat(e.getAttribute(r)), t[r], r);
                this._overwriteProps.push(r)
            }
            return true
        },
        set: function (e) {
            this._super.setRatio.call(this, e);
            var t = this._overwriteProps,
                n = t.length,
                r;
            while (--n > -1) {
                r = t[n];
                this._target.setAttribute(r, this._proxy[r] + "")
            }
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function (e, t, n) {
            if (typeof t !== "object") {
                t = {
                    rotation: t
                }
            }
            this.finals = {};
            var r = t.useRadians === true ? Math.PI * 2 : 360,
                i = 1e-6,
                s, o, u, a, f, l;
            for (s in t) {
                if (s !== "useRadians") {
                    l = (t[s] + "").split("_");
                    o = l[0];
                    u = parseFloat(typeof e[s] !== "function" ? e[s] : e[s.indexOf("set") || typeof e["get" + s.substr(3)] !== "function" ? s : "get" + s.substr(3)]());
                    a = this.finals[s] = typeof o === "string" && o.charAt(1) === "=" ? u + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0;
                    f = a - u;
                    if (l.length) {
                        o = l.join("_");
                        if (o.indexOf("short") !== -1) {
                            f = f % r;
                            if (f !== f % (r / 2)) {
                                f = f < 0 ? f + r : f - r
                            }
                        }
                        if (o.indexOf("_cw") !== -1 && f < 0) {
                            f = (f + r * 9999999999) % r - (f / r | 0) * r
                        } else if (o.indexOf("ccw") !== -1 && f > 0) {
                            f = (f - r * 9999999999) % r - (f / r | 0) * r
                        }
                    }
                    if (f > i || f < -i) {
                        this._addTween(e, s, u, u + f, s);
                        this._overwriteProps.push(s)
                    }
                }
            }
            return true
        },
        set: function (e) {
            var t;
            if (e !== 1) {
                this._super.setRatio.call(this, e)
            } else {
                t = this._firstPT;
                while (t) {
                    if (t.f) {
                        t.t[t.p](this.finals[t.p])
                    } else {
                        t.t[t.p] = this.finals[t.p]
                    }
                    t = t._next
                }
            }
        }
    })._autoCSS = true;
    window._gsDefine("easing.Back", ["easing.Ease"], function (e) {
        var t = window.GreenSockGlobals || window,
            n = t.com.greensock,
            r = Math.PI * 2,
            i = Math.PI / 2,
            s = n._class,
            o = function (t, n) {
                var r = s("easing." + t, function () {}, true),
                    i = r.prototype = new e;
                i.constructor = r;
                i.getRatio = n;
                return r
            },
            u = e.register ||
        function () {}, a = function (e, t, n, r, i) {
            var o = s("easing." + e, {
                easeOut: new t,
                easeIn: new n,
                easeInOut: new r
            }, true);
            u(o, e);
            return o
        }, f = function (e, t, n) {
            this.t = e;
            this.v = t;
            if (n) {
                this.next = n;
                n.prev = this;
                this.c = n.v - t;
                this.gap = n.t - e
            }
        }, l = function (t, n) {
            var r = s("easing." + t, function (e) {
                this._p1 = e || e === 0 ? e : 1.70158;
                this._p2 = this._p1 * 1.525
            }, true),
                i = r.prototype = new e;
            i.constructor = r;
            i.getRatio = n;
            i.config = function (e) {
                return new r(e)
            };
            return r
        }, c = a("Back", l("BackOut", function (e) {
            return (e = e - 1) * e * ((this._p1 + 1) * e + this._p1) + 1
        }), l("BackIn", function (e) {
            return e * e * ((this._p1 + 1) * e - this._p1)
        }), l("BackInOut", function (e) {
            return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
        })), h = s("easing.SlowMo", function (e, t, n) {
            t = t || t === 0 ? t : .7;
            if (e == null) {
                e = .7
            } else if (e > 1) {
                e = 1
            }
            this._p = e !== 1 ? t : 0;
            this._p1 = (1 - e) / 2;
            this._p2 = e;
            this._p3 = this._p1 + this._p2;
            this._calcEnd = n === true
        }, true), p = h.prototype = new e, d, v, m;
        p.constructor = h;
        p.getRatio = function (e) {
            var t = e + (.5 - e) * this._p;
            if (e < this._p1) {
                return this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t
            } else if (e > this._p3) {
                return this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
            }
            return this._calcEnd ? 1 : t
        };
        h.ease = new h(.7, .7);
        p.config = h.config = function (e, t, n) {
            return new h(e, t, n)
        };
        d = s("easing.SteppedEase", function (e) {
            e = e || 1;
            this._p1 = 1 / e;
            this._p2 = e + 1
        }, true);
        p = d.prototype = new e;
        p.constructor = d;
        p.getRatio = function (e) {
            if (e < 0) {
                e = 0
            } else if (e >= 1) {
                e = .999999999
            }
            return (this._p2 * e >> 0) * this._p1
        };
        p.config = d.config = function (e) {
            return new d(e)
        };
        v = s("easing.RoughEase", function (t) {
            t = t || {};
            var n = t.taper || "none",
                r = [],
                i = 0,
                s = (t.points || 20) | 0,
                o = s,
                u = t.randomize !== false,
                a = t.clamp === true,
                l = t.template instanceof e ? t.template : null,
                c = typeof t.strength === "number" ? t.strength * .4 : .4,
                h, p, d, v, m, g;
            while (--o > -1) {
                h = u ? Math.random() : 1 / s * o;
                p = l ? l.getRatio(h) : h;
                if (n === "none") {
                    d = c
                } else if (n === "out") {
                    v = 1 - h;
                    d = v * v * c
                } else if (n === "in") {
                    d = h * h * c
                } else if (h < .5) {
                    v = h * 2;
                    d = v * v * .5 * c
                } else {
                    v = (1 - h) * 2;
                    d = v * v * .5 * c
                }
                if (u) {
                    p += Math.random() * d - d * .5
                } else if (o % 2) {
                    p += d * .5
                } else {
                    p -= d * .5
                }
                if (a) {
                    if (p > 1) {
                        p = 1
                    } else if (p < 0) {
                        p = 0
                    }
                }
                r[i++] = {
                    x: h,
                    y: p
                }
            }
            r.sort(function (e, t) {
                return e.x - t.x
            });
            g = new f(1, 1, null);
            o = s;
            while (--o > -1) {
                m = r[o];
                g = new f(m.x, m.y, g)
            }
            this._prev = new f(0, 0, g.t !== 0 ? g : g.next)
        }, true);
        p = v.prototype = new e;
        p.constructor = v;
        p.getRatio = function (e) {
            var t = this._prev;
            if (e > t.t) {
                while (t.next && e >= t.t) {
                    t = t.next
                }
                t = t.prev
            } else {
                while (t.prev && e <= t.t) {
                    t = t.prev
                }
            }
            this._prev = t;
            return t.v + (e - t.t) / t.gap * t.c
        };
        p.config = function (e) {
            return new v(e)
        };
        v.ease = new v;
        a("Bounce", o("BounceOut", function (e) {
            if (e < 1 / 2.75) {
                return 7.5625 * e * e
            } else if (e < 2 / 2.75) {
                return 7.5625 * (e -= 1.5 / 2.75) * e + .75
            } else if (e < 2.5 / 2.75) {
                return 7.5625 * (e -= 2.25 / 2.75) * e + .9375
            }
            return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), o("BounceIn", function (e) {
            if ((e = 1 - e) < 1 / 2.75) {
                return 1 - 7.5625 * e * e
            } else if (e < 2 / 2.75) {
                return 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75)
            } else if (e < 2.5 / 2.75) {
                return 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375)
            }
            return 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), o("BounceInOut", function (e) {
            var t = e < .5;
            if (t) {
                e = 1 - e * 2
            } else {
                e = e * 2 - 1
            }
            if (e < 1 / 2.75) {
                e = 7.5625 * e * e
            } else if (e < 2 / 2.75) {
                e = 7.5625 * (e -= 1.5 / 2.75) * e + .75
            } else if (e < 2.5 / 2.75) {
                e = 7.5625 * (e -= 2.25 / 2.75) * e + .9375
            } else {
                e = 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }
            return t ? (1 - e) * .5 : e * .5 + .5
        }));
        a("Circ", o("CircOut", function (e) {
            return Math.sqrt(1 - (e = e - 1) * e)
        }), o("CircIn", function (e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), o("CircInOut", function (e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }));
        m = function (t, n, i) {
            var o = s("easing." + t, function (e, t) {
                this._p1 = e || 1;
                this._p2 = t || i;
                this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0)
            }, true),
                u = o.prototype = new e;
            u.constructor = o;
            u.getRatio = n;
            u.config = function (e, t) {
                return new o(e, t)
            };
            return o
        };
        a("Elastic", m("ElasticOut", function (e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * r / this._p2) + 1
        }, .3), m("ElasticIn", function (e) {
            return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2))
        }, .3), m("ElasticInOut", function (e) {
            return (e *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2) * .5 + 1
        }, .45));
        a("Expo", o("ExpoOut", function (e) {
            return 1 - Math.pow(2, -10 * e)
        }), o("ExpoIn", function (e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), o("ExpoInOut", function (e) {
            return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        }));
        a("Sine", o("SineOut", function (e) {
            return Math.sin(e * i)
        }), o("SineIn", function (e) {
            return -Math.cos(e * i) + 1
        }), o("SineInOut", function (e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }));
        s("easing.EaseLookup", {
            find: function (t) {
                return e.map[t]
            }
        }, true);
        u(t.SlowMo, "SlowMo", "ease,");
        u(v, "RoughEase", "ease,");
        u(d, "SteppedEase", "ease,");
        return c
    }, true)
});
(function (e) {
    "use strict";
    var t = e.GreenSockGlobals || e,
        n = function (e) {
            var n = e.split("."),
                r = t,
                i;
            for (i = 0; i < n.length; i++) {
                r[n[i]] = r = r[n[i]] || {}
            }
            return r
        },
        r = n("com.greensock"),
        i = [].slice,
        s = function () {},
        o, u, a, f, l, c = {},
        h = function (r, i, s, o) {
            this.sc = c[r] ? c[r].sc : [];
            c[r] = this;
            this.gsClass = null;
            this.func = s;
            var u = [];
            this.check = function (a) {
                var f = i.length,
                    l = f,
                    p, d, v, m;
                while (--f > -1) {
                    if ((p = c[i[f]] || new h(i[f], [])).gsClass) {
                        u[f] = p.gsClass;
                        l--
                    } else if (a) {
                        p.sc.push(this)
                    }
                }
                if (l === 0 && s) {
                    d = ("com.greensock." + r).split(".");
                    v = d.pop();
                    m = n(d.join("."))[v] = this.gsClass = s.apply(s, u);
                    if (o) {
                        t[v] = m;
                        if (typeof define === "function" && define.amd) {
                            define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").join("/"), [], function () {
                                return m
                            })
                        } else if (typeof module !== "undefined" && module.exports) {
                            module.exports = m
                        }
                    }
                    for (f = 0; f < this.sc.length; f++) {
                        this.sc[f].check()
                    }
                }
            };
            this.check(true)
        },
        p = e._gsDefine = function (e, t, n, r) {
            return new h(e, t, n, r)
        },
        d = r._class = function (e, t, n) {
            t = t ||
            function () {};
            p(e, [], function () {
                return t
            }, n);
            return t
        };
    p.globals = t;
    var v = [0, 0, 1, 1],
        m = [],
        g = d("easing.Ease", function (e, t, n, r) {
            this._func = e;
            this._type = n || 0;
            this._power = r || 0;
            this._params = t ? v.concat(t) : v
        }, true),
        y = g.map = {},
        b = g.register = function (e, t, n, i) {
            var s = t.split(","),
                o = s.length,
                u = (n || "easeIn,easeOut,easeInOut").split(","),
                a, f, l, c;
            while (--o > -1) {
                f = s[o];
                a = i ? d("easing." + f, null, true) : r.easing[f] || {};
                l = u.length;
                while (--l > -1) {
                    c = u[l];
                    y[f + "." + c] = y[c + f] = a[c] = e.getRatio ? e : e[c] || new e
                }
            }
        };
    a = g.prototype;
    a._calcEnd = false;
    a.getRatio = function (e) {
        if (this._func) {
            this._params[0] = e;
            return this._func.apply(null, this._params)
        }
        var t = this._type,
            n = this._power,
            r = t === 1 ? 1 - e : t === 2 ? e : e < .5 ? e * 2 : (1 - e) * 2;
        if (n === 1) {
            r *= r
        } else if (n === 2) {
            r *= r * r
        } else if (n === 3) {
            r *= r * r * r
        } else if (n === 4) {
            r *= r * r * r * r
        }
        return t === 1 ? 1 - r : t === 2 ? r : e < .5 ? r / 2 : 1 - r / 2
    };
    o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
    u = o.length;
    while (--u > -1) {
        a = o[u] + ",Power" + u;
        b(new g(null, null, 1, u), a, "easeOut", true);
        b(new g(null, null, 2, u), a, "easeIn" + (u === 0 ? ",easeNone" : ""));
        b(new g(null, null, 3, u), a, "easeInOut")
    }
    y.linear = r.easing.Linear.easeIn;
    y.swing = r.easing.Quad.easeInOut;
    var w = d("events.EventDispatcher", function (e) {
        this._listeners = {};
        this._eventTarget = e || this
    });
    a = w.prototype;
    a.addEventListener = function (e, t, n, r, i) {
        i = i || 0;
        var s = this._listeners[e],
            o = 0,
            u, a;
        if (s == null) {
            this._listeners[e] = s = []
        }
        a = s.length;
        while (--a > -1) {
            u = s[a];
            if (u.c === t && u.s === n) {
                s.splice(a, 1)
            } else if (o === 0 && u.pr < i) {
                o = a + 1
            }
        }
        s.splice(o, 0, {
            c: t,
            s: n,
            up: r,
            pr: i
        });
        if (this === f && !l) {
            f.wake()
        }
    };
    a.removeEventListener = function (e, t) {
        var n = this._listeners[e],
            r;
        if (n) {
            r = n.length;
            while (--r > -1) {
                if (n[r].c === t) {
                    n.splice(r, 1);
                    return
                }
            }
        }
    };
    a.dispatchEvent = function (e) {
        var t = this._listeners[e],
            n, r, i;
        if (t) {
            n = t.length;
            r = this._eventTarget;
            while (--n > -1) {
                i = t[n];
                if (i.up) {
                    i.c.call(i.s || r, {
                        type: e,
                        target: r
                    })
                } else {
                    i.c.call(i.s || r)
                }
            }
        }
    };
    var E = e.requestAnimationFrame,
        S = e.cancelAnimationFrame,
        x = Date.now ||
    function () {
        return (new Date).getTime()
    };
    o = ["ms", "moz", "webkit", "o"];
    u = o.length;
    while (--u > -1 && !E) {
        E = e[o[u] + "RequestAnimationFrame"];
        S = e[o[u] + "CancelAnimationFrame"] || e[o[u] + "CancelRequestAnimationFrame"]
    }
    d("Ticker", function (e, t) {
        var n = this,
            r = x(),
            i = t !== false && E,
            o, u, a, c, h, p = function (e) {
                n.time = (x() - r) / 1e3;
                var t = a,
                    i = n.time - h;
                if (!o || i > 0 || e === true) {
                    n.frame++;
                    h += i + (i >= c ? .004 : c - i);
                    n.dispatchEvent("tick")
                }
                if (e !== true && t === a) {
                    a = u(p)
                }
            };
        w.call(n);
        this.time = this.frame = 0;
        this.tick = function () {
            p(true)
        };
        this.sleep = function () {
            if (a == null) {
                return
            }
            if (!i || !S) {
                clearTimeout(a)
            } else {
                S(a)
            }
            u = s;
            a = null;
            if (n === f) {
                l = false
            }
        };
        this.wake = function () {
            if (a !== null) {
                n.sleep()
            }
            u = o === 0 ? s : !i || !E ?
            function (e) {
                return setTimeout(e, (h - n.time) * 1e3 + 1 | 0)
            } : E;
            if (n === f) {
                l = true
            }
            p(2)
        };
        this.fps = function (e) {
            if (!arguments.length) {
                return o
            }
            o = e;
            c = 1 / (o || 60);
            h = this.time + c;
            n.wake()
        };
        this.useRAF = function (e) {
            if (!arguments.length) {
                return i
            }
            n.sleep();
            i = e;
            n.fps(o)
        };
        n.fps(e);
        setTimeout(function () {
            if (i && (!a || n.frame < 5)) {
                n.useRAF(false)
            }
        }, 1500)
    });
    a = r.Ticker.prototype = new r.events.EventDispatcher;
    a.constructor = r.Ticker;
    var T = d("core.Animation", function (e, t) {
        this.vars = t || {};
        this._duration = this._totalDuration = e || 0;
        this._delay = Number(this.vars.delay) || 0;
        this._timeScale = 1;
        this._active = this.vars.immediateRender === true;
        this.data = this.vars.data;
        this._reversed = this.vars.reversed === true;
        if (!B) {
            return
        }
        if (!l) {
            f.wake()
        }
        var n = this.vars.useFrames ? H : B;
        n.add(this, n._time);
        if (this.vars.paused) {
            this.paused(true)
        }
    });
    f = T.ticker = new r.Ticker;
    a = T.prototype;
    a._dirty = a._gc = a._initted = a._paused = false;
    a._totalTime = a._time = 0;
    a._rawPrevTime = -1;
    a._next = a._last = a._onUpdate = a._timeline = a.timeline = null;
    a._paused = false;
    a.play = function (e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        return this.reversed(false).paused(false)
    };
    a.pause = function (e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        return this.paused(true)
    };
    a.resume = function (e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        return this.paused(false)
    };
    a.seek = function (e, t) {
        return this.totalTime(Number(e), t !== false)
    };
    a.restart = function (e, t) {
        return this.reversed(false).paused(false).totalTime(e ? -this._delay : 0, t !== false, true)
    };
    a.reverse = function (e, t) {
        if (arguments.length) {
            this.seek(e || this.totalDuration(), t)
        }
        return this.reversed(true).paused(false)
    };
    a.render = function () {};
    a.invalidate = function () {
        return this
    };
    a._enabled = function (e, t) {
        if (!l) {
            f.wake()
        }
        this._gc = !e;
        this._active = e && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration;
        if (t !== true) {
            if (e && !this.timeline) {
                this._timeline.add(this, this._startTime - this._delay)
            } else if (!e && this.timeline) {
                this._timeline._remove(this, true)
            }
        }
        return false
    };
    a._kill = function (e, t) {
        return this._enabled(false, false)
    };
    a.kill = function (e, t) {
        this._kill(e, t);
        return this
    };
    a._uncache = function (e) {
        var t = e ? this : this.timeline;
        while (t) {
            t._dirty = true;
            t = t.timeline
        }
        return this
    };
    a.eventCallback = function (e, t, n, r) {
        if (e == null) {
            return null
        } else if (e.substr(0, 2) === "on") {
            var i = this.vars,
                s;
            if (arguments.length === 1) {
                return i[e]
            }
            if (t == null) {
                delete i[e]
            } else {
                i[e] = t;
                i[e + "Params"] = n;
                i[e + "Scope"] = r;
                if (n) {
                    s = n.length;
                    while (--s > -1) {
                        if (n[s] === "{self}") {
                            n = i[e + "Params"] = n.concat();
                            n[s] = this
                        }
                    }
                }
            }
            if (e === "onUpdate") {
                this._onUpdate = t
            }
        }
        return this
    };
    a.delay = function (e) {
        if (!arguments.length) {
            return this._delay
        }
        if (this._timeline.smoothChildTiming) {
            this.startTime(this._startTime + e - this._delay)
        }
        this._delay = e;
        return this
    };
    a.duration = function (e) {
        if (!arguments.length) {
            this._dirty = false;
            return this._duration
        }
        this._duration = this._totalDuration = e;
        this._uncache(true);
        if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (e !== 0) {
            this.totalTime(this._totalTime * (e / this._duration), true)
        }
        return this
    };
    a.totalDuration = function (e) {
        this._dirty = false;
        return !arguments.length ? this._totalDuration : this.duration(e)
    };
    a.time = function (e, t) {
        if (!arguments.length) {
            return this._time
        }
        if (this._dirty) {
            this.totalDuration()
        }
        return this.totalTime(e > this._duration ? this._duration : e, t)
    };
    a.totalTime = function (e, t, n) {
        if (!l) {
            f.wake()
        }
        if (!arguments.length) {
            return this._totalTime
        }
        if (this._timeline) {
            if (e < 0 && !n) {
                e += this.totalDuration()
            }
            if (this._timeline.smoothChildTiming) {
                if (this._dirty) {
                    this.totalDuration()
                }
                var r = this._totalDuration,
                    i = this._timeline;
                if (e > r && !n) {
                    e = r
                }
                this._startTime = (this._paused ? this._pauseTime : i._time) - (!this._reversed ? e : r - e) / this._timeScale;
                if (!i._dirty) {
                    this._uncache(false)
                }
                if (!i._active) {
                    while (i._timeline) {
                        i.totalTime(i._totalTime, true);
                        i = i._timeline
                    }
                }
            }
            if (this._gc) {
                this._enabled(true, false)
            }
            if (this._totalTime !== e) {
                this.render(e, t, false)
            }
        }
        return this
    };
    a.startTime = function (e) {
        if (!arguments.length) {
            return this._startTime
        }
        if (e !== this._startTime) {
            this._startTime = e;
            if (this.timeline) if (this.timeline._sortChildren) {
                this.timeline.add(this, e - this._delay)
            }
        }
        return this
    };
    a.timeScale = function (e) {
        if (!arguments.length) {
            return this._timeScale
        }
        e = e || 1e-6;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var t = this._pauseTime,
                n = t || t === 0 ? t : this._timeline.totalTime();
            this._startTime = n - (n - this._startTime) * this._timeScale / e
        }
        this._timeScale = e;
        return this._uncache(false)
    };
    a.reversed = function (e) {
        if (!arguments.length) {
            return this._reversed
        }
        if (e != this._reversed) {
            this._reversed = e;
            this.totalTime(this._totalTime, true)
        }
        return this
    };
    a.paused = function (e) {
        if (!arguments.length) {
            return this._paused
        }
        if (e != this._paused) if (this._timeline) {
            if (!l && !e) {
                f.wake()
            }
            var t = this._timeline.rawTime(),
                n = t - this._pauseTime;
            if (!e && this._timeline.smoothChildTiming) {
                this._startTime += n;
                this._uncache(false)
            }
            this._pauseTime = e ? t : null;
            this._paused = e;
            this._active = !e && this._totalTime > 0 && this._totalTime < this._totalDuration;
            if (!e && n !== 0 && this._duration !== 0) {
                this.render(this._totalTime, true, true)
            }
        }
        if (this._gc && !e) {
            this._enabled(true, false)
        }
        return this
    };
    var N = d("core.SimpleTimeline", function (e) {
        T.call(this, 0, e);
        this.autoRemoveChildren = this.smoothChildTiming = true
    });
    a = N.prototype = new T;
    a.constructor = N;
    a.kill()._gc = false;
    a._first = a._last = null;
    a._sortChildren = false;
    a.add = a.insert = function (e, t, n, r) {
        var i, s;
        e._startTime = Number(t || 0) + e._delay;
        if (e._paused) if (this !== e._timeline) {
            e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale
        }
        if (e.timeline) {
            e.timeline._remove(e, true)
        }
        e.timeline = e._timeline = this;
        if (e._gc) {
            e._enabled(true, true)
        }
        i = this._last;
        if (this._sortChildren) {
            s = e._startTime;
            while (i && i._startTime > s) {
                i = i._prev
            }
        }
        if (i) {
            e._next = i._next;
            i._next = e
        } else {
            e._next = this._first;
            this._first = e
        }
        if (e._next) {
            e._next._prev = e
        } else {
            this._last = e
        }
        e._prev = i;
        if (this._timeline) {
            this._uncache(true)
        }
        return this
    };
    a._remove = function (e, t) {
        if (e.timeline === this) {
            if (!t) {
                e._enabled(false, true)
            }
            e.timeline = null;
            if (e._prev) {
                e._prev._next = e._next
            } else if (this._first === e) {
                this._first = e._next
            }
            if (e._next) {
                e._next._prev = e._prev
            } else if (this._last === e) {
                this._last = e._prev
            }
            if (this._timeline) {
                this._uncache(true)
            }
        }
        return this
    };
    a.render = function (e, t, n) {
        var r = this._first,
            i;
        this._totalTime = this._time = this._rawPrevTime = e;
        while (r) {
            i = r._next;
            if (r._active || e >= r._startTime && !r._paused) {
                if (!r._reversed) {
                    r.render((e - r._startTime) * r._timeScale, t, n)
                } else {
                    r.render((!r._dirty ? r._totalDuration : r.totalDuration()) - (e - r._startTime) * r._timeScale, t, n)
                }
            }
            r = i
        }
    };
    a.rawTime = function () {
        if (!l) {
            f.wake()
        }
        return this._totalTime
    };
    var C = d("TweenLite", function (e, t, n) {
        T.call(this, t, n);
        if (e == null) {
            throw "Cannot tween a null target."
        }
        this.target = e = typeof e !== "string" ? e : C.selector(e) || e;
        var r = e.jquery || e.length && e[0] && e[0].nodeType && e[0].style,
            s = this.vars.overwrite,
            o, u, a;
        this._overwrite = s = s == null ? P[C.defaultOverwrite] : typeof s === "number" ? s >> 0 : P[s];
        if ((r || e instanceof Array) && typeof e[0] !== "number") {
            this._targets = a = i.call(e, 0);
            this._propLookup = [];
            this._siblings = [];
            for (o = 0; o < a.length; o++) {
                u = a[o];
                if (!u) {
                    a.splice(o--, 1);
                    continue
                } else if (typeof u === "string") {
                    u = a[o--] = C.selector(u);
                    if (typeof u === "string") {
                        a.splice(o + 1, 1)
                    }
                    continue
                } else if (u.length && u[0] && u[0].nodeType && u[0].style) {
                    a.splice(o--, 1);
                    this._targets = a = a.concat(i.call(u, 0));
                    continue
                }
                this._siblings[o] = j(u, this, false);
                if (s === 1) if (this._siblings[o].length > 1) {
                    F(u, this, null, 1, this._siblings[o])
                }
            }
        } else {
            this._propLookup = {};
            this._siblings = j(e, this, false);
            if (s === 1) if (this._siblings.length > 1) {
                F(e, this, null, 1, this._siblings)
            }
        }
        if (this.vars.immediateRender || t === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
            this.render(-this._delay, false, true)
        }
    }, true),
        k = function (e) {
            return e.length && e[0] && e[0].nodeType && e[0].style
        },
        L = function (e, t) {
            var n = {},
                r;
            for (r in e) {
                if (!D[r] && (!(r in t) || r === "x" || r === "y" || r === "width" || r === "height" || r === "className") && (!O[r] || O[r] && O[r]._autoCSS)) {
                    n[r] = e[r];
                    delete e[r]
                }
            }
            e.css = n
        };
    a = C.prototype = new T;
    a.constructor = C;
    a.kill()._gc = false;
    a.ratio = 0;
    a._firstPT = a._targets = a._overwrittenProps = a._startAt = null;
    a._notifyPluginsOfEnabled = false;
    C.version = "1.9.7";
    C.defaultEase = a._ease = new g(null, null, 1, 1);
    C.defaultOverwrite = "auto";
    C.ticker = f;
    C.autoSleep = true;
    C.selector = e.$ || e.jQuery ||
    function (t) {
        if (e.$) {
            C.selector = e.$;
            return e.$(t)
        }
        return e.document ? e.document.getElementById(t.charAt(0) === "#" ? t.substr(1) : t) : t
    };
    var A = C._internals = {},
        O = C._plugins = {},
        M = C._tweenLookup = {},
        _ = 0,
        D = A.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        P = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        H = T._rootFramesTimeline = new N,
        B = T._rootTimeline = new N;
    B._startTime = f.time;
    H._startTime = f.frame;
    B._active = H._active = true;
    T._updateRoot = function () {
        B.render((f.time - B._startTime) * B._timeScale, false, false);
        H.render((f.frame - H._startTime) * H._timeScale, false, false);
        if (!(f.frame % 120)) {
            var e, t, n;
            for (n in M) {
                t = M[n].tweens;
                e = t.length;
                while (--e > -1) {
                    if (t[e]._gc) {
                        t.splice(e, 1)
                    }
                }
                if (t.length === 0) {
                    delete M[n]
                }
            }
            n = B._first;
            if (!n || n._paused) if (C.autoSleep && !H._first && f._listeners.tick.length === 1) {
                while (n && n._paused) {
                    n = n._next
                }
                if (!n) {
                    f.sleep()
                }
            }
        }
    };
    f.addEventListener("tick", T._updateRoot);
    var j = function (e, t, n) {
            var r = e._gsTweenID,
                i, s;
            if (!M[r || (e._gsTweenID = r = "t" + _++)]) {
                M[r] = {
                    target: e,
                    tweens: []
                }
            }
            if (t) {
                i = M[r].tweens;
                i[s = i.length] = t;
                if (n) {
                    while (--s > -1) {
                        if (i[s] === t) {
                            i.splice(s, 1)
                        }
                    }
                }
            }
            return M[r].tweens
        },
        F = function (e, t, n, r, i) {
            var s, o, u, a;
            if (r === 1 || r >= 4) {
                a = i.length;
                for (s = 0; s < a; s++) {
                    if ((u = i[s]) !== t) {
                        if (!u._gc) if (u._enabled(false, false)) {
                            o = true
                        }
                    } else if (r === 5) {
                        break
                    }
                }
                return o
            }
            var f = t._startTime + 1e-10,
                l = [],
                c = 0,
                h = t._duration === 0,
                p;
            s = i.length;
            while (--s > -1) {
                if ((u = i[s]) === t || u._gc || u._paused) {} else if (u._timeline !== t._timeline) {
                    p = p || I(t, 0, h);
                    if (I(u, p, h) === 0) {
                        l[c++] = u
                    }
                } else if (u._startTime <= f) if (u._startTime + u.totalDuration() / u._timeScale + 1e-10 > f) if (!((h || !u._initted) && f - u._startTime <= 2e-10)) {
                    l[c++] = u
                }
            }
            s = c;
            while (--s > -1) {
                u = l[s];
                if (r === 2) if (u._kill(n, e)) {
                    o = true
                }
                if (r !== 2 || !u._firstPT && u._initted) {
                    if (u._enabled(false, false)) {
                        o = true
                    }
                }
            }
            return o
        },
        I = function (e, t, n) {
            var r = e._timeline,
                i = r._timeScale,
                s = e._startTime,
                o = 1e-10;
            while (r._timeline) {
                s += r._startTime;
                i *= r._timeScale;
                if (r._paused) {
                    return -100
                }
                r = r._timeline
            }
            s /= i;
            return s > t ? s - t : n && s === t || !e._initted && s - t < 2 * o ? o : (s += e.totalDuration() / e._timeScale / i) > t + o ? 0 : s - t - o
        };
    a._init = function () {
        var e = this.vars,
            t = this._overwrittenProps,
            n = this._duration,
            r = e.ease,
            i, s, o, u;
        if (e.startAt) {
            e.startAt.overwrite = 0;
            e.startAt.immediateRender = true;
            this._startAt = C.to(this.target, 0, e.startAt);
            if (e.immediateRender) {
                this._startAt = null;
                if (this._time === 0 && n !== 0) {
                    return
                }
            }
        } else if (e.runBackwards && e.immediateRender && n !== 0) {
            if (this._startAt) {
                this._startAt.render(-1, true);
                this._startAt = null
            } else if (this._time === 0) {
                o = {};
                for (u in e) {
                    if (!D[u] || u === "autoCSS") {
                        o[u] = e[u]
                    }
                }
                o.overwrite = 0;
                this._startAt = C.to(this.target, 0, o);
                return
            }
        }
        if (!r) {
            this._ease = C.defaultEase
        } else if (r instanceof g) {
            this._ease = e.easeParams instanceof Array ? r.config.apply(r, e.easeParams) : r
        } else {
            this._ease = typeof r === "function" ? new g(r, e.easeParams) : y[r] || C.defaultEase
        }
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets) {
            i = this._targets.length;
            while (--i > -1) {
                if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], t ? t[i] : null)) {
                    s = true
                }
            }
        } else {
            s = this._initProps(this.target, this._propLookup, this._siblings, t)
        }
        if (s) {
            C._onPluginEvent("_onInitAllProps", this)
        }
        if (t) if (!this._firstPT) if (typeof this.target !== "function") {
            this._enabled(false, false)
        }
        if (e.runBackwards) {
            o = this._firstPT;
            while (o) {
                o.s += o.c;
                o.c = -o.c;
                o = o._next
            }
        }
        this._onUpdate = e.onUpdate;
        this._initted = true
    };
    a._initProps = function (e, t, n, r) {
        var i, s, o, u, a, f, l;
        if (e == null) {
            return false
        }
        if (!this.vars.css) if (e.style) if (e.nodeType) if (O.css) if (this.vars.autoCSS !== false) {
            L(this.vars, e)
        }
        for (i in this.vars) {
            if (D[i]) {
                if (i === "onStartParams" || i === "onUpdateParams" || i === "onCompleteParams" || i === "onReverseCompleteParams" || i === "onRepeatParams") if (a = this.vars[i]) {
                    s = a.length;
                    while (--s > -1) {
                        if (a[s] === "{self}") {
                            a = this.vars[i] = a.concat();
                            a[s] = this
                        }
                    }
                }
            } else if (O[i] && (u = new O[i])._onInitTween(e, this.vars[i], this)) {
                this._firstPT = f = {
                    _next: this._firstPT,
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: true,
                    n: i,
                    pg: true,
                    pr: u._priority
                };
                s = u._overwriteProps.length;
                while (--s > -1) {
                    t[u._overwriteProps[s]] = this._firstPT
                }
                if (u._priority || u._onInitAllProps) {
                    o = true
                }
                if (u._onDisable || u._onEnable) {
                    this._notifyPluginsOfEnabled = true
                }
            } else {
                this._firstPT = t[i] = f = {
                    _next: this._firstPT,
                    t: e,
                    p: i,
                    f: typeof e[i] === "function",
                    n: i,
                    pg: false,
                    pr: 0
                };
                f.s = !f.f ? parseFloat(e[i]) : e[i.indexOf("set") || typeof e["get" + i.substr(3)] !== "function" ? i : "get" + i.substr(3)]();
                l = this.vars[i];
                f.c = typeof l === "string" && l.charAt(1) === "=" ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - f.s || 0
            }
            if (f) if (f._next) {
                f._next._prev = f
            }
        }
        if (r) if (this._kill(r, e)) {
            return this._initProps(e, t, n, r)
        }
        if (this._overwrite > 1) if (this._firstPT) if (n.length > 1) if (F(e, this, t, this._overwrite, n)) {
            this._kill(t, e);
            return this._initProps(e, t, n, r)
        }
        return o
    };
    a.render = function (e, t, n) {
        var r = this._time,
            i, s, o;
        if (e >= this._duration) {
            this._totalTime = this._time = this._duration;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
            if (!this._reversed) {
                i = true;
                s = "onComplete"
            }
            if (this._duration === 0) {
                if (e === 0 || this._rawPrevTime < 0) if (this._rawPrevTime !== e) {
                    n = true;
                    if (this._rawPrevTime > 0) {
                        s = "onReverseComplete";
                        if (t) {
                            e = -1
                        }
                    }
                }
                this._rawPrevTime = e
            }
        } else if (e < 1e-7) {
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (r !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                s = "onReverseComplete";
                i = this._reversed
            }
            if (e < 0) {
                this._active = false;
                if (this._duration === 0) {
                    if (this._rawPrevTime >= 0) {
                        n = true
                    }
                    this._rawPrevTime = e
                }
            } else if (!this._initted) {
                n = true
            }
        } else {
            this._totalTime = this._time = e;
            if (this._easeType) {
                var u = e / this._duration,
                    a = this._easeType,
                    f = this._easePower;
                if (a === 1 || a === 3 && u >= .5) {
                    u = 1 - u
                }
                if (a === 3) {
                    u *= 2
                }
                if (f === 1) {
                    u *= u
                } else if (f === 2) {
                    u *= u * u
                } else if (f === 3) {
                    u *= u * u * u
                } else if (f === 4) {
                    u *= u * u * u * u
                }
                if (a === 1) {
                    this.ratio = 1 - u
                } else if (a === 2) {
                    this.ratio = u
                } else if (e / this._duration < .5) {
                    this.ratio = u / 2
                } else {
                    this.ratio = 1 - u / 2
                }
            } else {
                this.ratio = this._ease.getRatio(e / this._duration)
            }
        }
        if (this._time === r && !n) {
            return
        } else if (!this._initted) {
            this._init();
            if (!this._initted) {
                return
            }
            if (this._time && !i) {
                this.ratio = this._ease.getRatio(this._time / this._duration)
            } else if (i && this._ease._calcEnd) {
                this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1)
            }
        }
        if (!this._active) if (!this._paused) {
            this._active = true
        }
        if (r === 0) {
            if (this._startAt) {
                if (e >= 0) {
                    this._startAt.render(e, t, n)
                } else if (!s) {
                    s = "_dummyGS"
                }
            }
            if (this.vars.onStart) if (this._time !== 0 || this._duration === 0) if (!t) {
                this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || m)
            }
        }
        o = this._firstPT;
        while (o) {
            if (o.f) {
                o.t[o.p](o.c * this.ratio + o.s)
            } else {
                o.t[o.p] = o.c * this.ratio + o.s
            }
            o = o._next
        }
        if (this._onUpdate) {
            if (e < 0) if (this._startAt) {
                this._startAt.render(e, t, n)
            }
            if (!t) {
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || m)
            }
        }
        if (s) if (!this._gc) {
            if (e < 0 && this._startAt && !this._onUpdate) {
                this._startAt.render(e, t, n)
            }
            if (i) {
                if (this._timeline.autoRemoveChildren) {
                    this._enabled(false, false)
                }
                this._active = false
            }
            if (!t && this.vars[s]) {
                this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || m)
            }
        }
    };
    a._kill = function (e, t) {
        if (e === "all") {
            e = null
        }
        if (e == null) if (t == null || t === this.target) {
            return this._enabled(false, false)
        }
        t = typeof t !== "string" ? t || this._targets || this.target : C.selector(t) || t;
        var n, r, i, s, o, u, a, f;
        if ((t instanceof Array || k(t)) && typeof t[0] !== "number") {
            n = t.length;
            while (--n > -1) {
                if (this._kill(e, t[n])) {
                    u = true
                }
            }
        } else {
            if (this._targets) {
                n = this._targets.length;
                while (--n > -1) {
                    if (t === this._targets[n]) {
                        o = this._propLookup[n] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                }
            } else if (t !== this.target) {
                return false
            } else {
                o = this._propLookup;
                r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
            }
            if (o) {
                a = e || o;
                f = e !== r && r !== "all" && e !== o && (e == null || e._tempKill !== true);
                for (i in a) {
                    if (s = o[i]) {
                        if (s.pg && s.t._kill(a)) {
                            u = true
                        }
                        if (!s.pg || s.t._overwriteProps.length === 0) {
                            if (s._prev) {
                                s._prev._next = s._next
                            } else if (s === this._firstPT) {
                                this._firstPT = s._next
                            }
                            if (s._next) {
                                s._next._prev = s._prev
                            }
                            s._next = s._prev = null
                        }
                        delete o[i]
                    }
                    if (f) {
                        r[i] = 1
                    }
                }
                if (!this._firstPT && this._initted) {
                    this._enabled(false, false)
                }
            }
        }
        return u
    };
    a.invalidate = function () {
        if (this._notifyPluginsOfEnabled) {
            C._onPluginEvent("_onDisable", this)
        }
        this._firstPT = null;
        this._overwrittenProps = null;
        this._onUpdate = null;
        this._startAt = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = false;
        this._propLookup = this._targets ? {} : [];
        return this
    };
    a._enabled = function (e, t) {
        if (!l) {
            f.wake()
        }
        if (e && this._gc) {
            var n = this._targets,
                r;
            if (n) {
                r = n.length;
                while (--r > -1) {
                    this._siblings[r] = j(n[r], this, true)
                }
            } else {
                this._siblings = j(this.target, this, true)
            }
        }
        T.prototype._enabled.call(this, e, t);
        if (this._notifyPluginsOfEnabled) if (this._firstPT) {
            return C._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
        }
        return false
    };
    C.to = function (e, t, n) {
        return new C(e, t, n)
    };
    C.from = function (e, t, n) {
        n.runBackwards = true;
        n.immediateRender = n.immediateRender != false;
        return new C(e, t, n)
    };
    C.fromTo = function (e, t, n, r) {
        r.startAt = n;
        r.immediateRender = r.immediateRender != false && n.immediateRender != false;
        return new C(e, t, r)
    };
    C.delayedCall = function (e, t, n, r, i) {
        return new C(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: n,
            onCompleteScope: r,
            onReverseComplete: t,
            onReverseCompleteParams: n,
            onReverseCompleteScope: r,
            immediateRender: false,
            useFrames: i,
            overwrite: 0
        })
    };
    C.set = function (e, t) {
        return new C(e, 0, t)
    };
    C.killTweensOf = C.killDelayedCallsTo = function (e, t) {
        var n = C.getTweensOf(e),
            r = n.length;
        while (--r > -1) {
            n[r]._kill(t, e)
        }
    };
    C.getTweensOf = function (e) {
        if (e == null) {
            return []
        }
        e = typeof e !== "string" ? e : C.selector(e) || e;
        var t, n, r, i;
        if ((e instanceof Array || k(e)) && typeof e[0] !== "number") {
            t = e.length;
            n = [];
            while (--t > -1) {
                n = n.concat(C.getTweensOf(e[t]))
            }
            t = n.length;
            while (--t > -1) {
                i = n[t];
                r = t;
                while (--r > -1) {
                    if (i === n[r]) {
                        n.splice(t, 1)
                    }
                }
            }
        } else {
            n = j(e).concat();
            t = n.length;
            while (--t > -1) {
                if (n[t]._gc) {
                    n.splice(t, 1)
                }
            }
        }
        return n
    };
    var q = d("plugins.TweenPlugin", function (e, t) {
        this._overwriteProps = (e || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = t || 0;
        this._super = q.prototype
    }, true);
    a = q.prototype;
    q.version = "1.9.1";
    q.API = 2;
    a._firstPT = null;
    a._addTween = function (e, t, n, r, i, s) {
        var o, u;
        if (r != null && (o = typeof r === "number" || r.charAt(1) !== "=" ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)))) {
            this._firstPT = u = {
                _next: this._firstPT,
                t: e,
                p: t,
                s: n,
                c: o,
                f: typeof e[t] === "function",
                n: i || t,
                r: s
            };
            if (u._next) {
                u._next._prev = u
            }
        }
    };
    a.setRatio = function (e) {
        var t = this._firstPT,
            n = 1e-6,
            r;
        while (t) {
            r = t.c * e + t.s;
            if (t.r) {
                r = r + (r > 0 ? .5 : -.5) >> 0
            } else if (r < n) if (r > -n) {
                r = 0
            }
            if (t.f) {
                t.t[t.p](r)
            } else {
                t.t[t.p] = r
            }
            t = t._next
        }
    };
    a._kill = function (e) {
        var t = this._overwriteProps,
            n = this._firstPT,
            r;
        if (e[this._propName] != null) {
            this._overwriteProps = []
        } else {
            r = t.length;
            while (--r > -1) {
                if (e[t[r]] != null) {
                    t.splice(r, 1)
                }
            }
        }
        while (n) {
            if (e[n.n] != null) {
                if (n._next) {
                    n._next._prev = n._prev
                }
                if (n._prev) {
                    n._prev._next = n._next;
                    n._prev = null
                } else if (this._firstPT === n) {
                    this._firstPT = n._next
                }
            }
            n = n._next
        }
        return false
    };
    a._roundProps = function (e, t) {
        var n = this._firstPT;
        while (n) {
            if (e[this._propName] || n.n != null && e[n.n.split(this._propName + "_").join("")]) {
                n.r = t
            }
            n = n._next
        }
    };
    C._onPluginEvent = function (e, t) {
        var n = t._firstPT,
            r, i, s, o, u;
        if (e === "_onInitAllProps") {
            while (n) {
                u = n._next;
                i = s;
                while (i && i.pr > n.pr) {
                    i = i._next
                }
                if (n._prev = i ? i._prev : o) {
                    n._prev._next = n
                } else {
                    s = n
                }
                if (n._next = i) {
                    i._prev = n
                } else {
                    o = n
                }
                n = u
            }
            n = t._firstPT = s
        }
        while (n) {
            if (n.pg) if (typeof n.t[e] === "function") if (n.t[e]()) {
                r = true
            }
            n = n._next
        }
        return r
    };
    q.activate = function (e) {
        var t = e.length;
        while (--t > -1) {
            if (e[t].API === q.API) {
                O[(new e[t])._propName] = e[t]
            }
        }
        return true
    };
    p.plugin = function (e) {
        if (!e || !e.propName || !e.init || !e.API) {
            throw "illegal plugin definition."
        }
        var t = e.propName,
            n = e.priority || 0,
            r = e.overwriteProps,
            i = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            },
            s = d("plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin", function () {
                q.call(this, t, n);
                this._overwriteProps = r || []
            }, e.global === true),
            o = s.prototype = new q(t),
            u;
        o.constructor = s;
        s.API = e.API;
        for (u in i) {
            if (typeof e[u] === "function") {
                o[i[u]] = e[u]
            }
        }
        s.version = e.version;
        q.activate([s]);
        return s
    };
    o = e._gsQueue;
    if (o) {
        for (u = 0; u < o.length; u++) {
            o[u]()
        }
        for (a in c) {
            if (!c[a].func) {
                e.console.log("GSAP encountered missing dependency: com.greensock." + a)
            }
        }
    }
    l = false
})(window);
(function (e) {
    var t = function (n, r) {
            var i = this;
            var s = t.prototype;
            this.hider = null;
            this.mainHolder_do = null;
            this.mainImagesHolder_do = null;
            this.smallImage_sdo = null;
            this.border_sdo = null;
            this.handler_sdo = null;
            this.dumy_sdo = null;
            this.image_img = r.navigatorImage_img;
            this.borderColor_str = r.navigatorBorderColor_str;
            this.handlerColor_str = r.navigatorHandlerColor_str;
            this.handMovePath_str = r.handMovePath_str;
            this.handGrabPath_str = r.handGrabPath_str;
            this.navigatorPosition_str = r.navigatorPosition_str;
            this.stageWidth;
            this.stageHeight;
            this.totalWidth = r.navigatorWidth;
            this.totalHeight = r.navigatorHeight;
            this.offsetX = r.navigatorOffsetX;
            this.offsetY = r.navigatorOffsetY;
            this.finalWidth;
            this.finalHeight;
            this.finalX;
            this.finalY;
            this.xPositionOnPress;
            this.yPositionOnPress;
            this.lastPresedX;
            this.lastPresedY;
            this.tweenCompleteId_to;
            this.isShowed_bl = true;
            this.isTweening_bl = false;
            this.isDragging_bl = false;
            this.isMobile_bl = FWDUtils.isMobile;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            i.init = function () {
                i.setOverflow("visible");
                i.setSelectable(false);
                i.setupMainContiners();
                i.setupImageSdo();
                i.hide();
                i.resizeAndPosition();
                i.handler_sdo.screen.style.cursor = "url(" + i.handMovePath_str + "), default"
            };
            i.activate = function () {
                i.addPannSupport()
            };
            i.resizeAndPosition = function () {
                i.stageWidth = n.stageWidth;
                i.stageHeight = n.stageHeight;
                if (i.navigatorPosition_str == t.TOP_LEFT) {
                    i.setX(i.offsetX);
                    i.setY(i.offsetY)
                } else if (i.navigatorPosition_str == t.TOP_RIGHT) {
                    i.setX(i.stageWidth - i.totalWidth - i.offsetX);
                    i.setY(i.offsetY)
                } else if (i.navigatorPosition_str == t.BOTTOM_LEFT) {
                    i.setX(i.offsetX);
                    i.setY(i.stageHeight - i.totalHeight - i.offsetY)
                } else if (i.navigatorPosition_str == t.BOTTOM_RIGHT) {
                    i.setX(i.stageWidth - i.totalWidth - i.offsetX);
                    i.setY(i.stageHeight - i.totalHeight - i.offsetY)
                }
            };
            i.setupHider = function (e) {};
            i.onHiderHide = function () {};
            i.setupMainContiners = function () {
                i.mainHolder_do = new FWDDisplayObject("div", "absolute", "visible");
                i.mainHolder_do.setWidth(i.totalWidth);
                i.mainHolder_do.setHeight(i.totalHeight);
                i.addChild(i.mainHolder_do);
                i.mainImagesHolder_do = new FWDDisplayObject("div", "absolute", "visible");
                i.smallImage_sdo = new FWDSimpleDisplayObject("img");
                i.mainHolder_do.addChild(i.mainImagesHolder_do);
                i.border_sdo = new FWDSimpleDisplayObject("div");
                i.border_sdo.setWidth(i.totalWidth - 2);
                i.border_sdo.setHeight(i.totalHeight - 2);
                i.border_sdo.getStyle().borderStyle = "solid";
                i.border_sdo.getStyle().borderWidth = "1px";
                i.border_sdo.getStyle().borderColor = i.borderColor_str;
                i.mainHolder_do.addChild(i.border_sdo);
                i.handler_sdo = new FWDSimpleDisplayObject("div");
                i.handler_sdo.setWidth(i.totalWidth - 2);
                i.handler_sdo.setHeight(i.totalHeight - 2);
                i.handler_sdo.getStyle().borderStyle = "solid";
                i.handler_sdo.getStyle().borderWidth = "1px";
                if (FWDUtils.isIE) i.handler_sdo.getStyle().background = "url('dumy')";
                i.handler_sdo.getStyle().borderColor = i.handlerColor_str;
                i.mainHolder_do.addChild(i.handler_sdo)
            };
            i.setupImageSdo = function (e) {
                i.smallImage_sdo = new FWDSimpleDisplayObject("img");
                i.smallImage_sdo.setScreen(i.image_img);
                i.mainImagesHolder_do.addChild(i.smallImage_sdo)
            };
            i.update = function (e, t, n, r, s) {
                if (n > 1) n = 1;
                if (r > 1) r = 1;
                if (e > 1) e = 1;
                if (t > 1) t = 1;
                if (isNaN(e)) e = 0;
                if (isNaN(t)) t = 0;
                i.finalWidth = Math.round(n * (i.totalWidth - 4));
                i.finalHeight = Math.round(r * (i.totalHeight - 4));
                i.finalX = Math.round(e * (i.totalWidth - 2 - i.finalWidth));
                if (i.finalX < 1) {
                    i.finalX = 1
                } else if (i.finalX >= i.totalWidth - 3 - i.finalWidth) {
                    i.finalX = i.totalWidth - 3 - i.finalWidth
                }
                i.finalY = Math.round(t * (i.totalHeight - 2 - i.finalHeight));
                if (i.finalY < 1) {
                    i.finalY = 1
                } else if (i.finalY >= i.totalHeight - 3 - i.finalHeight) {
                    i.finalY = i.totalHeight - 3 - i.finalHeight
                }
                clearTimeout(i.tweenCompleteId_to);
                if (s) {
                    i.isTweening_bl = true;
                    i.tweenCompleteId_to = setTimeout(function () {
                        if (i == null) return;
                        i.isTweening_bl = false
                    }, 200);
                    TweenMax.killTweensOf(i.handler_sdo);
                    TweenMax.to(i.handler_sdo, .2, {
                        x: i.finalX,
                        y: i.finalY,
                        w: i.finalWidth,
                        h: i.finalHeight
                    })
                } else {
                    i.isTweening_bl = false;
                    TweenMax.killTweensOf(i.handler_sdo);
                    i.handler_sdo.setX(i.finalX);
                    i.handler_sdo.setY(i.finalY);
                    i.handler_sdo.setWidth(i.finalWidth);
                    i.handler_sdo.setHeight(i.finalHeight)
                }
            };
            i.addPannSupport = function () {
                if (i.isMobile_bl) {
                    if (i.hasPointerEvent_bl) {
                        i.handler_sdo.screen.addEventListener("MSPointerDown", i.panStartHandler)
                    } else {
                        i.handler_sdo.screen.addEventListener("touchstart", i.panStartHandler)
                    }
                } else if (i.handler_sdo.screen.addEventListener) {
                    i.handler_sdo.screen.addEventListener("mousedown", i.panStartHandler)
                } else if (i.handler_sdo.screen.attachEvent) {
                    i.handler_sdo.screen.attachEvent("onmousedown", i.panStartHandler)
                }
            };
            i.panStartHandler = function (n) {
                if (n.preventDefault) n.preventDefault();
                if (i.isTweening_bl) return;
                var r = FWDUtils.getViewportMouseCoordinates(n);
                i.isDragging_bl = true;
                i.xPositionOnPress = i.handler_sdo.getX();
                i.yPositionOnPress = i.handler_sdo.getY();
                i.lastPresedX = r.screenX;
                i.lastPresedY = r.screenY;
                i.dispatchEvent(t.PAN_START);
                if (i.isMobile_bl) {
                    if (i.hasPointerEvent_bl) {
                        e.addEventListener("MSPointerMove", i.panMoveHandler);
                        e.addEventListener("MSPointerUp", i.panEndHandler)
                    } else {
                        e.addEventListener("touchmove", i.panMoveHandler);
                        e.addEventListener("touchend", i.panEndHandler)
                    }
                } else {
                    if (e.addEventListener) {
                        e.addEventListener("mousemove", i.panMoveHandler);
                        e.addEventListener("mouseup", i.panEndHandler)
                    } else if (document.attachEvent) {
                        document.attachEvent("onmousemove", i.panMoveHandler);
                        document.attachEvent("onmouseup", i.panEndHandler)
                    }
                }
            };
            i.panMoveHandler = function (e) {
                if (e.preventDefault) e.preventDefault();
                if (e.touches && e.touches.length != 1) return;
                var n = FWDUtils.getViewportMouseCoordinates(e);
                i.finalX = Math.round(i.xPositionOnPress + n.screenX - i.lastPresedX);
                if (i.finalX < 1) {
                    i.finalX = 1
                } else if (i.finalX >= i.totalWidth - 3 - i.finalWidth) {
                    i.finalX = i.totalWidth - 3 - i.finalWidth
                }
                i.handler_sdo.setX(i.finalX);
                i.finalY = Math.round(i.yPositionOnPress + n.screenY - i.lastPresedY);
                if (i.finalY < 1) {
                    i.finalY = 1
                } else if (i.finalY >= i.totalHeight - 3 - i.finalHeight) {
                    i.finalY = i.totalHeight - 3 - i.finalHeight
                }
                i.handler_sdo.setY(i.finalY);
                i.dispatchEvent(t.PAN, {
                    percentX: i.finalX / (i.totalWidth - 2 - i.finalWidth),
                    percentY: i.finalY / (i.totalHeight - 2 - i.finalHeight)
                })
            };
            i.panEndHandler = function (n) {
                i.isDragging_bl = false;
                i.dispatchEvent(t.PAN_END);
                if (i.isMobile_bl) {
                    if (i.hasPointerEvent_bl) {
                        e.removeEventListener("MSPointerMove", i.panMoveHandler);
                        e.removeEventListener("MSPointerUp", i.panEndHandler)
                    } else {
                        e.removeEventListener("touchmove", i.panMoveHandler);
                        e.removeEventListener("touchend", i.panEndHandler)
                    }
                } else {
                    if (e.removeEventListener) {
                        e.removeEventListener("mousemove", i.panMoveHandler);
                        e.removeEventListener("mouseup", i.panEndHandler)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmousemove", i.panMoveHandler);
                        document.detachEvent("onmouseup", i.panEndHandler)
                    }
                }
            };
            i.show = function (e) {
                if (i.isShowed_bl) return;
                i.resizeAndPosition();
                if (e) {
                    TweenMax.to(i.mainHolder_do, 1, {
                        y: 0,
                        ease: Expo.easeInOut
                    })
                } else {
                    TweenMax.killTweensOf(i.mainHolder_do);
                    i.mainHolder_do.setY(0)
                }
                i.isShowed_bl = true
            };
            i.hide = function (e) {
                if (!i.isShowed_bl) return;
                if (i.navigatorPosition_str == t.TOP_LEFT || i.navigatorPosition_str == t.TOP_RIGHT) {
                    if (e) {
                        TweenMax.to(i.mainHolder_do, 1, {
                            y: -i.totalHeight - i.offsetY,
                            ease: Expo.easeInOut
                        });
                        i.update(1, 1, 1, 1, true)
                    } else {
                        TweenMax.killTweensOf(i.mainHolder_do);
                        i.mainHolder_do.setY(-i.totalHeight - i.offsetY)
                    }
                } else if (i.navigatorPosition_str == t.BOTTOM_LEFT || i.navigatorPosition_str == t.BOTTOM_RIGHT) {
                    if (e) {
                        TweenMax.to(i.mainHolder_do, 1, {
                            y: i.totalHeight + i.offsetY,
                            ease: Expo.easeInOut
                        });
                        i.update(1, 1, 1, 1, true)
                    } else {
                        TweenMax.killTweensOf(i.mainHolder_do);
                        i.mainHolder_do.setY(i.totalHeight + i.offsetY)
                    }
                }
                i.isShowed_bl = false
            };
            i.cleanMainEvents = function () {
                if (i.isMobile_bl) {
                    i.handler_sdo.screen.removeEventListener("touchstart", i.panStartHandler);
                    i.handler_sdo.screen.addEventListener("MSPointerDown", i.panStartHandler);
                    e.removeEventListener("touchmove", i.panMoveHandler);
                    e.removeEventListener("touchend", i.panEndHandler);
                    e.removeEventListener("MSPointerMove", i.panMoveHandler);
                    e.removeEventListener("MSPointerUp", i.panEndHandler)
                } else if (i.handler_sdo.screen.removeEventListener) {
                    i.handler_sdo.screen.removeEventListener("mousedown", i.panStartHandler);
                    e.removeEventListener("mousemove", i.panMoveHandler);
                    e.removeEventListener("mouseup", i.panEndHandler)
                } else if (i.handler_sdo.screen.detachEvent) {
                    i.handler_sdo.screen.detachEvent("onmousedown", i.panStartHandler);
                    document.detachEvent("onmousemove", i.panMoveHandler);
                    document.detachEvent("onmouseup", i.panEndHandler)
                }
                i.screen.onmousedown = null;
                i.handler_sdo.screen.onmousedown = null;
                clearTimeout(i.tweenCompleteId_to)
            };
            i.destroy = function () {
                i.cleanMainEvents();
                if (i.hider) {
                    i.hider.removeListener(FWDHider.HIDE, i.onHiderHide)
                }
                TweenMax.killTweensOf(i.mainHolder_do);
                i.mainHolder_do.destroy();
                TweenMax.killTweensOf(i.handler_sdo);
                i.handler_sdo.destroy();
                i.mainImagesHolder_do.destroy();
                if (i.dumy_sdo) i.dumy_sdo.destroy();
                i.hider = null;
                i.mainHolder_do = null;
                i.mainImagesHolder_do = null;
                i.smallImage_sdo = null;
                i.handler_sdo = null;
                i.dumy_sdo = null;
                i.images_ar = r.navigatorImages_ar;
                i.borderColor_str = null;
                i.handlerColor_str = null;
                i.handMovePath_str = null;
                i.handGrabPath_str = null;
                i.navigatorPosition_str = null;
                r = null;
                n = null;
                i.setInnerHTML("");
                s.destroy();
                i = null;
                s = null;
                t.prototype = null
            };
            i.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.TOP_LEFT = "topleft";
    t.TOP_RIGHT = "topright";
    t.BOTTOM_LEFT = "bottomleft";
    t.BOTTOM_RIGHT = "bottomright";
    t.PAN_START = "panStart";
    t.PAN_END = "panEnd";
    t.PAN = "pan";
    t.prototype = null;
    e.FWDNavigator = t
})(window);
(function (e) {
    var t = function (e, n, r, i, s, o, u, a) {
            var f = this;
            var l = t.prototype;
            this.imageSource_img = n;
            this.bk_do = null;
            this.mainAnimHolder_do = null;
            this.animHolder_do = null;
            this.imageAnimHolder_do = null;
            this.images_do = null;
            this.text_do = null;
            this.backgroundColor_str = a;
            this.fontColor_str = u;
            this.stageWidth;
            this.stageHeight;
            this.segmentWidth = r;
            this.segmentHeight = i;
            this.totalSegments = s;
            this.animDelay = o || 300;
            this.count = 0;
            this.delayTimerId_int;
            this.isShowed_bl = false;
            this.allowResize_bl = true;
            f.init = function () {
                f.setupMainContainers();
                if (FWDUtils.isMobile) {
                    f.screen.addEventListener("touchstart", f.windowTouchStartHandler)
                }
            };
            f.windowTouchStartHandler = function (e) {
                if (e.preventDefault) e.preventDefault()
            };
            f.setupMainContainers = function () {
                f.bk_do = new FWDSimpleDisplayObject("div");
                f.bk_do.setBkColor(f.backgroundColor_str);
                f.bk_do.setAlpha(0);
                f.bk_do.setResizableSizeAfterParent();
                f.addChild(f.bk_do);
                f.mainAnimHolder_do = new FWDDisplayObject("div");
                f.mainAnimHolder_do.setOverflow("visible");
                f.mainAnimHolder_do.setWidth(300);
                f.mainAnimHolder_do.setHeight(300);
                f.addChild(f.mainAnimHolder_do);
                f.animHolder_do = new FWDDisplayObject("div");
                f.animHolder_do.setOverflow("visible");
                f.animHolder_do.setWidth(300);
                f.animHolder_do.setHeight(300);
                f.mainAnimHolder_do.addChild(f.animHolder_do);
                f.imageAnimHolder_do = new FWDDisplayObject("div");
                f.imageAnimHolder_do.setWidth(f.segmentWidth);
                f.imageAnimHolder_do.setHeight(f.segmentHeight);
                f.animHolder_do.addChild(f.imageAnimHolder_do);
                f.images_do = new FWDSimpleDisplayObject("img");
                f.images_do.setScreen(f.imageSource_img);
                f.imageAnimHolder_do.addChild(f.images_do);
                f.text_do = new FWDSimpleDisplayObject("div");
                f.text_do.setDisplay("inline");
                f.text_do.getStyle().whiteSpace = "nowrap";
                f.text_do.getStyle().fontFamily = "Arial";
                f.text_do.getStyle().fontSize = "12px";
                f.text_do.getStyle().color = f.fontColor_str;
                f.text_do.getStyle().fontSmoothing = "antialiased";
                f.text_do.getStyle().webkitFontSmoothing = "antialiased";
                f.text_do.getStyle().textRendering = "optimizeLegibility";
                f.text_do.setY(f.segmentHeight + 2);
                f.animHolder_do.addChild(f.text_do)
            };
            f.positionAndResize = function () {
                if (e.stageWidth == f.stageWidth && e.stageHeight == f.stageHeight) return;
                if (!f.allowResize_bl) return;
                f.stageWidth = e.stageWidth;
                f.stageHeight = e.stageHeight;
                f.mainAnimHolder_do.setX(Math.round(f.stageWidth - f.segmentWidth) / 2);
                f.mainAnimHolder_do.setY(Math.round((f.stageHeight - f.segmentHeight) / 2) - 10);
                f.setWidth(f.stageWidth);
                f.setHeight(f.stageHeight)
            };
            f.updateText = function (e) {
                f.text_do.setInnerHTML(e);
                f.text_do.setX(Math.round((f.segmentWidth - f.text_do.getWidth()) / 2))
            };
            this.start = function () {
                clearInterval(this.delayTimerId_int);
                f.delayTimerId_int = setInterval(f.updatePreloader, f.animDelay)
            };
            this.stop = function () {
                clearInterval(f.delayTimerId_int)
            };
            this.updatePreloader = function () {
                f.count++;
                if (f.count > f.totalSegments - 1) f.count = 0;
                var e = f.count * f.segmentWidth;
                f.images_do.setX(-e)
            };
            f.show = function () {
                TweenMax.killTweensOf(f.bk_do);
                TweenMax.to(f.bk_do, 1, {
                    alpha: 1
                });
                TweenMax.to(f.animHolder_do, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                });
                f.isShowed_bl = true
            };
            f.hide = function (e) {
                if (f == null) return;
                TweenMax.killTweensOf(f);
                TweenMax.killTweensOf(f.animHolder_do);
                if (e) {
                    f.allowResize_bl = false;
                    TweenMax.to(f.bk_do, .8, {
                        alpha: 0,
                        delay: .6,
                        onComplete: f.onHideComplete
                    });
                    TweenMax.to(f.animHolder_do, .8, {
                        y: f.stageHeight / 2 + f.segmentHeight,
                        ease: Expo.easeInOut
                    })
                } else {
                    f.bk_do.setAlpha(0);
                    f.animHolder_do.setY(-f.stageHeight / 2 - f.segmentHeight)
                }
                f.isShowed_bl = false
            };
            f.onHideComplete = function () {
                f.stop();
                f.dispatchEvent(t.HIDE_COMPLETE)
            };
            f.destroy = function () {
                f.stop();
                if (FWDUtils.isMobile) {
                    f.screen.removeEventListener("touchstart", f.windowTouchStartHandler)
                }
                TweenMax.killTweensOf(f);
                TweenMax.killTweensOf(f.bk_do);
                TweenMax.killTweensOf(f.animHolder_do);
                f.bk_do.destroy();
                f.mainAnimHolder_do.destroy();
                f.animHolder_do.destroy();
                f.imageAnimHolder_do.destroy();
                f.images_do.destroy();
                f.text_do.destroy();
                f.imageSource_img = null;
                f.bk_do = null;
                f.mainAnimHolder_do = null;
                f.animHolder_do = null;
                f.imageAnimHolder_do = null;
                f.images_do = null;
                f.text_do = null;
                f.backgroundColor_str = null;
                f.fontColor_str = null;
                f.init = null;
                f.setupMainContainers = null;
                f.positionAndResize = null;
                f.update = null;
                f.show = null;
                f.hide = null;
                f.onHideComplete = null;
                e = null;
                n = null;
                a = null;
                u = null;
                f.setInnerHTML("");
                l.destroy();
                f = null;
                t.prototype = null
            };
            f.init()
        };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.HIDE_COMPLETE = "hideComplete";
    t.prototype = null;
    e.FWDPreloader = t
})(window);
(function (e) {
    var t = function (e, n, r) {
            var i = this;
            var s = t.prototype;
            this.nImg = e;
            this.sImg = n;
            this.dImg = r;
            this.n_sdo;
            this.s_sdo;
            this.d_sdo;
            this.toolTipLabel_str;
            this.totalWidth = this.nImg.width;
            this.totalHeight = this.nImg.height;
            this.isDisabled_bl = false;
            this.isSelectedFinal_bl = false;
            this.isActive_bl = false;
            this.isMobile_bl = FWDUtils.isMobile;
            this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
            i.init = function () {
                i.setupMainContainers()
            };
            i.setupMainContainers = function () {
                i.n_sdo = new FWDSimpleDisplayObject("img");
                i.n_sdo.setScreen(i.nImg);
                i.s_sdo = new FWDSimpleDisplayObject("img");
                i.s_sdo.setScreen(i.sImg);
                i.s_sdo.setAlpha(0);
                i.addChild(i.n_sdo);
                i.addChild(i.s_sdo);
                if (i.dImg) {
                    i.d_sdo = new FWDSimpleDisplayObject("img");
                    i.d_sdo.setScreen(i.dImg);
                    if (i.isMobile_bl) {
                        i.d_sdo.setX(-100)
                    } else {
                        i.d_sdo.setAlpha(0)
                    }
                    i.addChild(i.d_sdo)
                }
                i.setWidth(i.nImg.width);
                i.setHeight(i.nImg.height);
                i.setButtonMode(true);
                if (i.isMobile_bl) {
                    if (i.hasPointerEvent_bl) {
                        i.screen.addEventListener("MSPointerDown", i.onMouseDown);
                        i.screen.addEventListener("MSPointerUp", i.onClick);
                        i.screen.addEventListener("MSPointerOver", i.onMouseOver);
                        i.screen.addEventListener("MSPointerOut", i.onMouseOut)
                    } else {
                        i.screen.addEventListener("touchstart", i.onMouseDown)
                    }
                } else if (i.screen.addEventListener) {
                    i.screen.addEventListener("mouseover", i.onMouseOver);
                    i.screen.addEventListener("mouseout", i.onMouseOut);
                    i.screen.addEventListener("mousedown", i.onMouseDown);
                    i.screen.addEventListener("click", i.onClick)
                } else if (i.screen.attachEvent) {
                    i.screen.attachEvent("onmouseover", i.onMouseOver);
                    i.screen.attachEvent("onmouseout", i.onMouseOut);
                    i.screen.attachEvent("onmousedown", i.onMouseDown);
                    i.screen.attachEvent("onclick", i.onClick)
                }
            };
            i.onMouseOver = function (e) {
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                    if (i.isDisabled_bl || i.isSelectedFinal_bl) return;
                    i.dispatchEvent(t.MOUSE_OVER, {
                        e: e
                    });
                    TweenMax.killTweensOf(i.s_sdo);
                    TweenMax.to(i.s_sdo, .5, {
                        alpha: 1,
                        delay: .1,
                        ease: Expo.easeOut
                    })
                }
            };
            i.onMouseOut = function (e) {
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                    if (i.isDisabled_bl || i.isSelectedFinal_bl) return;
                    i.dispatchEvent(t.MOUSE_OUT, {
                        e: e
                    });
                    TweenMax.killTweensOf(i.s_sdo);
                    TweenMax.to(i.s_sdo, .5, {
                        alpha: 0,
                        ease: Expo.easeOut
                    })
                }
            };
            i.onClick = function (e) {
                if (i.isDisabled_bl || i.isSelectedFinal_bl) return;
                i.dispatchEvent(t.CLICK, {
                    e: e
                })
            };
            i.onMouseDown = function (e) {
                if (e.preventDefault) e.preventDefault();
                if (i.isDisabled_bl || i.isSelectedFinal_bl) return;
                i.dispatchEvent(t.MOUSE_DOWN, {
                    e: e
                })
            };
            i.setSelctedFinal = function () {
                i.isSelectedFinal_bl = true;
                TweenMax.killTweensOf(i.s_sdo);
                TweenMax.to(i.s_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                });
                i.setButtonMode(false)
            };
            i.setUnselctedFinal = function () {
                i.isSelectedFinal_bl = false;
                TweenMax.to(i.s_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                });
                i.setButtonMode(true)
            };
            this.disable = function () {
                if (i.isDisabled_bl) return;
                if (i.isMobile_bl) {
                    i.d_sdo.setX(0)
                } else {
                    TweenMax.killTweensOf(i.d_sdo);
                    TweenMax.to(i.d_sdo, .8, {
                        alpha: 1,
                        ease: Expo.easeOut
                    });
                    i.setButtonMode(false)
                }
                i.isDisabled_bl = true
            };
            this.enable = function () {
                if (!i.isDisabled_bl) return;
                if (i.isMobile_bl) {
                    i.d_sdo.setX(-100)
                } else {
                    TweenMax.killTweensOf(i.d_sdo);
                    TweenMax.to(i.d_sdo, .8, {
                        alpha: 0,
                        delay: .1,
                        ease: Expo.easeOut
                    });
                    i.setButtonMode(true)
                }
                i.isDisabled_bl = false
            };
            i.destroy = function () {
                if (i.isMobile_bl) {
                    if (i.hasPointerEvent_bl) {
                        i.screen.removeEventListener("MSPointerDown", i.onMouseDown);
                        i.screen.removeEventListener("MSPointerUp", i.onClick);
                        i.screen.removeEventListener("MSPointerOver", i.onMouseOver);
                        i.screen.removeEventListener("MSPointerOut", i.onMouseOut)
                    } else {
                        i.screen.removeEventListener("touchstart", i.onMouseDown)
                    }
                } else if (i.screen.addEventListener) {
                    i.screen.removeEventListener("mouseover", i.onMouseOver);
                    i.screen.removeEventListener("mouseout", i.onMouseOut);
                    i.screen.removeEventListener("mousedown", i.onMouseDown);
                    i.screen.removeEventListener("click", i.onClick)
                } else if (i.screen.detachEvent) {
                    i.screen.detachEvent("onmouseover", i.onMouseOver);
                    i.screen.detachEvent("onmouseout", i.onMouseOut);
                    i.screen.detachEvent("onmousedown", i.onMouseDown);
                    i.screen.detachEvent("onclick", i.onClick)
                }
                TweenMax.killTweensOf(i.s_sdo);
                i.n_sdo.destroy();
                i.s_sdo.destroy();
                if (i.d_sdo) {
                    TweenMax.killTweensOf(i.d_sdo);
                    i.d_sdo.destroy()
                }
                i.nImg = null;
                i.sImg = null;
                i.dImg = null;
                i.n_sdo = null;
                i.s_sdo = null;
                i.d_sdo = null;
                e = null;
                n = null;
                r = null;
                i.toolTipLabel_str = null;
                i.init = null;
                i.setupMainContainers = null;
                i.onMouseOver = null;
                i.onMouseOut = null;
                i.onClick = null;
                i.onMouseDown = null;
                i.setSelctedFinal = null;
                i.setUnselctedFinal = null;
                i.setInnerHTML("");
                s.destroy();
                i = null;
                s = null;
                t.prototype = null
            };
            i.init()
        };
    t.setPrototype = function () {
        t.prototype = null;
        t.prototype = new FWDDisplayObject("div")
    };
    t.CLICK = "onClick";
    t.MOUSE_OVER = "onMouseOver";
    t.MOUSE_OUT = "onMouseOut";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDSimpleButton = t
})(window);
(function (e) {
    var t = function (e, t, n, r) {
            var i = this;
            if (e == "div" || e == "img" || e == "canvas") {
                i.type = e
            } else {
                throw Error("Type is not valid! " + e)
            }
            this.style;
            this.screen;
            this.transform;
            this.position = t || "absolute";
            this.overflow = n || "hidden";
            this.display = r || "block";
            this.visible = true;
            this.buttonMode;
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
            this.rect;
            this.alpha = 1;
            this.innerHTML = "";
            this.opacityType = "";
            this.isHtml5_bl = false;
            this.hasTransform3d_bl = FWDUtils.hasTransform3d;
            this.hasTransform2d_bl = FWDUtils.hasTransform2d;
            if (FWDUtils.isFirefox) i.hasTransform3d_bl = false;
            if (FWDUtils.isFirefox) i.hasTransform2d_bl = false;
            this.hasBeenSetSelectable_bl = false;
            i.init = function () {
                i.setScreen()
            };
            i.getTransform = function () {
                var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
                var t;
                while (t = e.shift()) {
                    if (typeof i.screen.style[t] !== "undefined") {
                        return t
                    }
                }
                return false
            };
            i.getOpacityType = function () {
                var e;
                if (typeof i.screen.style.opacity != "undefined") {
                    e = "opacity"
                } else {
                    e = "filter"
                }
                return e
            };
            i.setScreen = function (e) {
                if (i.type == "img" && e) {
                    i.screen = e;
                    i.setMainProperties()
                } else {
                    i.screen = document.createElement(i.type);
                    i.setMainProperties()
                }
            };
            i.setMainProperties = function () {
                i.transform = i.getTransform();
                i.setPosition(i.position);
                i.setOverflow(i.overflow);
                i.opacityType = i.getOpacityType();
                if (i.opacityType == "opacity") i.isHtml5_bl = true;
                if (i.opacityType == "filter") i.screen.style.filter = "inherit";
                i.screen.style.left = "0px";
                i.screen.style.top = "0px";
                i.screen.style.margin = "0px";
                i.screen.style.padding = "0px";
                i.screen.style.maxWidth = "none";
                i.screen.style.maxHeight = "none";
                i.screen.style.border = "none";
                i.screen.style.lineHeight = "1";
                i.screen.style.backgroundColor = "transparent";
                i.screen.style.backfaceVisibility = "hidden";
                i.screen.style.webkitBackfaceVisibility = "hidden";
                i.screen.style.MozBackfaceVisibility = "hidden";
                i.screen.style.MozImageRendering = "optimizeSpeed";
                i.screen.style.WebkitImageRendering = "optimizeSpeed";
                if (e == "img") {
                    i.setWidth(i.screen.width);
                    i.setHeight(i.screen.height);
                    i.setSelectable(false)
                }
            };
            i.setSelectable = function (e) {
                if (!e) {
                    i.screen.style.userSelect = "none";
                    i.screen.style.MozUserSelect = "none";
                    i.screen.style.webkitUserSelect = "none";
                    i.screen.style.khtmlUserSelect = "none";
                    i.screen.style.oUserSelect = "none";
                    i.screen.style.msUserSelect = "none";
                    i.screen.msUserSelect = "none";
                    i.screen.ondragstart = function (e) {
                        return false
                    };
                    i.screen.onselectstart = function () {
                        return false
                    };
                    i.screen.ontouchstart = function (e) {
                        return false
                    };
                    i.screen.style.webkitTouchCallout = "none";
                    i.hasBeenSetSelectable_bl = true
                }
            };
            i.setBackfaceVisibility = function () {
                i.screen.style.backfaceVisibility = "visible";
                i.screen.style.webkitBackfaceVisibility = "visible";
                i.screen.style.MozBackfaceVisibility = "visible"
            };
            i.removeBackfaceVisibility = function () {
                i.screen.style.backfaceVisibility = "hidden";
                i.screen.style.webkitBackfaceVisibility = "hidden";
                i.screen.style.MozBackfaceVisibility = "hidden"
            };
            i.getScreen = function () {
                return i.screen
            };
            i.setVisible = function (e) {
                i.visible = e;
                if (i.visible == true) {
                    i.screen.style.visibility = "visible"
                } else {
                    i.screen.style.visibility = "hidden"
                }
            };
            i.getVisible = function () {
                return i.visible
            };
            i.setResizableSizeAfterParent = function () {
                i.screen.style.width = "100%";
                i.screen.style.height = "100%"
            };
            i.getStyle = function () {
                return i.screen.style
            };
            i.setOverflow = function (e) {
                i.overflow = e;
                i.screen.style.overflow = i.overflow
            };
            i.setPosition = function (e) {
                i.position = e;
                i.screen.style.position = i.position
            };
            i.setDisplay = function (e) {
                i.display = e;
                i.screen.style.display = i.display
            };
            i.setButtonMode = function (e) {
                i.buttonMode = e;
                if (i.buttonMode == true) {
                    i.screen.style.cursor = "pointer"
                } else {
                    i.screen.style.cursor = "default"
                }
            };
            i.setBkColor = function (e) {
                i.screen.style.backgroundColor = e
            };
            i.setInnerHTML = function (e) {
                i.innerHTML = e;
                i.screen.innerHTML = i.innerHTML
            };
            i.getInnerHTML = function () {
                return i.innerHTML
            };
            i.getRect = function () {
                return i.screen.getBoundingClientRect()
            };
            i.setAlpha = function (e) {
                i.alpha = e;
                if (i.opacityType == "opacity") {
                    i.screen.style.opacity = i.alpha
                } else if (i.opacityType == "filter") {
                    i.screen.style.filter = "alpha(opacity=" + i.alpha * 100 + ")";
                    i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(i.alpha * 100) + ")"
                }
            };
            i.getAlpha = function () {
                return i.alpha
            };
            i.getRect = function () {
                return i.screen.getBoundingClientRect()
            };
            i.getGlobalX = function () {
                return i.getRect().left
            };
            i.getGlobalY = function () {
                return i.getRect().top
            };
            i.setX = function (e) {
                i.x = e;
                if (i.hasTransform3d_bl) {
                    i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
                } else if (i.hasTransform2d_bl) {
                    i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
                } else {
                    i.screen.style.left = i.x + "px"
                }
            };
            i.getX = function () {
                return i.x
            };
            i.setY = function (e) {
                i.y = e;
                if (i.hasTransform3d_bl) {
                    i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
                } else if (i.hasTransform2d_bl) {
                    i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
                } else {
                    i.screen.style.top = i.y + "px"
                }
            };
            i.getY = function () {
                return i.y
            };
            i.setWidth = function (e) {
                i.w = e;
                if (i.type == "img") {
                    i.screen.width = i.w
                } else {
                    i.screen.style.width = i.w + "px"
                }
            };
            i.getWidth = function () {
                if (i.type == "div") {
                    if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                    return i.w
                } else if (i.type == "img") {
                    if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                    if (i.screen.width != 0) return i.screen.width;
                    return i._w
                } else if (i.type == "canvas") {
                    if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                    return i.w
                }
            };
            i.setHeight = function (e) {
                i.h = e;
                if (i.type == "img") {
                    i.screen.height = i.h
                } else {
                    i.screen.style.height = i.h + "px"
                }
            };
            i.getHeight = function () {
                if (i.type == "div") {
                    if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                    return i.h
                } else if (i.type == "img") {
                    if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                    if (i.screen.height != 0) return i.screen.height;
                    return i.h
                } else if (i.type == "canvas") {
                    if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                    return i.h
                }
            };
            i.disposeImage = function () {
                if (i.type == "img") i.screen.src = null
            };
            i.destroy = function () {
                if (i.hasBeenSetSelectable_bl) {
                    i.screen.ondragstart = null;
                    i.screen.onselectstart = null;
                    i.screen.ontouchstart = null
                }
                i.screen.removeAttribute("style");
                i.style = null;
                i.screen = null;
                i.transform = null;
                i.position = null;
                i.overflow = null;
                i.display = null;
                i.visible = null;
                i.buttonMode = null;
                i.x = null;
                i.y = null;
                i.w = null;
                i.h = null;
                i.rect = null;
                i.alpha = null;
                i.innerHTML = null;
                i.opacityType = null;
                i.isHtml5_bl = null;
                e = null;
                t = null;
                n = null;
                r = null;
                i.hasTransform3d_bl = null;
                i.hasTransform2d_bl = null;
                i = null
            };
            i.init()
        };
    e.FWDSimpleDisplayObject = t
})(window);
(function (e) {
    var t = function (e, t, n) {
            var r = this;
            if (e == "div" || e == "img" || e == "canvas") {
                r.type = e
            } else {
                throw Error("Type is not valid! " + e)
            }
            this.style;
            this.screen;
            this.transform;
            this.transformOrigin;
            this.position = t || "absolute";
            this.overflow = n || "hidden";
            this.visible = true;
            this.buttonMode;
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
            this.scale = 1;
            this.rect;
            this.alpha = 1;
            this.innerHTML = "";
            this.opacityType = "";
            this.isHtml5_bl = false;
            this.hasTransform3d_bl = FWDUtils.hasTransform3d;
            this.hasTransform2d_bl = FWDUtils.hasTransform2d;
            if (FWDUtils.isIE || FWDUtils.isFirefox) r.hasTransform3d_bl = false;
            this.hasBeenSetSelectable_bl = false;
            r.init = function () {
                r.setScreen()
            };
            r.getTransform = function () {
                var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
                var t;
                while (t = e.shift()) {
                    if (typeof r.screen.style[t] !== "undefined") {
                        return t
                    }
                }
                return undefined
            };
            r.getTransformOrigin = function () {
                var e = ["transformOrigin", "msTransformOrigin", "WebkitTransformOrigin", "MozTransformOrigin", "OTransformOrigin"];
                var t;
                while (t = e.shift()) {
                    if (typeof r.screen.style[t] !== "undefined") {
                        return t
                    }
                }
                return undefined
            };
            r.getOpacityType = function () {
                var e;
                if (typeof r.screen.style.opacity != "undefined") {
                    e = "opacity"
                } else {
                    e = "filter"
                }
                return e
            };
            r.setScreen = function (e) {
                if (r.type == "img" && e) {
                    r.screen = e;
                    r.setMainProperties()
                } else {
                    r.screen = document.createElement(r.type);
                    r.setMainProperties()
                }
            };
            r.setMainProperties = function () {
                r.transform = r.getTransform();
                r.transformOrigin = r.getTransformOrigin();
                r.setPosition(r.position);
                r.setOverflow(r.overflow);
                r.opacityType = r.getOpacityType();
                if (r.opacityType == "opacity") r.isHtml5_bl = true;
                if (r.opacityType == "filter") r.screen.style.filter = "inherit";
                r.screen.style.left = "0px";
                r.screen.style.top = "0px";
                r.screen.style.margin = "0px";
                r.screen.style.padding = "0px";
                r.screen.style.maxWidth = "none";
                r.screen.style.maxHeight = "none";
                r.screen.style.border = "none";
                r.screen.style.lineHeight = "1";
                r.screen.style.backgroundColor = "transparent";
                if (e == "img") {
                    r.setWidth(r.screen.width);
                    r.setHeight(r.screen.height);
                    r.setSelectable(false)
                }
            };
            r.setSelectable = function (e) {
                if (!e) {
                    r.screen.style.userSelect = "none";
                    r.screen.style.MozUserSelect = "none";
                    r.screen.style.webkitUserSelect = "none";
                    r.screen.style.khtmlUserSelect = "none";
                    r.screen.style.oUserSelect = "none";
                    r.screen.style.msUserSelect = "none";
                    r.screen.msUserSelect = "none";
                    r.screen.ondragstart = function (e) {
                        return false
                    };
                    r.screen.onselectstart = function () {
                        return false
                    };
                    r.screen.ontouchstart = function (e) {
                        return false
                    };
                    r.screen.style.webkitTouchCallout = "none";
                    r.hasBeenSetSelectable_bl = true
                }
            };
            r.setBackfaceVisibility = function () {
                r.screen.style.backfaceVisibility = "visible";
                r.screen.style.webkitBackfaceVisibility = "visible";
                r.screen.style.MozBackfaceVisibility = "visible"
            };
            r.removeBackfaceVisibility = function () {
                r.screen.style.backfaceVisibility = "hidden";
                r.screen.style.webkitBackfaceVisibility = "hidden";
                r.screen.style.MozBackfaceVisibility = "hidden"
            };
            r.getScreen = function () {
                return r.screen
            };
            r.setVisible = function (e) {
                r.visible = e;
                if (r.visible == true) {
                    r.screen.style.visibility = "visible"
                } else {
                    r.screen.style.visibility = "hidden"
                }
            };
            r.getVisible = function () {
                return r.visible
            };
            r.setResizableSizeAfterParent = function () {
                r.screen.style.width = "100%";
                r.screen.style.height = "100%"
            };
            r.getStyle = function () {
                return r.screen.style
            };
            r.setOverflow = function (e) {
                r.overflow = e;
                r.screen.style.overflow = r.overflow
            };
            r.setPosition = function (e) {
                r.position = e;
                r.screen.style.position = r.position
            };
            r.setDisplay = function (e) {
                r.display = e;
                r.screen.style.display = r.display
            };
            r.setButtonMode = function (e) {
                r.buttonMode = e;
                if (r.buttonMode == true) {
                    r.screen.style.cursor = "pointer"
                } else {
                    r.screen.style.cursor = "default"
                }
            };
            r.setBkColor = function (e) {
                r.screen.style.backgroundColor = e
            };
            r.setInnerHTML = function (e) {
                r.innerHTML = e;
                r.screen.innerHTML = r.innerHTML
            };
            r.getInnerHTML = function () {
                return r.innerHTML
            };
            r.getRect = function () {
                return r.screen.getBoundingClientRect()
            };
            r.setAlpha = function (e) {
                r.alpha = e;
                if (r.opacityType == "opacity") {
                    r.screen.style.opacity = r.alpha
                } else if (r.opacityType == "filter") {
                    r.screen.style.filter = "alpha(opacity=" + r.alpha * 100 + ")";
                    r.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(r.alpha * 100) + ")"
                }
            };
            r.getAlpha = function () {
                return r.alpha
            };
            r.getRect = function () {
                return r.screen.getBoundingClientRect()
            };
            r.getGlobalX = function () {
                return r.getRect().left
            };
            r.getGlobalY = function () {
                return r.getRect().top
            };
            r.setX = function (e) {
                r.x = e;
                if (r.hasTransform3d_bl) {
                    r.screen.style[r.transform] = "translate3d(" + r.x + "px," + r.y + "px,0) scale(" + r.scale + "," + r.scale + ")"
                } else {
                    r.screen.style.left = r.x + "px"
                }
            };
            r.getX = function () {
                return r.x
            };
            r.setY = function (e) {
                r.y = e;
                if (r.hasTransform3d_bl) {
                    r.screen.style[r.transform] = "translate3d(" + r.x + "px," + r.y + "px,0) scale(" + r.scale + "," + r.scale + ")"
                } else {
                    r.screen.style.top = r.y + "px"
                }
            };
            r.getY = function () {
                return r.y
            };
            r.setWidth = function (e) {
                r.w = e;
                if (r.type == "img") {
                    r.screen.width = r.w
                } else {
                    r.screen.style.width = r.w + "px"
                }
            };
            r.getWidth = function () {
                if (r.type == "div") {
                    if (r.screen.offsetWidth != 0) return r.screen.offsetWidth;
                    return r.w
                } else if (r.type == "img") {
                    if (r.screen.offsetWidth != 0) return r.screen.offsetWidth;
                    if (r.screen.width != 0) return r.screen.width;
                    return r._w
                } else if (r.type == "canvas") {
                    if (r.screen.offsetWidth != 0) return r.screen.offsetWidth;
                    return r.w
                }
            };
            r.setHeight = function (e) {
                r.h = e;
                if (r.type == "img") {
                    r.screen.height = r.h
                } else {
                    r.screen.style.height = r.h + "px"
                }
            };
            r.getHeight = function () {
                if (r.type == "div") {
                    if (r.screen.offsetHeight != 0) return r.screen.offsetHeight;
                    return r.h
                } else if (r.type == "img") {
                    if (r.screen.offsetHeight != 0) return r.screen.offsetHeight;
                    if (r.screen.height != 0) return r.screen.height;
                    return r.h
                } else if (r.type == "canvas") {
                    if (r.screen.offsetHeight != 0) return r.screen.offsetHeight;
                    return r.h
                }
            };
            this.setScale = function (e) {
                r.scale = e;
                if (r.hasTransform2d_bl) {
                    r.screen.style[r.transform] = "scale(" + r.scale + "," + r.scale + ")"
                } else {
                    r.screen.style[r.transform] = "translate3d(" + r.x + "px," + r.y + "px,0) scale(" + r.scale + "," + r.scale + ")"
                }
            };
            this.setTransformOrigin = function (e, t) {
                r.screen.style[r.transformOrigin] = e + "%" + " " + t + "%"
            };
            r.setPositionAndScale = function (e, t, n) {
                r.x = e;
                r.y = t;
                r.scale = n;
                r.screen.style[r.transform] = "translate3d(" + r.x + "px," + r.y + "px,0) scale(" + r.scale + "," + r.scale + ")"
            };
            r.disposeImage = function () {
                if (r.type == "img") r.screen.src = null
            };
            r.addChild = function (e) {
                if (r.contains(e)) {
                    r.children_ar.splice(FWDUtils.indexOfArray(r.children_ar, e), 1);
                    r.children_ar.push(e);
                    r.screen.appendChild(e.screen)
                } else {
                    r.children_ar.push(e);
                    r.screen.appendChild(e.screen)
                }
            };
            r.destroy = function () {
                if (r.hasBeenSetSelectable_bl) {
                    r.screen.ondragstart = null;
                    r.screen.onselectstart = null;
                    r.screen.ontouchstart = null
                }
                r.style = null;
                r.screen = null;
                r.transform = null;
                r.position = null;
                r.overflow = null;
                r.display = null;
                r.visible = null;
                r.buttonMode = null;
                r.x = null;
                r.y = null;
                r.w = null;
                r.h = null;
                r.rect = null;
                r.alpha = null;
                r.innerHTML = null;
                r.opacityType = null;
                r.isHtml5_bl = null;
                e = null;
                t = null;
                n = null;
                display = null;
                r.hasTransform3d_bl = null;
                r.hasTransform2d_bl = null;
                r = null
            };
            r.init()
        };
    e.FWDTransformDisplayObject = t
})(window);
(function (e) {
    function n() {
        var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"];
        var n;
        var r;
        while (n = e.shift()) {
            if (typeof t.dumy.style[n] !== "undefined") {
                t.dumy.style.position = "absolute";
                r = t.dumy.getBoundingClientRect().left;
                t.dumy.style[n] = "translate3d(500px, 0px, 0px)";
                r = Math.abs(t.dumy.getBoundingClientRect().left - r);
                if (r > 100 && r < 900) {
                    try {
                        document.documentElement.removeChild(t.dumy)
                    } catch (i) {}
                    return true
                }
            }
        }
        try {
            document.documentElement.removeChild(t.dumy)
        } catch (i) {}
        return false
    }
    function r() {
        var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"];
        var n;
        while (n = e.shift()) {
            if (typeof t.dumy.style[n] !== "undefined") {
                return true
            }
        }
        try {
            document.documentElement.removeChild(t.dumy)
        } catch (r) {}
        return false
    }
    var t = function () {};
    t.dumy = document.createElement("div");
    t.trim = function (e) {
        return e.replace(/\s/gi, "")
    };
    t.trimAndFormatUrl = function (e) {
        e = e.toLocaleLowerCase();
        e = e.replace(/ /g, "-");
        e = e.replace(/ä/g, "a");
        e = e.replace(/â/g, "a");
        e = e.replace(/â/g, "a");
        e = e.replace(/à/g, "a");
        e = e.replace(/è/g, "e");
        e = e.replace(/é/g, "e");
        e = e.replace(/ë/g, "e");
        e = e.replace(/ï/g, "i");
        e = e.replace(/î/g, "i");
        e = e.replace(/ù/g, "u");
        e = e.replace(/ô/g, "o");
        e = e.replace(/ù/g, "u");
        e = e.replace(/û/g, "u");
        e = e.replace(/ÿ/g, "y");
        e = e.replace(/ç/g, "c");
        e = e.replace(/œ/g, "ce");
        return e
    };
    t.splitAndTrim = function (e, n, r) {
        var i = e.split(",");
        var s = i.length;
        for (var o = 0; o < s; o++) {
            if (n) i[o] = t.trim(i[o]);
            if (r) i[o] = i[o].toLowerCase()
        }
        return i
    };
    t.indexOfArray = function (e, t) {
        var n = e.length;
        for (var r = 0; r < n; r++) {
            if (e[r] === t) return r
        }
        return -1
    };
    t.randomizeArray = function (e) {
        var t = [];
        var n = e.concat();
        var r = n.length;
        for (var i = 0; i < r; i++) {
            var s = Math.floor(Math.random() * n.length);
            t.push(n[s]);
            n.splice(s, 1)
        }
        return t
    };
    t.parent = function (e, t) {
        if (t === undefined) t = 1;
        while (t-- && e) e = e.parentNode;
        if (!e || e.nodeType !== 1) return null;
        return e
    };
    t.sibling = function (e, t) {
        while (e && t !== 0) {
            if (t > 0) {
                if (e.nextElementSibling) {
                    e = e.nextElementSibling
                } else {
                    for (var e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
                }
                t--
            } else {
                if (e.previousElementSibling) {
                    e = e.previousElementSibling
                } else {
                    for (var e = e.previousSibling; e && e.nodeType !== 1; e = e.previousSibling);
                }
                t++
            }
        }
        return e
    };
    t.getChildAt = function (e, n) {
        var r = t.getChildren(e);
        if (n < 0) n += r.length;
        if (n < 0) return null;
        return r[n]
    };
    t.getChildById = function (e) {
        return document.getElementById(e) || undefined
    };
    t.getChildren = function (e, t) {
        var n = [];
        for (var r = e.firstChild; r != null; r = r.nextSibling) {
            if (t) {
                n.push(r)
            } else if (r.nodeType === 1) {
                n.push(r)
            }
        }
        return n
    };
    t.getChildrenFromAttribute = function (e, n, r) {
        var i = [];
        for (var s = e.firstChild; s != null; s = s.nextSibling) {
            if (r && t.hasAttribute(s, n)) {
                i.push(s)
            } else if (s.nodeType === 1 && t.hasAttribute(s, n)) {
                i.push(s)
            }
        }
        return i.length == 0 ? undefined : i
    };
    t.getChildFromNodeListFromAttribute = function (e, n, r) {
        for (var i = e.firstChild; i != null; i = i.nextSibling) {
            if (r && t.hasAttribute(i, n)) {
                return i
            } else if (i.nodeType === 1 && t.hasAttribute(i, n)) {
                return i
            }
        }
        return undefined
    };
    t.getAttributeValue = function (e, n) {
        if (!t.hasAttribute(e, n)) return undefined;
        return e.getAttribute(n)
    };
    t.hasAttribute = function (e, t) {
        if (e.hasAttribute) {
            return e.hasAttribute(t)
        } else {
            var n = e.attributes[t];
            return n ? true : false
        }
    };
    t.insertNodeAt = function (e, n, r) {
        var i = t.children(e);
        if (r < 0 || r > i.length) {
            throw new Error("invalid index!")
        } else {
            e.insertBefore(n, i[r])
        }
    };
    t.hasCanvas = function () {
        return Boolean(document.createElement("canvas"))
    };
    t.hitTest = function (e, t, n) {
        var r = false;
        if (!e) throw Error("Hit test target is null!");
        var i = e.getBoundingClientRect();
        if (t >= i.left && t <= i.left + (i.right - i.left) && n >= i.top && n <= i.top + (i.bottom - i.top)) return true;
        return false
    };
    t.getScrollOffsets = function () {
        if (e.pageXOffset != null) return {
            x: e.pageXOffset,
            y: e.pageYOffset
        };
        if (document.compatMode == "CSS1Compat") {
            return {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            }
        }
    };
    t.getViewportSize = function () {
        if (t.isMobile) return {
            w: e.innerWidth,
            h: e.innerHeight
        };
        return {
            w: document.documentElement.clientWidth || e.innerWidth,
            h: document.documentElement.clientHeight || e.innerHeight
        }
    };
    t.getViewportMouseCoordinates = function (e) {
        var n = t.getScrollOffsets();
        if (e.touches) {
            return {
                screenX: e.touches[0] == undefined ? e.touches.pageX - n.x : e.touches[0].pageX - n.x,
                screenY: e.touches[0] == undefined ? e.touches.pageY - n.y : e.touches[0].pageY - n.y
            }
        }
        return {
            screenX: e.clientX == undefined ? e.pageX - n.x : e.clientX,
            screenY: e.clientY == undefined ? e.pageY - n.y : e.clientY
        }
    };
    t.hasPointerEvent = function () {
        return Boolean(e.navigator.msPointerEnabled)
    }();
    t.isMobile = function () {
        if (t.hasPointerEvent && navigator.msMaxTouchPoints > 1) return true;
        var e = ["android", "webos", "iphone", "ipad", "blackberry"];
        for (i in e) {
            if (navigator.userAgent.toLowerCase().indexOf(e[i].toLowerCase()) != -1) {
                return true
            }
        }
        return false
    }();
    t.isAndroid = function () {
        return navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1
    }();
    t.isChrome = function () {
        return navigator.userAgent.toLowerCase().indexOf("chrome") != -1
    }();
    t.isSafari = function () {
        return navigator.userAgent.toLowerCase().indexOf("safari") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1
    }();
    t.isOpera = function () {
        return navigator.userAgent.toLowerCase().indexOf("opera") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1
    }();
    t.isFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf("firefox") != -1
    }();
    t.isIE = function () {
        return navigator.userAgent.toLowerCase().indexOf("msie") != -1;
    }();
    t.isIEAndLessThen9 = function () {
        return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
    }();
    t.isApple = function () {
        return navigator.appVersion.toLowerCase().indexOf("mac") != -1;
    }();
    t.hasFullScreen = function () {
        return t.dumy.requestFullScreen || t.dumy.mozRequestFullScreen || t.dumy.webkitRequestFullScreen || t.dumy.msieRequestFullScreen
    }();
    t.onReady = function (e) {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                document.documentElement.appendChild(t.dumy);
                t.hasTransform3d = n();
                t.hasTransform2d = r();
                e()
            })
        } else {
            document.onreadystatechange = function () {
                document.documentElement.appendChild(t.dumy);
                t.hasTransform3d = n();
                t.hasTransform2d = r();
                if (document.readyState == "complete") e()
            }
        }
    };
    t.disableElementSelection = function (e) {
        try {
            e.style.userSelect = "none"
        } catch (e) {}
        try {
            e.style.MozUserSelect = "none"
        } catch (e) {}
        try {
            e.style.webkitUserSelect = "none"
        } catch (e) {}
        try {
            e.style.khtmlUserSelect = "none"
        } catch (e) {}
        try {
            e.style.oUserSelect = "none"
        } catch (e) {}
        try {
            e.style.msUserSelect = "none"
        } catch (e) {}
        try {
            e.msUserSelect = "none"
        } catch (e) {}
        e.onselectstart = function () {
            return false
        }
    };
    t.getUrlArgs = function (t) {
        var n = {};
        var r = t.substr(t.indexOf("?") + 1) || location.search.substring(1);
        var i = r.split("&");
        for (var s = 0; s < i.length; s++) {
            var o = i[s].indexOf("=");
            var u = i[s].substring(0, o);
            var a = i[s].substring(o + 1);
            a = decodeURIComponent(a);
            n[u] = a
        }
        return n
    };
    t.validateEmail = function (e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {
            return true
        }
        return false
    };
    t.resizeDoWithLimit = function (e, t, n, r, i, s, o, u, a, f, l, c, h) {
        var t = t - s;
        var n = n - o;
        var p = t / r;
        var d = n / i;
        var v = 0;
        if (p <= d) {
            v = p
        } else if (p >= d) {
            v = d
        }
        var m = Math.round(r * v);
        var g = Math.round(i * v);
        var y = Math.floor((t - r * v) / 2 + u);
        var b = Math.floor((n - i * v) / 2 + a);
        if (f) {
            TweenMax.to(e, l, {
                x: y,
                y: b,
                w: m,
                h: g,
                delay: c,
                ease: h
            })
        } else {
            e.x = y;
            e.y = b;
            e.w = m;
            e.h = g
        }
    };
    e.FWDUtils = t
})(window)