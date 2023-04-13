import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material";
import { Styrare } from "../../utils/types";

interface InputProps {
  user: Styrare;
  openInfo: () => void;
}
/**
 *
 * @param {user} user - active user
 * @param {() => void} openInfo - opens modal about user
 * @returns
 */
export default function PresentationCard(props: InputProps) {
  return (
    <Card onClick={props.openInfo} sx={{ cursor: "pointer", height: "100%" }}>
      {props.user.imageName && (
        <CardMedia
          component="img"
          image={`/images/profilePictures/${props.user.imageName}.jpg`}
          alt={props.user.name}
        />
      )}
      <CardHeader title={props.user.name} align="center" />
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {props.user.responsibility}
        </Typography>

        <Typography>{props.user.email}</Typography>
      </CardContent>
    </Card>
  );
}
