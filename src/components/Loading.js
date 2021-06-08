import React from "react";
import { DisappearedLoading } from "react-loadingg";

export default function Loading(props) {
    return (
        <div
            className={
                props.display === "block" ? `loading loading-active` : "loading"
            }
            style={{
                display: props.display,
            }}
        >
            <DisappearedLoading />
        </div>
    );
}
