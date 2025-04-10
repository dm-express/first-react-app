// const UserDetails = (props) => {
//   console.log("props", props);
//   return (
//     <>
//       <div>
//         <p>Name: name</p>
//         <p>Department: department</p>
//       </div>
//     </>
//   );
// };

// typecasting: declaring type of the variable

// const UserDetails = (props: { name: string; department: string }) => {
//   return (
//     <>
//       <div>
//         <p>Name: {props.name}</p>
//         <p>Department: {props.department}</p>
//       </div>
//     </>
//   );
// };

// const UserDetails = (props: { name: string; department: string }) => {
//   const { name, department } = props;
//   return (
//     <>
//       <div>
//         <p>Name: {name}</p>
//         <p>Department: {department}</p>
//       </div>
//     </>
//   );
// };

const UserDetails = ({
  name,
  department,
}: {
  name: string;
  department: string;
}) => {
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Department: {department}</p>
      </div>
    </>
  );
};

export const IsUserOnline = ({ isOnline }: { isOnline: boolean }) => {
  return <p>{String(isOnline)}</p>;
};

export default UserDetails;

// fragments -> <></>
// fragments wrap the child components & it used for rendering nothing

// reusable component: -> Write once use multiple times
// heavily readable code should be readable as well
