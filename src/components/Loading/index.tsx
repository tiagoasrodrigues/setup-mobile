import { ActivityIndicator, Text, View } from 'react-native';

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#7c3aed"/>
    </View>
  );
}