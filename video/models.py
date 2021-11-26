from django.db import models

class Video(models.Model):
  title = models.CharField(max_length=200)
  video_key = models.TextField()

  def change_url(self):
    link = self.video_key
    split_link = link.split("/")[-1]
    return f'//www.youtube.com/embed/{split_link}'

  def get_only_key(self):
    return self.video_key.split("/")[-1]
