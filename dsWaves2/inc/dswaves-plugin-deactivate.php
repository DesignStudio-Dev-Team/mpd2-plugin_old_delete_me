<?php

class dsWavesPluginDeactivate
{
  public static function deactivate() {
    flush_rewrite_rules();
  }
}
