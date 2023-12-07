import Badge from '../components/Badge';
import rewardTypes from '../data/rewardTypes';

const getBadgeStyle = (reward) => {
  let sizeClass = '';

  // Example using object mapping for custom styles
  const sizeMapping = {
    Drinks: 'badge-large bg-blue-500',
    Food: 'badge-medium bg-green-500',
    Discounts: 'badge-small bg-red-500',
    // Add more mappings as needed
  };

  sizeClass = sizeMapping[reward.title] || 'badge-default';

  return sizeClass;
};

const TestPage = () => {
  return (
    <div>
      <Badge rewardTypes={rewardTypes} badgeStyle={getBadgeStyle} />
    </div>
  );
};

export default TestPage;
