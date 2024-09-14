import { useState } from "react";
import { StateStore } from "../utils/stateContainer";

export default function ReactCount() {
  const [state] = StateStore();
  const [reactCount, setReactCount] = useState<number>(2);
  const [reacted, setReacted] = useState<boolean>(false);

  const handleReact = () => {
    if (!reacted) {
      setReactCount(reactCount + 1);
      setReacted(true);
    } else {
      setReactCount(reactCount - 1);
      setReacted(false);
    }
  };

  return (
    //suppose to be disabling the button but Im having trouble with hydration
    !state.firstLoad && (
      <div>
        <button
          className="button disabled:cursor-not-allowed"
          onClick={handleReact}
        >
          {reacted ? (
            <svg
              height="36px"
              width="36px"
              viewBox="0 0 493.70999 493.70999"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs id="defs8" />
              <circle
                style={{ fill: "#f7b239" }}
                cx="246.855"
                cy="246.855"
                r="246.855"
                id="circle1"
              />
              <path
                style={{ fill: "#e09b2d" }}
                d="M 117.15799,376.545 C 28.355991,287.743 21.358991,148.119 96.158991,51.303998 c -8.286,6.401 -16.258,13.399 -23.858,20.999 -96.401,96.401002 -96.401,252.698002 0,349.099002 96.400999,96.401 252.697999,96.401 349.098999,0 7.599,-7.599 14.597,-15.573 20.999,-23.858 -96.814,74.799 -236.44,67.802 -325.241,-20.999 z"
                id="path1"
              />
              <path
                style={{ fill: "#ffffff" }}
                d="m 122.41699,255.464 h 248.868 c 0,13.968 -2.306,27.4 -6.551,39.941 h -235.766 c -4.245,-12.541 -6.551,-25.972 -6.551,-39.941 z"
                id="path2"
              />
              <path
                style={{ fill: "#a81004" }}
                d="m 128.96799,295.405 h 235.765 c -8.369,24.716 -24.289,45.931 -45.016,60.924 -8.71,-14.676 -24.716,-24.509 -43.027,-24.509 -11.187,0 -21.508,3.672 -29.84,9.882 -8.332,-6.21 -18.665,-9.882 -29.852,-9.882 -18.299,0 -34.317,9.833 -43.015,24.509 -20.726,-14.993 -36.646,-36.208 -45.015,-60.924 z"
                id="path3"
              />
              <path
                style={{ fill: "#f95428" }}
                d="m 276.69099,331.82 c 18.311,0 34.317,9.833 43.027,24.509 -20.483,14.834 -45.662,23.569 -72.867,23.569 -27.205,0 -52.384,-8.735 -72.867,-23.569 8.698,-14.676 24.716,-24.509 43.015,-24.509 11.187,0 21.52,3.672 29.852,9.882 8.332,-6.21 18.653,-9.882 29.84,-9.882 z"
                id="path4"
              />

              <path
                d="m 371.28499,246.315 h -248.868 c -5.053,0 -9.15,4.097 -9.15,9.15 0,14.662 2.367,29.087 7.034,42.876 8.934,26.382 25.643,48.999 48.314,65.4 22.86,16.557 49.914,25.309 78.235,25.309 28.32,0 55.373,-8.752 78.23,-25.305 22.676,-16.405 39.386,-39.02 48.319,-65.402 v 0 c 4.667,-13.789 7.034,-28.214 7.034,-42.875 0.002,-5.057 -4.095,-9.153 -9.148,-9.153 z m -9.508,18.299 c -0.576,7.338 -1.854,14.575 -3.809,21.642 h -222.235 c -1.954,-7.067 -3.233,-14.303 -3.809,-21.642 z m -174.704,89.439 c 7.649,-8.21 18.499,-13.083 29.926,-13.083 8.87,0 17.302,2.79 24.385,8.067 3.244,2.417 7.691,2.417 10.934,0 7.082,-5.279 15.509,-8.067 24.372,-8.067 11.421,0 22.272,4.871 29.932,13.085 -17.972,10.947 -38.452,16.692 -59.772,16.692 -21.32,0.002 -41.802,-5.745 -59.777,-16.694 z m 134.454,-10.762 c -11.137,-12.9 -27.533,-20.621 -44.838,-20.621 -10.623,0 -20.819,2.77 -29.84,8.066 -9.021,-5.295 -19.221,-8.066 -29.852,-8.066 -17.311,0 -33.707,7.722 -44.829,20.617 -12.623,-10.71 -22.68,-23.855 -29.665,-38.733 h 208.694 c -6.985,14.88 -17.043,28.025 -29.67,38.737 z"
                id="path6"
              />
              <path
                d="m 197.82299,200.732 c 0.827,-3.622 -0.617,-7.386 -3.657,-9.523 l -54.287,-38.174 c -4.133,-2.906 -9.84,-1.913 -12.747,2.221 -2.906,4.133 -1.912,9.84 2.222,12.747 l 35.988,25.306 -75.522999,12.47 c -4.986,0.823 -8.36,5.532 -7.537,10.518 0.739,4.481 4.619,7.66 9.017,7.66 0.495,0 0.997,-0.04 1.502,-0.123 l 97.594999,-16.113 c 3.664,-0.605 6.6,-3.367 7.427,-6.989 z"
                id="path7"
              />
              <path
                d="m 403.88399,205.78 -75.524,-12.469 35.988,-25.306 c 4.133,-2.907 5.129,-8.614 2.222,-12.747 -2.907,-4.134 -8.615,-5.129 -12.747,-2.222 l -54.287,38.174 c -3.039,2.137 -4.484,5.9 -3.657,9.523 0.827,3.623 3.764,6.384 7.429,6.989 l 97.595,16.113 c 0.505,0.083 1.006,0.123 1.502,0.123 4.397,0 8.276,-3.179 9.017,-7.66 0.823,-4.986 -2.552,-9.695 -7.538,-10.518 z"
                id="path8"
              />
            </svg>
          ) : (
            <svg
              height="36"
              width="36"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors hover:text-zinc-300"
              fill="currentColor"
            >
              <g style={{ display: "inline" }}>
                <path
                  d="M354.541 320.305a114.568 114.568 0 0 0 5.806-10.822H151.652a114.254 114.254 0 0 0 20.687 30.254c2.826 2.97 5.821 5.8 8.977 8.477a59.398 59.398 0 0 1 9.263-8.66 59.718 59.718 0 0 1 16.707-8.832 58.898 58.898 0 0 1 12.42-2.767 58.308 58.308 0 0 1 6.44-.357c2.657 0 5.289.174 7.88.516A58.43 58.43 0 0 1 256 335.663c9.02-5.296 19.217-8.065 29.84-8.065 2.163 0 4.313.121 6.439.357a58.884 58.884 0 0 1 12.416 2.767 59.695 59.695 0 0 1 11.466 5.304 59.64 59.64 0 0 1 14.517 12.192 115.913 115.913 0 0 0 8.982-8.479 114.236 114.236 0 0 0 14.882-19.434zM370.928 269.542H141.071a114.879 114.879 0 0 0 3.81 21.64h222.238a114.813 114.813 0 0 0 3.809-21.64z"
                  style={{ display: "inline" }}
                  transform="matrix(.99998 0 0 .99998 .001 0)"
                ></path>
                <path
                  d="M256.004 0A256.004 256.004 0 0 0-.001 256.005 256.004 256.004 0 0 0 256.004 512.01a256.004 256.004 0 0 0 256.004-256.005A256.004 256.004 0 0 0 256.004.001ZM137.976 157.122a9.459 9.459 0 0 1 7.087 1.586l56.298 39.589a9.49 9.49 0 0 1-3.91 17.125L96.238 232.13a9.58 9.58 0 0 1-1.556.128c-4.561 0-8.584-3.297-9.351-7.944a9.488 9.488 0 0 1 7.816-10.908l78.321-12.931-37.322-26.245c-4.286-3.015-5.317-8.934-2.303-13.22a9.46 9.46 0 0 1 6.133-3.89zm236.046 0a9.474 9.474 0 0 1 6.134 3.89v.001c3.015 4.287 1.982 10.205-2.304 13.22l-37.32 26.243 78.32 12.93a9.461 9.461 0 0 1 6.168 3.837 9.461 9.461 0 0 1 1.649 7.073c-.768 4.647-4.79 7.943-9.35 7.943a9.613 9.613 0 0 1-1.558-.127l-101.213-16.71a9.486 9.486 0 0 1-7.705-7.249 9.49 9.49 0 0 1 3.794-9.875l56.298-39.588a9.455 9.455 0 0 1 7.087-1.587zm-242.457 94.12h248.872c5.053 0 9.148 4.096 9.148 9.153 0 14.661-2.367 29.087-7.034 42.876-8.933 26.382-25.644 48.998-48.32 65.404-22.857 16.553-49.91 25.304-78.231 25.304-28.322 0-55.376-8.752-78.237-25.31-11.335-8.2-21.18-17.954-29.308-28.956a132.323 132.323 0 0 1-10.876-17.402 134.06 134.06 0 0 1-8.13-19.043c-4.667-13.789-7.034-28.213-7.034-42.875a9.15 9.15 0 0 1 9.15-9.15z"
                  style={{ display: "inline" }}
                  transform="matrix(.99998 0 0 .99998 .001 0)"
                ></path>
                <path
                  d="M226.148 345.899c-11.427 0-22.277 4.872-29.926 13.083 17.975 10.949 38.458 16.696 59.778 16.694 21.32 0 41.8-5.745 59.773-16.692-7.66-8.214-18.511-13.085-29.932-13.085-8.863 0-17.291 2.787-24.373 8.066a9.15 9.15 0 0 1-10.934 0c-7.083-5.277-15.515-8.066-24.386-8.066z"
                  style={{ display: "inline" }}
                  transform="matrix(.99998 0 0 .99998 0 0)"
                ></path>
              </g>
            </svg>
          )}
        </button>
        <div className="text-sm select-none mt-1 text-zinc-300 text-center">
          {reactCount}
        </div>
      </div>
    )
  );
}
