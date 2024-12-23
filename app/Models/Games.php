<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Games extends Model
{
    public function bettingTickets()
    {
        return $this->belongsToMany(BettingTicket::class, 'betting_ticket_game');
    }
}
