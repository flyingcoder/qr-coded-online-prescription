export default {
  name: 'chatbox',
  layout: 'search-notification',
  data() {
    return {
      message: false,
      doctor_messages: [
        {
          id: 1,
          time: '11: 03 PM',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          time: '11: 03 PM',
          content:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          id: 3,
          time: '11: 03 PM',
          content:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          id: 4,
          time: '11: 03 PM',
          content: 'Excepteur sint occaecat cupidatat non proident',
        },
      ],
      patient_messages: [
        {
          id: 1,
          time: '11: 03 PM',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          time: '11: 03 PM',
          content:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          id: 3,
          time: '11: 03 PM',
          content:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          id: 4,
          time: '11: 03 PM',
          content: 'Excepteur sint occaecat cupidatat non proident',
        },
      ],
    }
  },
}
