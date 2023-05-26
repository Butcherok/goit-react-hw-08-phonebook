import PropTypes from 'prop-types';

export default function ContactItem({ name, number}) {

  return (
    <>
      <p>{name}: </p>
      <p>{number}</p>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
