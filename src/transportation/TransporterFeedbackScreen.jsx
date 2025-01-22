import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';


const TransporterFeedbackScreen = ({ route }) => {
  const { t } = useTranslation();

  const { feedback } = route.params || { feedback: [] };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('feedbackScreen.heading')}</Text>
      <FlatList
        data={feedback}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
             <Text style={styles.label}>{t('feedbackScreen.reviewer')}: {item.reviewer}</Text>
             <Text style={styles.label}>{t('feedbackScreen.rating')}: {item.rating}</Text>
             <Text style={styles.label}>{t('feedbackScreen.comment')}: {item.comment}</Text>
             </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 3 },
  label: { fontSize: 16, marginBottom: 5 },
});

export default TransporterFeedbackScreen;
