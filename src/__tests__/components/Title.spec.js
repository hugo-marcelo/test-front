import Title from '~/components/Title';

describe('Title Component', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Title);

    expect(wrapper).toMatchSnapshot();
  });
});
