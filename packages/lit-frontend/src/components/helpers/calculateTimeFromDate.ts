export function calculateTimeFromDate(context: any): string {
  // Ensure post?.postTime exists and is of type string | Date | undefined
  const postedTime: Date | undefined = context.post?.postTime
    ? new Date(context.post.postTime)
    : undefined;

  if (!postedTime) {
    // Handle the case where postedTime or context.post is undefined
    console.error("Posted time is undefined");
    return "Post time cannot be found."; // or another appropriate value indicating an error or undefined state
  }

  // Get the current time as a Date object
  const currentTime: Date = new Date();

  // Calculate the difference in milliseconds
  const diff: number = currentTime.getTime() - postedTime.getTime();

  // Convert milliseconds to hours
  let hours: number = diff / (1000 * 60 * 60);
  hours = Math.round(hours);

  if (hours < 1) {
    return `Less than an hour ago.`;
  } else if (hours > 23) {
    return `${hours % 24} days ago`;
  } else {
    return `${hours} hours ago`;
  }
}
