import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageInfo } from "../../components/PageInfo";

const App = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }}>
      <Box
        component="img"
        height={300}
        width={{ xs: "100%", sm: 200 }}
        sx={{ objectFit: "contain" }}
        alt="women wearing a red top and smiling"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Box>
      <Box sx={{ px: { xs: 0, sm: 2 } }}>
        <Stack gap={3}>
          <Typography variant="h4">Alice Smith</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt tellus nisl, nec euismod urna posuere sit amet. Maecenas
            hendrerit, odio a sollicitudin semper, felis nibh semper purus, a
            laoreet purus mauris nec nibh. Nam eget lobortis tortor. Fusce non
            massa quis lacus feugiat sollicitudin. Aliquam et pharetra mi.
            Phasellus vitae lacus pulvinar, feugiat elit at, faucibus ex. Sed ut
            sagittis elit, molestie aliquet libero. Sed sed diam ante.
            Pellentesque lacinia quam diam, id luctus metus elementum at.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export const MUIExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<App />}
    showPreviewButton
    code={`const App = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }}>
      <Box
        component="img"
        height={300}
        width={{ xs: "100%", sm: 200 }}
        sx={{ objectFit: "contain" }}
        alt="women wearing a red top and smiling"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></Box>
      <Box sx={{ px: { xs: 0, sm: 2 } }}>
        <Stack gap={3}>
          <Typography variant="h4">Alice Smith</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt tellus nisl, nec euismod urna posuere sit amet. Maecenas
            hendrerit, odio a sollicitudin semper, felis nibh semper purus, a
            laoreet purus mauris nec nibh. Nam eget lobortis tortor. Fusce non
            massa quis lacus feugiat sollicitudin. Aliquam et pharetra mi.
            Phasellus vitae lacus pulvinar, feugiat elit at, faucibus ex. Sed ut
            sagittis elit, molestie aliquet libero. Sed sed diam ante.
            Pellentesque lacinia quam diam, id luctus metus elementum at.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
    `}
  />
);
