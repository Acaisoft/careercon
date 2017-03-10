FROM python:3.6

# Update OS
RUN sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y upgrade

# Install Python
RUN apt-get install -y python-dev python-pip

RUN mkdir /home/app

# Add requirements.txt
ADD requirements.txt /home/app

# Install uwsgi Python web server
RUN pip install uwsgi
# Install app requirements
RUN pip install -r /home/app/requirements.txt

# Create app directory
ADD . /home/app

# Set the default directory for our environment
ENV HOME /home/app
WORKDIR /home/app

RUN /home/app/bin/install.sh

# Expose port 8000 for uwsgi
EXPOSE 8000

#ENTRYPOINT ["uwsgi", "--http", "0.0.0.0:8000", "--wsgi-file", "/home/app/src/app.py", "--callable", "wsgi_app", "--processes", "1", "--threads", "1", "--logto", "/var/log/app_wsgi.log"]
#CMD ["uwsgi --ini /home/app/config/uwsgi.ini"]
ENTRYPOINT ["systemctl start app"]
#CMD ["uwsgi", "--http", "0.0.0.0:8000", "--wsgi-file", "/home/app/src/app.py", "--callable", "wsgi_app", "--processes", "1", "--threads", "1", "--logto", "/var/log/app_wsgi.log"]
#ENTRYPOINT ["/bin/bash"]