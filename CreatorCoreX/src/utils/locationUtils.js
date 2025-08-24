// Location utilities for distance calculation and geolocation
export const getLocationPermission = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  });
};

// Haversine formula to calculate distance between two points
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 3959; // Earth's radius in miles (use 6371 for kilometers)
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
};

const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

// Get city name from coordinates using reverse geocoding
export const getCityFromCoordinates = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const data = await response.json();
    return `${data.city}, ${data.principalSubdivision}`;
  } catch (error) {
    console.error('Error getting city name:', error);
    return 'Unknown Location';
  }
};

// Filter creators by distance
export const filterCreatorsByDistance = (creators, userLocation, maxDistance = 50) => {
  return creators
    .map(creator => ({
      ...creator,
      distance: calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        creator.location.latitude,
        creator.location.longitude
      )
    }))
    .filter(creator => creator.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance);
};
