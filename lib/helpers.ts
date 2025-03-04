import { detect } from "detect-browser";
import { LAMDI_API_BASE_1, LAMDI_API_BASE_1_HEADERS } from "./constants";
import { v4 } from "uuid";
import axios from "axios";
import JSZip from "jszip";
import { saveAs } from "file-saver";

/**
 * this function will convert single digit number into 2 digit number
 * @param num number
 * @returns formatted string 2 digit number
 */
export function formatNumber2Digit(num: number): string {
  num = Number(num);
  // Check if the number is a single digit (0-9)
  if (num >= 0 && num <= 9) {
    // Prefix with '0' and convert back to string
    return "0" + num.toString();
  } else {
    // Otherwise, return the number as a string
    return num.toString();
  }
}

/**
 * @returns {latitude, longitude}
 */
export const getUserLocation = (): Promise<{
  latitude: number;
  longitude: number;
} | null> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error: GeolocationPositionError) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

/**
 * @param lat => user latitute, default will be null
 * @param lng => user longitude, default will be null
 * @returns visitor object
 */
export const getVisitor: any = async (lat = null, lng = null) => {
  const browser: any = detect();
  const v_id = v4();
  try {
    const { data } = await axios({
      url: `${LAMDI_API_BASE_1}/api/visitors?lat=${lat}&lng=${lng}&access_platform=web&visitor_id=${v_id}&browser=${browser.name}&browser_version=${browser.version}&platform=${browser.os}&device=${browser.type}`,
      method: "GET",
      secure: true,
      headers: LAMDI_API_BASE_1_HEADERS,
    });
    if (data.error) {
      throw new Error(
        JSON.stringify({
          message: data.message,
        })
      );
    }
    return data;
  } catch (e) {
    console.log("error while fetching visitor", e.message);
    throw e;
  }
};

export const getAgentsData = async () => {
  const response = await fetch("/assets/temp/json/hero2400.json");
  const result = await response.json();
  return result;
};

export const getReelsData = async () => {
  const response = await fetch("/assets/temp/json/reels.json");
  const result = await response.json();
  return result;
};

// debouce function

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export const downloadImagesAsZip = async (imageUrls: string[]) => {
  const zip = new JSZip();

  // Loop through each image URL
  for (let i = 0; i < imageUrls.length; i++) {
    const imageUrl = imageUrls[i];
    console.log("download..", imageUrl);

    // Fetch the image as a Blob
    const response = await fetch(`https://corsproxy.io/?${imageUrl}`);
    const imageBlob = await response.blob();

    // Add the image to the ZIP file with a unique filename
    const imageFilename = `image${i + 1}.jpg`; // You can adjust the extension based on your images
    zip.file(imageFilename, imageBlob);
  }

  // Generate the ZIP file and trigger the download
  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, "images.zip"); // This will download the ZIP file
  });
};
