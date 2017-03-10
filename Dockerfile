FROM python:3.6-slim

# Update OS
RUN sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y upgrade

# Install Python
RUN apt-get install -y python-dev python-pip

# Create app directory
RUN mkdir /home/app
ADD . /home/app

# Install app requirements
RUN pip install -r /home/app/requirements.txt

# Set the default directory for our environment
ENV HOME /home/app
WORKDIR /home/app

# Expose port 8000 for uwsgi
EXPOSE 8000

ENTRYPOINT ["python"]
CMD ["src/app.py"]