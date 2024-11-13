import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native-paper";

const GooglePlaceImage = ({ placeName, style }) => {
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPlaceImage = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
          placeName
        )}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const placeId = data.results[0].place_id;

        // Fetch place details to get photo_reference
        const detailsResponse = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
        );
        const detailsData = await detailsResponse.json();

        if (detailsData.result.photos && detailsData.result.photos.length > 0) {
          const photoReference = detailsData.result.photos[0].photo_reference;
          const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${photoReference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;
          setImageUri(imageUrl);
        }
      }
    } catch (error) {
      console.error("Error fetching place image:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaceImage();
  }, [placeName]);

  return (
    <View style={[styles.container, style]}>
      {loading ? (
        <ActivityIndicator animating={loading} size="large" />
      ) : (
        <Image
          source={
            imageUri ? { uri: imageUri } : require("../../assets/map.jpg")
          }
          style={[styles.image, style]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

GooglePlaceImage.propTypes = {
  placeName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default GooglePlaceImage;
