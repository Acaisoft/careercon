#!/usr/bin/env bash
cp config/systemctl/app.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable app
systemctl start app
