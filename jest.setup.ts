jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({setOptions: jest.fn()}),
    createNavigatorFactory: jest.fn(),
    DefaultTheme: jest.fn(),
    Theme: jest.fn(),
    useRoute: () => ({
      params: {
        job_id: '1',
        job_pool_id: '1',
      },
    }),
    useFocusEffect: jest.fn(),
  };
});

export {};
