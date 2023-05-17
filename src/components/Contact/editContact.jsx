// import { useShowModalContext } from 'components/modal/modal';
// import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// import { useEditContactMutation } from 'redux';

// const EditContact = ({ contactId, name, number }) => {
//   const [editContact, { isSuccess, error }] = useEditContactMutation();
//   const { setShowEditContact } = useShowModalContext();

//   const [name, setName] = useState([name]);
//   const [number, setNumber] = useState([number]);

//   onSubmit: async values => {
//     if (values.name.trim() === '' || values.number.trim() === '') return;

//     const newName = values.name.trim();
//     const newNumber = values.number.trim();
//     const createObj = ({ id, name, number, newName, newNumber }) => {
//       const obj = {};
//       obj.id = id;
//       if (name !== newName && newName) obj.name = newName;
//       if (number !== newNumber && newNumber) obj.number = newNumber;
//       return obj;
//     };

//     await editContact(
//       createObj({
//         newName,
//         newNumber,
//         id: contactId,
//         name,
//         number,
//       })
//     );

//     resetForm();
//     setTimeout(() => setShowEditContact(false));
//   };

//   useEffect(() => {
//     if (isSuccess) toast.success('Contact successfully edited!');
//     if (error) toast.error(error);
//   }, [isSuccess, error]);

//   return (
//     <>
//       <h2>Edit contact</h2>
//       <div>
//         <Typography sx={{ display: 'flex', mb: 1 }} variant="body1">
//           <PersonIcon sx={{ mr: 2 }} />
//           {name}
//         </Typography>
//         <Typography sx={{ display: 'flex' }} variant="body1">
//           <PhoneIcon sx={{ mr: 2 }} />
//           {number}
//         </Typography>
//       </div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           id="name"
//           label="New name"
//           variant="outlined"
//           sx={{ width: 1, mb: 2 }}
//           name="name"
//           type="text"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//           autoComplete="off"
//         />
//         <TextField
//           id="number"
//           label="New phone number"
//           variant="outlined"
//           sx={{ width: 1, mb: 2 }}
//           name="number"
//           type="tel"
//           value={formik.values.number}
//           onChange={formik.handleChange}
//           error={formik.touched.number && Boolean(formik.errors.number)}
//           helperText={formik.touched.number && formik.errors.number}
//           autoComplete="off"
//         />
//         <Button
//           type="submit"
//           disabled={!(formik.values.name || formik.values.number)}
//         >
//           Save
//         </Button>
//       </form>
//     </>
//   );
// };

// EditContact.propTypes = {
//   contactId: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

// export default EditContact;
