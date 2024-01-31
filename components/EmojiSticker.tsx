import { View, Image, ImageProps } from 'react-native';

export default function EmojiSticker({ imageSize, stickerSource }: { imageSize: number, stickerSource: Readonly<ImageProps> }) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
