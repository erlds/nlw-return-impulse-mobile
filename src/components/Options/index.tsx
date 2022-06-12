import React from 'react';
import { View,Text } from 'react-native';

import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType} from '../Widget'

import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';

interface Props{
  onFeedbackTypeChanged: ( feedbackType: FeedbackType) => void;
}

export function Options({onFeedbackTypeChanged}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu Feedback
      </Text>

      <View style={styles.options}>
          <Option
            key={'BUG'}
            title={feedbackTypes.BUG.title}
            image={feedbackTypes.BUG.image}
            onPress={() => onFeedbackTypeChanged('BUG' as FeedbackType)}
          />
          <Option
            key={'IDEA'}
            title={feedbackTypes.IDEA.title}
            image={feedbackTypes.IDEA.image}
            onPress={() => onFeedbackTypeChanged('IDEA' as FeedbackType)}
          />
          <Option
            key={'OTHER'}
            title={feedbackTypes.OTHER.title}
            image={feedbackTypes.OTHER.image}
            onPress={() => onFeedbackTypeChanged('OTHER' as FeedbackType)}
          />
      </View>
      <Copyright/>
    </View>
  );
}