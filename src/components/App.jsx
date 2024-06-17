import ProfileCard from './ProfileCard/ProfileCard';
import user from '../json/user.json'
import statistic from '../json/statistic.json'
import friends from '../json/friends.json'
import transactions from '../json/transactions.json'
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section>
        
        <ProfileCard
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistic
          statisticList={statistic}
        />
      </Section>

      <Section>
        <FriendList
          friends={friends}
        />
      </Section>

      <Section>
        <TransactionHistory
          items={transactions}
        />
      </Section>
    </>
  );
};
