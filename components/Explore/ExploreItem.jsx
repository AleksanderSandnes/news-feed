import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { colors } from '../../../config/theme';
import StyledText from '../Texts/StyledText';

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginRight: 20,
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    title: {
        fontSize: 19,
    }
});

function ExploreItem({ image, title, avatar, author, date, ...props }) {
    const activeColors = colors;

    return (
        <TouchableOpacity
            style={[styles.container]}
            {...props}
        >
            <Image source={image} style={styles.image} />

            <StyledText
                style={[styles.title]}
                bold
            >
                {title}
            </StyledText>
        </TouchableOpacity>
    );
}

export default ExploreItem;