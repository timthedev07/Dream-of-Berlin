import React from "react";

export default function MacosLikeWindow({ title, children, width, height }) {
    return (
        <div
            style={{ width: width, height: height }}
            className="mac-os-window mac-os-window-active"
        >
            <div className="titlebar">
                <div className="mac-window-buttons">
                    <div className="mac-window-button mac-window-button-close"></div>
                    <div className="mac-window-button mac-window-button-minimize"></div>
                    <div className="mac-window-button mac-window-button-zoom"></div>
                </div>
            </div>
            <div className="mac-window-content">{children}</div>
        </div>
    );
}
